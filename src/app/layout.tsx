import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from '@/providers/Providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alypha | Infinite Possibilities for Creators and Managers",
  description: "Streamline your workflow with Alypha - The ultimate tool for product managers, creators, and SMEs. Featuring AI-powered automation, seamless integrations, and powerful collaboration tools.",
  keywords: "project management, automation, productivity tools, SME solutions, AI automation, workflow management",
  authors: [{ name: "Alypha Team" }],
  openGraph: {
    title: "Alypha | Infinite Possibilities for Creators and Managers",
    description: "Streamline your workflow with Alypha - The ultimate tool for product managers, creators, and SMEs.",
    url: "https://alypha.com",
    siteName: "Alypha",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alypha - Workflow Management Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alypha | Infinite Possibilities for Creators and Managers",
    description: "Streamline your workflow with Alypha - The ultimate tool for product managers, creators, and SMEs.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
