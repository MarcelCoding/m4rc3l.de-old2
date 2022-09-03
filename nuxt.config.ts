import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: true,
  css: [
    '@fontsource/dm-mono/400.css',
    '@fontsource/dm-mono/400-italic.css',
    '@fontsource/dm-mono/500.css',
    '@fontsource/dm-mono/500-italic.css',
    '@fontsource/dm-sans/400.css',
    '@fontsource/dm-sans/400-italic.css',
    '@fontsource/dm-sans/700.css',
    '@fontsource/dm-sans/700-italic.css',
    'assets/scss/main.scss'
  ],
  meta: {
    title: 'm4rc3l.de',
    titleTemplate: '%s - m4rc3l.de',
    viewport: 'width=device-width, initial-scale=1',
    charset: 'utf-8',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {hid: 'format-detection', name: 'format-detection', content: 'telephone=no'},
      {
        hid: 'description',
        name: 'description',
        content: 'Hi, my name is Marcel. This is my website where you can find my personal profile and my blog.'
      },
      {hid: 'theme-color', name: 'theme-color', content: '#1f2638'},
      {hid: 'og:type', name: 'og:type', content: 'website'},
      {hid: 'og:title', name: 'og:title', content: 'm4rc3l.de'},
      {hid: 'og:site_name', name: 'og:site_name', content: 'm4rc3l.de'},
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Hi, my name is Marcel. This is my website where you can find my personal profile and my blog.'
      },
      {hid: 'og:url', name: 'og:url', content: 'https://m4rc3l.de'},
      {hid: 'og:image', name: 'og:image', content: 'https://m4rc3l.de/avatar.png'},
      {hid: 'og:image:width', name: 'og:image:width', content: '512px'},
      {hid: 'og:image:height', name: 'og:image:height', content: '512px'},
      {hid: 'og:image:type', name: 'og:image:type', content: 'image/png'},
      {hid: 'twitter:card', name: 'twitter:card', content: 'summary'},
      {hid: 'twitter:site', name: 'twitter:site', content: '@MarcelCoding'},
      {hid: 'twitter:creator', name: 'twitter:creator', content: '@MarcelCoding'},
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/icon.png'}
    ],
    script: [
      {
        defer: true,
        async: true,
        "data-website-id": "f2cd72b7-fc15-46a6-9846-faad85b0afcb",
        "data-domains": "m4rc3l.de",
        src: "/idk_how_to_name_this.js"
      }
    ]
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge'
  ],
  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml',
        '/blog.atom',
        '/blog.json',
        '/blog.rss',
      ],
    }
  },
  content: {
    highlight: {
      theme: 'monokai',
      preload: [
        'docker',
        'shell',
        'yaml',
        'js'
      ]
    },
  },
  telemetry: false,
  typescript: {strict: true},
  image: {dir: 'assets/images'}
})
