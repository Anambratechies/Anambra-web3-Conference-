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
  title: "Anambra Web3 Conference 2.0 - Limitless Possibilities",
  description: "The largest Web3 conference in South-East Nigeria, bridging Web2 & Web3 talents. November 1st, 2025 | Stanel Dome, Awka",
  keywords: ["Web3", "Blockchain", "Conference", "Anambra", "Nigeria", "Hackathon", "Starknet"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
