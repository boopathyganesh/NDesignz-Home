import type { Metadata } from "next";
import { Inter, Merienda } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/Scroll2Top";
import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from "@/components/GoogleAnalytics";


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
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <div className="min-h-screen w-full h-full">
          {children}
        </div>
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics trackingId="G-LN82J7GXJJ" />
        )}
        <ScrollToTop />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
