import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import BackToTop from "@/components/back-to-top";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
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
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased dark scroll-smooth`}
    >
      <ThemeProvider>
        <body className="min-h-full bg-background">
          <Toaster position="top-center" reverseOrder={true} />
          {children}
          <BackToTop />
        </body>
      </ThemeProvider>
    </html>
  );
}
