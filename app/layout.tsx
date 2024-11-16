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
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Livstyle Homes" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="google-site-verification" content="VB87c91FBhV8YPlqfhKYXAgQ0th7vxAXYVVMIQ0YW24" />
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
