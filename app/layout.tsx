import Nav from "@/components/nav";
import Social from "@/components/social";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Karla as FontSans } from "next/font/google";

export const metadata: Metadata = {
  title: {
    default: "Dan Billson",
    template: "%s | Dan Billson",
  },
  description:
    "Software engineer, volleyball player and craft beer enthusiast.",
  openGraph: {
    title: "Dan Billson",
    description:
      "Software engineer, volleyball player and craft beer enthusiast.",
    url: "https://danbillson.com",
    siteName: "Dan Billson",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main className="mt-6 p-6 max-w-2xl mx-auto">
          <Nav />
          {children}
          <Social />
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
