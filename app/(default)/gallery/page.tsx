import GalleryComponent from "@/components/GalleryComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Portfolio | LivStyle Homes – Stunning Projects in Coimbatore",
  description: "Explore LivStyle Homes’ interior design portfolio in Coimbatore. From residential homes to commercial spaces, see how we’ve transformed spaces in Saravanampatty, Sulur, and surrounding areas.",
  alternates: {
    canonical: "https://livstylehomes.com/gallery",
  },
};

export default function Gallery() {

  return (
    <main className="overflow-hidden text-gray-700 flex items-center justify-center w-full h-max">
      <div className="flex flex-col items-center justify-center gap-4 px-5 py-2 mx-auto lg:px-32 mt-32">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-3xl text-teal-700 font-semibold">Our Precious Gallery</h1>
        </div>
        <GalleryComponent />
      </div>
    </main>
  );
}
