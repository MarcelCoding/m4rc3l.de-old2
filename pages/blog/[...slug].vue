<template>
  <article>
    <Head>
      <Title>{{data.title}}</Title>
      <Meta name="og:title" :content="data.title"/>
      <Meta name="description" :content="data.description"/>
      <Meta name="og:description" :content="data.description"/>
      <Meta name="keywords" :content="data.keywords?.join(', ')"/>
    </Head>

    <h1>{{ data.title }}</h1>

    <p v-if="data.date || data.description" class="subtitle">
      <b v-if="data.date">{{ data.date ? formatRelativeTime(data.date) : null }}</b>
      <template v-if="data.date && data.description"> -</template>
      <template v-if="data.description">{{ data.description }}</template>
    </p>

    <ContentDoc></ContentDoc>

    <hr>

    <p>
      Found this post useful? Share it on
      <NuxtLink :to="twitterShare(params.slug, data.title)" target="_blank">Twitter</NuxtLink>
      or
      <NuxtLink :to="redditShare(params.slug, data.title)" target="_blank">Reddit</NuxtLink>
      :)
      <br>
      Spot a typo? Crate a
      <NuxtLink :to="githubEditLink(data._file)" target="_blank">Pull Request</NuxtLink>
      on GitHub.
    </p>
  </article>
</template>

<script setup lang="ts">
import {queryContent, useRoute} from "#imports";
import {formatRelativeTime} from "assets/date-format";
import {useAsyncData} from "#app";

const {params, path} = useRoute()

const {data} = await useAsyncData(`content-${path}`,
  () => queryContent()
    .where({_path: path})
    // .only(['_slug', '_path', 'date', 'title', 'description', 'body', 'keywords'])
    .findOne()
);

const twitterShare = (slug: string, title: string) => {
  const params = new URLSearchParams();
  params.append("text", `${title} via @MarcelCoding`);
  params.append("url", `https://m4rc3l.de/blog/${slug}`);

  return `https://twitter.com/share?${params.toString()}`;
};

// http://www.reddit.com/submit?title=How%20to%20format%20relative%20dates%20using%20native%20JavaScript&url=https://dberri.com/relative-dates-in-native-javascript
const redditShare = (slug: string, title: string) => {
  const params = new URLSearchParams();
  params.append("title", title);
  params.append("url", `https://m4rc3l.de/blog/${slug}`);

  return `https://www.reddit.com/submit?${params.toString()}`;
};

const githubEditLink = (slug: string) => {
  return `https://github.com/MarcelCoding/m4rc3l.de/edit/main/content/${slug}`;
};
</script>
