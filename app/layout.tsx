import type { Metadata } from "next";
import { Inter, Merienda } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ParallexWrap from "@/Providers/ParallexWrap";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const merienda = Merienda({ subsets: ["latin"], display: "swap" });

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
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <ParallexWrap>
        <body className={`${inter.className} bg-black-700`}>
          <Navbar />
          <div className="min-h-screen w-full">
            {children}
          </div>
          <Footer />
        </body>
      </ParallexWrap>
    </html>
  );
}
