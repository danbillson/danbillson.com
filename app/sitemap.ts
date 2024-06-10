export default async function sitemap() {
  let routes = ["", "/work", "/blog"].map((route) => ({
    url: `https://danbillson.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return routes;
}
