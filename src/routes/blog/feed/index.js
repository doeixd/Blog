import RSS from "rss";
import posts from "../_posts";

const feed = new RSS({
  title: `PWM Glenn's Blog`,
  description: `PWM Glenn's Blog, typically about tech, and his life`,
  feed_url: `http://pwmglenn.com/blog/feed`,
  site_url: `http://pwmglenn.com`,
  image_url: `http://pwmglenn.com/logo-512.png`,
  managingEditor: `PWM Glenn`,
  copyright: `PWM Glenn 2020`,
  language: `en`,
  categories: [`tech`, `lifestyle`],
  pubDate: new Date().toUTCString(),
});

// console.log(posts)

posts.forEach((post) => {
  feed.item({
    title: post.title,
    description: post.description,
    author: "PWM Glenn",
    date: post.date,
    url: `http://pwmglenn.com/blog/${post.slug}`,
  });
});

const xml = feed.xml();

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  res.end(xml);
}
