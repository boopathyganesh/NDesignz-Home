import OurAchievements from "@/components/OurAchievements";
import OurExpertise from "@/components/OurExpertise";
import OurServices from "@/components/OurServices";
import Partners from "@/components/partners";
import Hero from "@/components/hero";
import Image from "next/image";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <OurExpertise />
      <OurAchievements />
      <OurServices />
      <Partners />
      <FAQ />
    </main>
  );
}
