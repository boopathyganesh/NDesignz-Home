import type { Metadata } from "next";
import { Inter, Merienda } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ParallexWrap from "@/Providers/ParallexWrap";
import ScrollToTop from "@/components/ui/Scroll2Top";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"], display: "swap" });
const merienda = Merienda({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Livstyle Homes - Your Interior Pro",
  description: "Livstyle Homes - Your Interior Pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className} bg-white relative`}>
        <Navbar />
        <div className="min-h-screen w-full h-full">
          {children}
        </div>
        <ScrollToTop />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
