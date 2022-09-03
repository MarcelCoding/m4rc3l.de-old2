import {Feed} from "feed";
import {serverQueryContent} from '#content/server'
import {CompatibilityEvent} from "h3";
import {ParsedContentMeta} from "@nuxt/content/dist/runtime/types";

export async function generateFeed(event: CompatibilityEvent): Promise<Feed> {
  const docs: ParsedContentMeta[] = await serverQueryContent(event).find();

  const feed = new Feed({
    title: 'm4rc3l.de',
    description: 'Hi, my name is Marcel. This is my website where you can find my personal profile and my blog.',
    id: 'm4rc3l.de',
    link: 'https://m4rc3l.de',
    language: 'en',
    image: 'https://m4rc3l.de/avatar.png',
    favicon: 'https://m4rc3l.de/favicon.ico',
    copyright: 'Marcel <https://m4rc3l.de>',
    updated: new Date(),
    generator: 'm4rc3l.de',
    feedLinks: {
      rss: 'https://m4rc3l.de/blog.rss',
      atom: 'https://m4rc3l.de/blog.atom',
      json: 'https://m4rc3l.de/blog.json',
    },
    author: {
      name: "Marcel",
      link: "https://m4rc3l.de",
    }
  });

  for (const post of docs) {
    feed.addItem({
      title: post.title ?? "",
      id: post._path,
      link: `https://m4rc3l.de${post._path}`,
      description: post.description,
      // TODO:, content
      author: [
        {
          name: 'Marcel',
          link: "https://m4rcl3.de"
        }
      ],
      date: new Date(post.date),
    });
  }

  return feed;
}
