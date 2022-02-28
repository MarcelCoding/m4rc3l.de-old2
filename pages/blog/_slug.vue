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
    <p>Spot an error? Go ahead and create a <a
      :href="'https://github.com/MarcelCoding/m4rc3l.de/edit/main/content/articles/'+article.slug+'.md'">Pull Request</a> on
      GitHub.</p>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>
