import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"], display:"swap" });

export const metadata: Metadata = {
  title: "NDesignz - Your Interior Pro",
  description: "NDesignz - Your Interior Pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <div className="min-h-screen w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
