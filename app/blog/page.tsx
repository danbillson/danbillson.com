import { formatDate } from "@/lib/utils";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";

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
    <section>
      <h1 className="font-medium text-2xl mt-14 mb-8 tracking-tighter">blog</h1>

      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article key={post._id} className="group relative flex flex-col">
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
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </section>
  );
}
