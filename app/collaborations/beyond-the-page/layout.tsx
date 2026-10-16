import type { Metadata } from "next";

const title = "Beyond the Page — Website Collaboration";

const description =
  "A website I built for Sofiyah Bakare to document her six-week journey through the World Literacy Foundation's Youth Power in Action programme.";

const url =
  "https://jayjaytgg.vercel.app/collaborations/beyond-the-page";

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

export default function BeyondThePageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}