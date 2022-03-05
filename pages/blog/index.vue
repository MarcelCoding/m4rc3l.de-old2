<template>
  <article>
    <h1>Blog</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >{{ article.title }}
        </NuxtLink>
        - {{ article.description }}
      </li>
    </ul>
    <p>
      Feeds are available as
      <a href="/blog.rss">blog.rss</a>, <a href="/blog.atom">blog.atom</a> or
      <a href="/blog.json">blog.json</a>. Just add the appropriate file
      extension to the current URL.
    </p>
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
  head() {
    return { title: 'Blog - m4rc3l.de' }
  },
}
</script>
