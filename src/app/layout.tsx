import type { Metadata } from "next";
import Header from '@/components/header';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khotso Nyokong | Portfolio",
  description: "Junior Software | 5 year experience in web dev",
};

export default function RootLayout({
  children, // will be a page or nested layout
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Include a shared UI here e.g a header or Sidebar */}
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
