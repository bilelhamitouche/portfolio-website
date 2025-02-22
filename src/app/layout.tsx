import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bilel Hamitouche",
  description:
    "Explore the portfolio of Bilel Hamitouche, a passionate web developer specializing in TypeScript, NextJS, and modern web technologies. Discover innovative projects, skills, and insights into web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <body className={`${geistSans.className}`}>{children}</body>
    </html>
  );
}
