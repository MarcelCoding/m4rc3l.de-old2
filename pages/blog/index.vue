<template>
  <article>
    <h1>Blog</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{
          article.title
        }}</NuxtLink>
        - {{ article.description }}
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'

export default {
  async asyncData({ $content }: Context) {
    const articles = await $content('articles')
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
