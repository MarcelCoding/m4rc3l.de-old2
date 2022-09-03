import {serverQueryContent} from '#content/server'
import {SitemapStream, streamToPromise} from 'sitemap'

export default defineEventHandler(async (event) => {
  event.res.setHeader("Content-Type", "application/xml");

  // Fetch all documents
  const docs = await serverQueryContent(event).only('_path').find()
  const sitemap = new SitemapStream({
    hostname: 'https://m4rc3l.de'
  })

  sitemap.write({url: '/', changefreq: 'monthly'})
  sitemap.write({url: '/tools', changefreq: 'monthly'})
  sitemap.write({url: '/tools/noten', changefreq: 'monthly'})

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly'
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
});
