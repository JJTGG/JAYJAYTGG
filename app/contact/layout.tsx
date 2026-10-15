import type { Metadata } from "next";

const title = "Contact";
const description =
  "Have an idea, question, or project to discuss? Reach out to me by email, WhatsApp, Telegram, or through my professional profile.";
const url = "https://jayjaytgg.vercel.app/contact";

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

export default function ContactLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}