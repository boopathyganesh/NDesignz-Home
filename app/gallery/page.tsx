"use client";
import Image from "next/image";

const imageLinks = [
  "/images/assets/asset1.jpg",
  "/images/assets/asset2.jpg",
  "/images/assets/asset3.jpg",
  "/images/assets/asset4.jpg",
  "/images/assets/asset5.jpg",
  "/images/assets/asset6.jpg",
  "/images/assets/asset1.jpg",
  "/images/assets/asset2.jpg",
  "/images/assets/asset3.jpg",
  "/images/assets/asset4.jpg",
  "/images/assets/asset5.jpg",
  "/images/assets/asset6.jpg",
];

export default function Gallery() {
  return (
    <main className="overflow-hidden text-gray-700">
      <div className="flex flex-col items-center justify-center gap-4 px-5 py-2 mx-auto lg:pt-24 lg:px-32 mt-32">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-3xl text-teal-700 font-semibold">Our Precious Gallery</h1>
        </div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          {imageLinks.map((src, index) => (
            <div
              key={index}
              className={`p-1 md:p-2 ${index % 3 === 0 ? "w-1/2" : "w-1/4"
                }`}
            >
              <Image
                alt={`gallery-${index}`}
                className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg"
                src={src}
                height={500}
                width={500}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
