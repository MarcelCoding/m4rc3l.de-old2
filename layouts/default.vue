<template>
  <div class="container">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 1rem;

  Header {
    margin-top: 1rem;
  }

  main {
    flex: 1;
  }

  Footer {
    margin-bottom: 1rem;
  }
}
</style>
