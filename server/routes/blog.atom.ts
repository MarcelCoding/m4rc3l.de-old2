import {generateFeed} from "assets/feed";

export default defineEventHandler(async (event) => {
  event.res.setHeader("Content-Type", "application/atom+xml");
  const feed = await generateFeed(event);
  return feed.atom1();
})
