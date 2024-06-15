import { formatDate } from "@/lib/utils";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostProps = {
  params: { slug: string[] };
};

async function getPostFromParams(params: BlogPostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return { title: post.title, description: post.description };
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slugAsParams.split("/") }));

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-8">
      <div className="mb-8 text-center prose prose-neutral">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {formatDate(post.date)}
        </time>
        <h1 className="text-3xl font-medium">{post.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
