"use client"
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className="overflow-hidden text-gray-700 ">
      <div className="flex items-center justify-center px-5 py-2 mx-auto lg:pt-24 lg:px-32 mt-10">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="/images/web_asset2.jpg" height={500} width={500} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="/images/web_asset2.jpg" height={500} width={500} />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="/images/web_asset1.jpg" height={500} width={500} />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="/images/web_asset2.jpg" height={500} width={500} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="/images/web_asset3.jpg" height={500} width={500} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="/images/web_asset2.jpg" height={500} width={500} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
