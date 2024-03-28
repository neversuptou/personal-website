import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Bgwrap from "@/components/bgwrap";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Danila Sereda",
  description: "Website for portfolio placement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="Ru">
      <body className={inter.className}>
        <Bgwrap />
        <Navbar />
        {children}
        </body>
    </html>
  );
}
