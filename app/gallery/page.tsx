import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Gallery - LivStyle Homes",
  description: "Our Precious Gallery of fine Art works",
  alternates: {
    canonical: "https://livstylehomes.com/gallery",
  },
};

export default function Gallery() {
  const images = [
    "/images/assets/imgs/2.jpg",
    "/images/assets/imgs/4.jpg",
    "/images/assets/imgs/5.jpg",
    "/images/assets/imgs/6.jpg",
    "/images/assets/imgs/7.jpg",
    "/images/assets/imgs/8.jpg",
    "/images/assets/imgs/9.jpg",
    "/images/assets/imgs/10.jpg",
    "/images/assets/imgs/11.jpg",
    "/images/assets/imgs/12.jpg",
    "/images/assets/imgs/13.jpg",
    "/images/assets/imgs/14.jpg",
    "/images/assets/imgs/15.jpg",
    "/images/assets/imgs/16.jpg",
    "/images/assets/imgs/17.jpg",
    "/images/assets/imgs/18.jpg",
    "/images/assets/imgs/19.jpg",
    "/images/assets/imgs/20.jpg",
    "/images/assets/imgs/22.jpg",
    "/images/assets/imgs/23.jpg",
    "/images/assets/imgs/24.jpg",
    "/images/assets/imgs/25.jpg",
    "/images/assets/imgs/26.jpg",
    "/images/assets/imgs/30.jpg",
    "/images/assets/imgs/31.jpg",
    "/images/assets/imgs/32.jpg",
    "/images/assets/imgs/33.jpg",
    "/images/assets/imgs/34.jpg",
    "/images/assets/imgs/35.jpg",
    "/images/assets/imgs/36.jpg",
    "/images/assets/imgs/37.jpg",
    "/images/assets/imgs/38.jpg",
    "/images/assets/imgs/39.jpg",
    "/images/assets/imgs/40.jpg",
    "/images/assets/imgs/41.jpg",
    "/images/assets/imgs/42.jpg",
    "/images/assets/imgs/43.jpg",
    "/images/assets/imgs/44.jpg",
    "/images/assets/imgs/45.jpg",
    "/images/assets/imgs/46.jpg",
    "/images/assets/imgs/47.jpg",
    "/images/assets/imgs/48.jpg",
    "/images/assets/imgs/49.jpg",
    "/images/assets/imgs/50.jpg",
  ];

  return (
    <main className="overflow-hidden text-gray-700 flex items-center justify-center w-full h-max">
      <div className="flex flex-col items-center justify-center gap-4 px-5 py-2 mx-auto lg:px-32 mt-32">
        <div className="flex items-center justify-center text-center">
          <h1 className="text-3xl text-teal-700 font-semibold">Our Precious Gallery</h1>
        </div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          {[0, 1].map((columnIndex) => (
            <div key={columnIndex} className="flex flex-wrap w-full md:w-1/2">
              {images
                .filter((_, index) => index % 2 === columnIndex)
                .map((src, index) => (
                  <div
                    key={index}
                    className={`${index % 3 === 2 ? "w-full" : "w-1/2"} flex items-center justify-center p-1 md:p-2`}
                  >
                    <Image
                      alt="gallery"
                      className="block hover:scale-105 aspect-video smooth object-cover object-center w-full rounded-lg h-auto"
                      src={src}
                      height={1000}
                      width={1000}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
