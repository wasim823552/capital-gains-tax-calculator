import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Capital Gains Tax Calculator USA 2025-2026 | Free Tax Calculator",
  description: "Free Capital Gains Tax Calculator for USA. Calculate short-term and long-term capital gains tax rates for 2025-2026. Estimate taxes on stocks, crypto, and real estate investments accurately.",
  keywords: [
    "capital gains tax calculator",
    "capital gains tax rate 2025",
    "capital gains tax rate 2026",
    "short term capital gains tax",
    "long term capital gains tax",
    "crypto capital gains tax",
    "stock capital gains tax",
    "real estate capital gains tax",
    "how to calculate capital gains tax",
    "capital gains tax brackets",
    "capital gains tax 2025",
    "capital gains tax 2026",
    "investment tax calculator",
    "federal capital gains tax"
  ],
  authors: [{ name: "Capital Gains Tax Calculator" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Capital Gains Tax Calculator USA 2025-2026 | Free Tax Calculator",
    description: "Free Capital Gains Tax Calculator for USA. Calculate short-term and long-term capital gains tax rates for 2025-2026.",
    url: "https://capitalgainstaxcalculator.com",
    siteName: "Capital Gains Tax Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Gains Tax Calculator USA 2025-2026",
    description: "Free Capital Gains Tax Calculator for USA. Calculate your tax liability on investments.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://capitalgainstaxcalculator.com" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
