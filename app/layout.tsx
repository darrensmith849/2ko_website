import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionRoot from "@/components/motion/MotionRoot";
import { siteUrl } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "2KO — Operational Excellence & AI Systems",
    template: "%s | 2KO",
  },
  description:
    "2KO makes operational improvement permanent through Six Sigma mastery and AI-powered management systems for complex organisations.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    siteName: "2KO",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('motion-ready');" +
              "setTimeout(function(){var els=document.querySelectorAll('[data-reveal]:not(.is-visible)');for(var i=0;i<els.length;i++)els[i].classList.add('is-visible');},1500);",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="pt-[68px]">{children}</div>
        <Footer />
        <MotionRoot />
      </body>
    </html>
  );
}
