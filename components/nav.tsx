import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex gap-4">
      <Link href="/">home</Link>
      <Link href="/work">work</Link>
      <Link href="/blog">blog</Link>
    </div>
  );
}
