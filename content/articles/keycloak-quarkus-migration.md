---
title: Keycloak Quarkus Migration
description: This is a guide on how to upgrade from a Keycloak v16 running WildFly to a Keycloak v17 running Quarkus. This guide assumes that you are running a working Keycloak v16 using Docker.
---

## Backup

Remember to always create a backup before getting started.

## Configuration

Keycloak now has split the configuration into two parts:

- Build Configuration ... is defined on build time. (e.g. database type)
- Runtime Configuration ... is defined on runtime. (e.g. database credentials)

Unfortunately, the default docker image is only built for H2, an in-memory database for Java. Because of that, we are forced
to install the necessary Postgres drivers ourselves. Luckily Keycloak is providing a nice CLI that is easily
configurable using environment variables.

## Custom Image

The first step is to create a `Dockerfile` that look like the following:

```dockerfile
# Dockerfile
ARG KEYCLOAK_VERSION
FROM quay.io/keycloak/keycloak:${KEYCLOAK_VERSION}

ENV KC_DB=postgres
RUN /opt/keycloak/bin/kc.sh build
```

Now we are able to build our own image like this:

```bash
docker build \
  -t local/keycloak:17.0.0 \
  --build-arg=KEYCLOAK_VERSION=17.0.0 \
  .
```

or build it using docker-compose like this:

```yaml
# docker-compose.yaml
version: "3.9"

services:

  keycloak:
    image: local/keycloak:17.0.0
    build:
      context: .
      args:
        - "KEYCLOAK_VERSION=17.0.0"
```

and the following command:

```bash
docker-compose build
```

## Environment Variables

The environment variables also did slightly changed:

```properties
#.keycloak.env
KEYCLOAK_ADMIN=admin
KEYCLOAK_ADMIN_PASSWORD=<cool_password>

KC_DB_SCHEMA=public
KC_DB_URL_HOST=postgres
KC_DB_URL_DATABASE=keycloak
KC_DB_USERNAME=keycloak
KC_DB_PASSWORD=<another_cool_password>

KC_HOSTNAME=id.<cool_domain>
KC_PROXY=edge
```

`KC_PROXY` tells Keycloak to respect `X-Forwared`-headers and start without the configuration of certificates. Keycloak
has a nice list of all configuration parameters, that are all available either as a command-line argument or as an 
environment variable: [keycloak.org/server/all-config](https://www.keycloak.org/server/all-config) All options that have
a wrench in the last column need to be specified at build time (in the `Dockerfile`) al other are runtime configuration
options (for the `.env`).

## Startup Command

The last thing you have to do is to add the startup command `start`.

You `docker-compose.yaml` should look like this:

```yaml
# docker-compose.yaml
version: "3.9"

services:

  keycloak:
    command: start
```

## URL's

The tidiest thing is that Keycloak stripped the `/auth` from all URLs. If you have too many clients and don't want to
update every URL you can use the config
[`KC_HTTP_RELATIVE_PATH`](https://www.keycloak.org/server/all-config?q=http-relative-path) and set it to `/auth`.
Please note that this is a build option, which means you have to define it in your `Dockerfile`.
