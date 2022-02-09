<template>
  <article>
    <h1>Marcel</h1>

    <p>
      Hi, my name is
      <nuxt-img src="/icon.png" alt="(Avatar)" />
      Marcel. This is my website where you can find my personal profile and my
      blog.
    </p>

    <h2>Technologies</h2>
    <p>
      I'm mainly a
      <a
        href="https://en.wikipedia.org/wiki/Java_(programming_language)"
        target="_blank"
        >Java Developer</a
      >, who is currently trying to learn
      <a href="https://www.rust-lang.org/" target="_blank">Rust</a>. I deploy
      most of the stuff that I create or use using
      <a href="https://www.docker.com" target="_blank">Docker</a>. Besides
      backends, I also work on frontends in the past mostly with the framework
      <a href="https://angular.io" rel="noopener" target="_blank">Angular</a>
      but in the recent time I also used some
      <a href="https://nuxtjs.org" rel="noopener" target="_blank">NuxtJS</a>.
    </p>

    <h2>Other</h2>
    <p>
      As you may have noticed, my favorite color is
      <a href="https://en.wikipedia.org/wiki/Orange_(colour)" target="_blank"
        >orange</a
      >.
    </p>

    <h2>Contact</h2>
    <p>You can reach out to me at one of the following ways:</p>
    <ul>
      <li>
        Write me an E-Mail to
        <a href="mailto:hello@m4rc3l.de"><code>hello@m4rc3l.de</code></a
        > (if you want, also encrypted),
      </li>
      <li>
        join the
        <a target="_blank" href="https://the-morpheus.de/discord"
          >The Morpheus Discord</a
        >
        Server and write an private message to <code>@Marcel#3615</code>,
      </li>
      <li>
        or if you know my Matrix Tag, you are very welcome to contact me on
        Matrix.
      </li>
    </ul>
    <p>
      My Keys:
    </p>
    <ul>
      <li><b>SSH</b> - <a href="/id_ed25519.pub"><code>id_ed25519.pub</code></a></li>
      <li><b>PGP</b> - <a href="/0x227D09E1.asc"><code>0x227D09E1.asc</code></a> (<code>hello@m4rc3l.de</code>)</li>
    </ul>
  </article>
</template>

<style scoped lang="scss">
img {
  width: 1rem;
  height: 1rem;
  margin-bottom: -0.15rem;
}
</style>
