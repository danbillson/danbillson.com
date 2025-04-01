"use client";

import { Section } from "./ui/section";
import { AnimatedBackground } from "@/components/ui/animated-background";
import type { Post } from "contentlayer/generated";
import Link from "next/link";

type LatestPostsProps = {
  posts: Post[];
};

export function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <Section className="mt-10">
      <h3 className="mb-3 text-lg font-medium">Latest Posts</h3>
      <div className="flex flex-col space-y-0">
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100"
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.2,
          }}
        >
          {posts.map((post) => (
            <Link
              key={post._id}
              className="-mx-3 rounded-xl px-3 py-3"
              href={post.slug}
              data-id={post._id}
            >
              <div className="flex flex-col space-y-1">
                <h4 className="font-normal">{post.title}</h4>
                <p className="text-muted-foreground">{post.description}</p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </Section>
  );
}
