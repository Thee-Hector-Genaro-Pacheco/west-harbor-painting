import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "West Harbor Painting | Professional Residential & Commercial Painting",
  description:
    "Premium painting contractor serving Los Angeles and Orange County. Fully licensed, bonded, and insured. Contact us for a free detailed estimate today!",
  keywords: [
    "painting contractor",
    "residential painting",
    "commercial painting",
    "Los Angeles painting services",
    "Orange County painters",
    "interior painting",
    "exterior painting",
    "cabinet refinishing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
      </body>
    </html>
  );
}
