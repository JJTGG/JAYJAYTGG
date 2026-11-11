import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import {
  IBM_Plex_Mono,
  Inter,
  Space_Grotesk
} from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap"
});

const themeInitScript = `
(function () {
  try {
    var savedTheme = localStorage.getItem("jayjaytgg-theme");
    var theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : "system";

    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "system";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://jayjaytgg.vercel.app"),
  title: {
    default: "JAYJAYTGG — Independent Builder",
    template: "%s — JAYJAYTGG"
  },
  description:
    "Independent products, practical tools, and systems built from ideas.",
  applicationName: "JAYJAYTGG",
  openGraph: {
    type: "website",
    url: "https://jayjaytgg.vercel.app/",
    siteName: "JAYJAYTGG",
    title: "JAYJAYTGG — Independent Builder",
    description:
      "Independent products, practical tools, and systems built from ideas."
  },
  verification: {
    google: "OJdnuEykow_C3HX6YgwzUyCKk6EOIIFkvcUXz3Bo19U"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={[
        spaceGrotesk.variable,
        inter.variable,
        ibmPlexMono.variable
      ].join(" ")}
    >
      <head>
        <Script
          id="theme-initialization"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: themeInitScript
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}