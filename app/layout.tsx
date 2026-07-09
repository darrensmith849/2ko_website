import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionRoot from "@/components/motion/MotionRoot";
import ScrollProgressBar from "@/components/chrome/ScrollProgressBar";
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
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        {/* Pre-paint script — apply data-theme BEFORE first paint so
            no flash. Default is light on every load; the toggle can
            flip to dark for the current session only (theme is
            intentionally NOT persisted across reloads). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{document.documentElement.setAttribute('data-theme','light');}catch(e){}})();",
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip-to-content link for keyboard / screen-reader users. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent focus:text-white focus:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Skip to main content
        </a>
        <ScrollProgressBar />
        <Header />
        <div id="main" className="pt-[68px]">{children}</div>
        <Footer />
        <MotionRoot />
      </body>
    </html>
  );
}
