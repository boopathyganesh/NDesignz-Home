"use client"
import OurAchievements from "@/components/OurAchievements";
import OurExpertise from "@/components/OurExpertise";
import OurServices from "@/components/OurServices";
import Partners from "@/components/partners";
import Hero from "@/components/hero";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { Parallax } from "react-scroll-parallax";
import AboutUs from "@/components/AboutUs";
import CreativeJourney from "@/components/CreativeJourney";
import Connect from "@/components/Connect";

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
