import OurAchievements from "@/components/OurAchievements";
import OurExpertise from "@/components/OurExpertise";
import OurServices from "@/components/OurServices";
import Partners from "@/components/partners";
import Hero from "@/components/hero";
import FAQ from "@/components/FAQ";
import AboutUs from "@/components/AboutUs";
import CreativeJourney from "@/components/CreativeJourney";
import Connect from "@/components/Connect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Interior Designers in Coimbatore | LivStyle Homes – Transform Your Space",
  description: "Looking for the best interior design services in Coimbatore? LivStyle Homes offers personalised, stylish home and office designs in Saravanampatty, RS Puram, and beyond. Contact us now for a free consultation!",
  alternates: {
    canonical: "https://livstylehomes.com/",
  },
};

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <AboutUs />
      <OurServices />
      <OurExpertise />
      <OurAchievements />
      <CreativeJourney />
      <Partners />
      <FAQ />
      <Connect />
    </main>
  );
}
