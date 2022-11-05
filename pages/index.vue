<template>
  <article>
    <h1>Marcel</h1>

    <p>
      Hi, my name is
      <NuxtLink to="avatar.png" target="_blank" class="not">
        <nuxt-img alt=" " preload src="avatar.webp" title="My Avatar" width="30" height="30"/>
      </NuxtLink>
      Marcel. This is my website where you can find my personal profile and my
      blog.
    </p>

    <section>
      <h2>Technologies</h2>
      <p>
        I'm mainly a
        <NuxtLink to="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">Java</NuxtLink>
        Developer,
        who is currently trying to learn
        <NuxtLink to="https://www.rust-lang.org/" target="_blank">Rust</NuxtLink>.
        I use
        <NuxtLink to="https://www.docker.com" target="_blank">Docker</NuxtLink>
        to deploy most of the stuff.
        Besides backends, I also work on frontends in the past mostly with the framework
        <NuxtLink to="https://angular.io" target="_blank">Angular</NuxtLink>
        but
        in the recent time I also used some
        <NuxtLink to="https://nuxtjs.org" target="_blank">Nuxt</NuxtLink>.
        The site you are currently viewing is build using Nuxt. Feel free to have a look at its
        <NuxtLink to="https://github.com/MarcelCoding/m4rc3l.de" target="_blank">GitHub Repository</NuxtLink>.
      </p>
    </section>

    <section>
      <h2>Other</h2>
      <p>
        As you may have noticed,
        <NuxtLink to="https://en.wikipedia.org/wiki/Orange_(colour)" target="_blank">orange</NuxtLink>
        is my favorite color.
      </p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>You can reach out to me at one of the following ways:</p>
      <ul>
        <li>
          write me an E-Mail to
          <a class="email" data-user="hello"><code>[enable javascript]</code></a>
        </li>
        <li>
          write a message on Discord to
          <NuxtLink to="https://discord.com/users/398895973490884608" target="_blank"><code>@Marcel#3615</code>
          </NuxtLink>
        </li>
        <li>
          if you know my Matrix Tag, feel free to contact me there
        </li>
      </ul>
      <p>My Keys:</p>
      <ul>
        <li>
          <b>SSH</b> -
          <NuxtLink to="/id_ed25519.pub" target="_blank"><code>id_ed25519.pub</code></NuxtLink>
        </li>
        <li>
          <b>PGP</b> -
          <NuxtLink to="/0x227D09E1.asc" target="_blank"><code>0x227D09E1.asc</code></NuxtLink>
          (<code class="email" data-user="hello">[enable javascript]</code>)
        </li>
        <li>
          <b>PGP</b> -
          <NuxtLink to="/0xFAA965D4.asc" target="_blank"><code>0xFAA965D4.asc</code></NuxtLink>
          (<code class="email" data-user="hello">[enable javascript]</code>)
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
import {useHead} from "#imports";

useHead({titleTemplate: 'm4rc3l.de'});
</script>

<style lang="scss" scoped>
img {
  width: 1rem;
  height: 1rem;
  margin-bottom: -0.15rem;
  border-radius: 50%;
}
</style>
