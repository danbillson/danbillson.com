import Gallery from "@/components/gallery";
import Social from "@/components/social";

export default function Home() {
  return (
    <main className="mt-6 p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-medium">hey, i&apos;m dan 👋</h1>
      <p className="mt-10 text-slate-800">
        I&apos;m a software engineer, currently based in London. I was a
        cheerleader on Team England but have now moved over to volleyball,
        I&apos;m also a big fan of craft beer and coffee.
      </p>
      <Gallery />
      <Social />
    </main>
  );
}
