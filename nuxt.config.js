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
    '@nuxtjs/robots',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/sentry',
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

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://m4rc3l.de/sitemap.xml',
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

  generate: {
    fallback: '404.html',
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
