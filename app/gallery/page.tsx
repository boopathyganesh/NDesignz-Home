"use client"
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className="overflow-hidden text-gray-700 ">
      <div className="flex flex-col items-center justify-center gap-4 px-5 py-2 mx-auto lg:pt-24 lg:px-32 mt-32">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-3xl text-teal-700 font-semibold">Our Precious Gallery</h1>
        </div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset2.jpg" height={500} width={500} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset1.jpg" height={500} width={500} />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset3.jpg" height={500} width={500} />
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="w-full p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset4.jpg" height={500} width={500} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset5.jpg" height={500} width={500} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset6.jpg" height={500} width={500} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset2.jpg" height={500} width={500} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset1.jpg" height={500} width={500} />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset3.jpg" height={500} width={500} />
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="w-full p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset4.jpg" height={500} width={500} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset5.jpg" height={500} width={500} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block hover:scale-105 smooth object-cover object-center w-full h-full rounded-lg" src="/images/assets/asset6.jpg" height={500} width={500} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
