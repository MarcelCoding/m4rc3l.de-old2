import {generateFeed} from "assets/feed";

export default defineEventHandler(async (event) => {
  event.res.setHeader("Content-Type", "application/rss+xml");
  const feed = await generateFeed(event);
  return feed.rss2();
})
