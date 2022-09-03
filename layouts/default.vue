<template>
  <div class="container">
    <header class="center">
      <NuxtLink to="/" class="title"><b>m4rc3l.de</b></NuxtLink>
      <nav>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/tools">Tools</NuxtLink>
        <NuxtLink to="https://github.com/MarcelCoding" target="_blank">GitHub</NuxtLink>
        <NuxtLink to="https://twitter.com/MarcelCoding" target="_blank">Twitter</NuxtLink>
      </nav>
    </header>
    <main class="center">
      <slot/>
    </main>
    <footer>
      <span>
        This website is self-made using
        <NuxtLink to="https://nuxtjs.org" target="_blank">Nuxt</NuxtLink>
        on
        <NuxtLink to="https://github.com/MarcelCoding/m4rc3l.de" target="_blank">GitHub</NuxtLink>.
      </span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem 0;

  header, main, footer {
    width: 100%;
  }

  header {
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 1.1rem;
    }

    nav {
      display: flex;
      column-gap: 0.5rem;
    }
  }

  main {
    flex-grow: 1;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  }
}
</style>
