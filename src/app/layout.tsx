import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        url: "/og-image.png", // You'll need to create this image
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
    images: ["/twitter-image.png"], // You'll need to create this image
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    shortcut: ["/shortcut-icon.png"],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
