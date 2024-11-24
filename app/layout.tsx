import type { Metadata } from "next";
import { Inter, Merienda } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/Scroll2Top";
import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import GAnalytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const merienda = Merienda({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Livstyle Homes - Your Interior Pro",
  description: "Livstyle Homes - Your Interior Pro",
  openGraph: {
    title: "LivStyle Homes",
    description: "Modern interior design services.",
    url: "https://livstylehomes.com/",
    siteName: "LivStyle Homes",
  },
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
        <link rel="canonical" href="https://livstylehomes.com/" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        <GAnalytics />
        <div className="min-h-screen w-full h-full">
          {children}
        </div>
        {/* {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics trackingId="G-LN82J7GXJJ" />
        )} */}
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <ScrollToTop />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
