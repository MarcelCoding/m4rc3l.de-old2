<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <p>Last updated in {{ formatDate(article.updatedAt) }}.</p>
    <!--    <h2>Table of Contents</h2>-->
    <!--    <nav>-->
    <!--      <ul>-->
    <!--        <li v-for="link of article.toc" :key="link.id">-->
    <!--          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </nav>-->
    <NuxtContent :document="article" />
    <p>
      Spot an error? Go ahead and create a
      <a
        :href="
          'https://github.com/MarcelCoding/m4rc3l.de/edit/main/content/articles/' +
          article.slug +
          '.md'
        "
        >Pull Request</a
      >
      on GitHub.
    </p>
  </article>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'

interface Body {
  children?: Body[]
  value?: string
}

interface Article {
  slug: string
  title: string
  description: string
  updatedAt: string
  body: Body
}

export default {
  async asyncData({
    $content,
    params,
  }: Context): Promise<{ article: Article }> {
    const article = await $content('articles', params.slug).fetch()

    // @ts-expect-error
    return { article }
  },
  head(): object {
    return {
      // @ts-expect-error
      title: `${this.article.title} - m4rc3l.de`,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          // @ts-expect-error
          content: `${this.article.title} - m4rc3l.de`,
        },
        {
          hid: 'description',
          name: 'description',
          // @ts-expect-error
          content: this.article.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          // @ts-expect-error
          content: this.article.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          // @ts-expect-error
          content: this.generateKeywords(
            // @ts-expect-error
            `${this.article.title} ${this.article.description} ${this.search(
              // @ts-expect-error
              this.article.body
            )}`
          ),
        },
      ],
    }
  },
  methods: {
    formatDate(date: string | number | Date) {
      return new Date(date).toLocaleDateString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
    generateKeywords(data: string) {
      const words: { [word: string]: number } = {}

      data
        ?.replace(/[,.<>":=/\n\r()]/g, ' ')
        .split(' ')
        .map((value) => value.trim().toLowerCase())
        .filter((value) => value.length > 4)
        .forEach((value) => {
          if (words[value]) {
            words[value]++
          } else {
            words[value] = 1
          }
        })

      return Object.entries(words)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 15)
        .map(([x]) => x)
        .join(', ')
    },
    search(value: Body): string {
      if (value.children) {
        return value.children.map(this.search).join(' ')
      } else if (value.value) {
        return value.value
      } else {
        return ''
      }
    },
  },
}
</script>
