import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Bgwrap from "@/components/Bgwrap";
import Sidebar from "@/components/Sidebar";
import Upbar from "@/components/Upbar";


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
        <Upbar />
        <Sidebar />
        {children}
        </body>
    </html>
  );
}
