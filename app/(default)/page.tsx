import OurAchievements from "@/components/OurAchievements";
import OurExpertise from "@/components/OurExpertise";
import OurServices from "@/components/OurServices";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <OurExpertise />
      <OurAchievements />
      <OurServices />
    </main>
  );
}
