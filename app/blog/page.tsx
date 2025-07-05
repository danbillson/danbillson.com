import { BlogPosts } from "@/components/blog-posts";
import { Section } from "@/components/ui/section";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "A collection of my thoughts and ideas on software engineering and projects.",
};

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div>
      <h1 className="font-medium text-2xl mt-14 mb-8 tracking-tighter">blog</h1>

      <BlogPosts posts={posts} />
    </div>
  );
}
