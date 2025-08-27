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
import AuthProvider from "@/components/AuthProvider";
import WhatsappButton from "@/components/WhatsappWidget";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const merienda = Merienda({ subsets: ["latin"], display: "swap" });

// export const metadata: Metadata = {
//   title: "Livstyle Homes - Your Interior Pro",
//   description: "Livstyle Homes - Your Interior Pro",
//   openGraph: {
//     title: "LivStyle Homes",
//     description: "Modern interior design services.",
//     url: "https://livstylehomes.com/",
//     siteName: "LivStyle Homes",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Livstyle Homes" />
        <link rel="manifest" href="/site.webmanifest" />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "LivStyle Homes",
                  "url": "https://livstylehomes.com/",
                  "description": "Modern interior design services in Coimbatore. Residential, office, and commercial designs.",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://livstylehomes.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Organization",
                  "name": "LivStyle Homes",
                  "url": "https://livstylehomes.com/",
                  "logo": "https://livstylehomes.com/favicon-32x32.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+918610933642",
                    "contactType": "customer service",
                    "areaServed": "IN"
                  },
                  "sameAs": [
                    "https://www.facebook.com/profile.php?id=61571037243716#",
                    "https://www.instagram.com/livstylehomes/",
                    "https://www.linkedin.com/in/livstyle-homes-a5a165371/"
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://livstylehomes.com/" },
                    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://livstylehomes.com/about" },
                    { "@type": "ListItem", "position": 3, "name": "Gallery", "item": "https://livstylehomes.com/gallery" },
                    { "@type": "ListItem", "position": 4, "name": "Contact", "item": "https://livstylehomes.com/contact" },
                    { "@type": "ListItem", "position": 5, "name": "Services", "item": "https://livstylehomes.com/services" }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white`}>
        <AuthProvider>
          {/* <Navbar /> */}
          <GAnalytics />
          <div className="min-h-screen w-full h-full">
            {children}
          </div>
          {/* {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics trackingId="G-LN82J7GXJJ" />
        )} */}
          {/* Google Analytics */}
          <WhatsappButton />
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
          {/* <Script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://livstylehomes.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "About",
                    "item": "https://livstylehomes.com/about"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Our Gallery",
                    "item": "https://livstylehomes.com/gallery"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Contact",
                    "item": "https://livstylehomes.com/contact"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Services",
                    "item": "https://livstylehomes.com/services"
                  }
                ]
              }),
            }}
          /> */}
          {/* <ScrollToTop /> */}
          <Toaster />
          {/* <Footer /> */}
        </AuthProvider>
      </body>
    </html>
  );
}
