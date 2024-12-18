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
  title: "Home - LivStyle Homes",
  description: "Livstyle Homes - Your Interior Pro",
  alternates: {
    canonical: "https://livstylehomes.com/",
  },
};

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <AboutUs />
      <OurExpertise />
      <OurAchievements />
      <CreativeJourney />
      <OurServices />
      <Partners />
      <Connect />
      <FAQ />
    </main>
  );
}
