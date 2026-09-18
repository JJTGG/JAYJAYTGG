import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "JAYJAYTGG",
  description: "I build ideas into things that actually exist.",
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
    <html lang="en">
      <body>
       <Header />
       {children}
       <Footer />
      </body>
    </html>
  );
}