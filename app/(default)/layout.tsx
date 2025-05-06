
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/Scroll2Top";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Navbar />
            <div className="min-h-screen w-full h-full">
                {children}
            </div>
            <ScrollToTop />
            <Footer />
        </main>
    );
}
