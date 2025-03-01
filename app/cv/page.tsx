import { Mdx } from "@/components/mdx-components";
import "@/styles/mdx.css";
import { allCVs } from "contentlayer/generated";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "Dan Billson's CV and professional experience",
};

export default function CVPage() {
  const cv = allCVs[0];

  return (
    <article className="py-8">
      <Mdx code={cv.body.code} />
    </article>
  );
}
