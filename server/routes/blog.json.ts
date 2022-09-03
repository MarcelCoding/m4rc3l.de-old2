import {generateFeed} from "assets/feed";

export default defineEventHandler(async (event) => {
  event.res.setHeader("Content-Type", "application/json");
  const feed = await generateFeed(event);
  return feed.json1();
})
