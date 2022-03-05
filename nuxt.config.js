import pkg from './package.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'm4rc3l.de',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style.scss',
    '@fontsource/dm-mono/400.css',
    '@fontsource/dm-mono/400-italic.css',
    '@fontsource/dm-mono/500.css',
    '@fontsource/dm-mono/500-italic.css',
    '@fontsource/dm-sans/400.css',
    '@fontsource/dm-sans/400-italic.css',
    '@fontsource/dm-sans/700.css',
    '@fontsource/dm-sans/700-italic.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'nuxt-content-body-html',
      {
        fieldName: 'feedHtml',
        highlighter: undefined,
      },
    ],
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/sentry',
    '@nuxtjs/feed',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: {},
    meta: {
      name: pkg.name,
      autor: pkg.author,
      description: pkg.description,
      theme_color: '#1f2638',
      ogHost: 'https://m4rc3l.de',
      ogImage: {
        path: '/avatar.png',
        width: '512px',
        height: '512px',
        type: 'image/png',
      },
      twitterCard: 'summary',
      twitterSite: '@MarcelCoding',
      twitterCreator: '@MarcelCoding',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-gruvbox-dark.css',
      },
    },
  },

  sitemap: {
    hostname: 'https://m4rc3l.de/',
    gzip: true,
    routes: async () => {
      const routes = []
      const { $content } = require('@nuxt/content')
      const posts = await $content('articles').fetch()
      for (const post of posts) {
        routes.push(`blog/${post.slug}`)
      }
      return routes
    },
  },

  feed: [
    {
      create: generateFeed,
      path: '/blog.rss',
      type: 'rss2',
    },
    {
      create: generateFeed,
      path: '/blog.atom',
      type: 'atom1',
    },
    {
      create: generateFeed,
      path: '/blog.json',
      type: 'json1',
    },
  ],

  generate: {
    fallback: '404.html',
    subFolders: false,
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'errors/404.vue'),
      })
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: true,
    },
  },
}

async function generateFeed(feed) {
  const { $content } = require('@nuxt/content')

  feed.options = {
    title: 'Blog - m4rc3l.de',
    link: 'https://m4rc3l.de/blog',
    description: pkg.description,
  }

  const posts = await $content('articles').sortBy('createdAt', 'desc').fetch()

  posts.forEach((post) => {
    const url = `https://m4rc3l.de/blog/${post.slug}`
    feed.addItem({
      content: `${post.feedHtml}<p>Spot an error? Go ahead and create a<a href="https://github.com/MarcelCoding/m4rc3l.de/edit/main/content/articles/${post.slug}.md">Pull Request</a>on GitHub.</p>`,
      date: new Date(post.createdAt),
      description: post.description,
      id: url,
      link: url,
      title: post.title,
    })
  })
}
