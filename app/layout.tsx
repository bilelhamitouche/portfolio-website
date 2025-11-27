import type { Metadata } from "next";
import { Lusitana } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const lusitana = Lusitana({
  variable: "--font-lusitana",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bilel Hamitouche",
  description:
    "Building the future of the web, one fullstack project at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <body className={`${lusitana.className} h-full antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
