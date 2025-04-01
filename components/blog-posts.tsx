"use client";

import { AnimatedBackground } from "@/components/ui/animated-background";
import { formatDate } from "@/lib/utils";
import type { Post } from "contentlayer/generated";
import Link from "next/link";

type BlogPostsProps = {
  posts: Post[];
};

export function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <AnimatedBackground
        enableHover
        className="w-full h-full bg-zinc-100 rounded-lg"
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.2,
        }}
      >
        {posts.map((post) => (
          <article
            key={post._id}
            className="group relative flex flex-col -mx-3 rounded-xl px-3 py-3"
            data-id={post._id}
          >
            <h2 className="text-2xl font-medium">{post.title}</h2>
            {post.date && (
              <time
                dateTime={post.date}
                className="text-sm text-muted-foreground"
              >
                {formatDate(post.date)}
              </time>
            )}
            {post.description && (
              <p className="text-muted-foreground mt-4">{post.description}</p>
            )}
            <Link href={post.slug} className="absolute inset-0">
              <span className="sr-only">View Article</span>
            </Link>
          </article>
        ))}
      </AnimatedBackground>
    </div>
  );
}
