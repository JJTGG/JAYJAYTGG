import type { Metadata } from "next";

const title = "About & Approach";
const description =
  "I build independently, think in systems, and experiment with ideas to understand what they need to become real products, tools, and systems.";
const url = "https://jayjaytgg.vercel.app/about";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url
  },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "JAYJAYTGG"
  },
  twitter: {
    card: "summary",
    title,
    description
  }
};

export default function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}