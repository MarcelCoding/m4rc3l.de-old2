<template>
  <article>
    <h1>Blog</h1>
    <ul>
      <li v-for="{ _path: slug, date, title, description } in blogPosts" :key="slug">
        <NuxtLink :to="slug"><b>{{ title }}</b></NuxtLink>
        {{ formatRelativeTime(date) }}
        -
        {{ description }}
      </li>
    </ul>
    <p>
      Feeds are available as
      <NuxtLink to="/blog.rss">blog.rss</NuxtLink>,
      <NuxtLink to="/blog.atom">blog.atom</NuxtLink>
      or
      <NuxtLink to="/blog.json">blog.json</NuxtLink>.
      Just add the appropriate file extension to the current URL.
    </p>
  </article>
</template>

<script setup lang="ts">
import {formatRelativeTime} from "assets/date-format";

import {queryContent, useHead} from "#imports";

const blogPosts = await queryContent('/blog')
  .sort({date: -1}) // show latest articles first
  .only(['_path', 'date', 'title', 'description'])
  .find();

useHead({title: 'Blog'});

</script>
