import { allPosts } from "contentlayer/generated";

export default async function sitemap() {
  let routes = ["", "/work", "/projects", "/blog"].map((route) => ({
    url: `https://danbillson.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  let blogs = allPosts.map((post) => ({
    url: `https://danbillson.com${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
