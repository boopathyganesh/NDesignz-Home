"use client"
import React, { useState } from 'react'
import ImageViewer from './ui/ImageViewer'
import Image from 'next/image'
import imageData from "@/context/image-tags.json"
const imageMap = imageData as Record<string, string[]>;
const GalleryComponent = () => {
  // const images = [
  //   "/images/assets/imgs/2.jpg",
  //   "/images/assets/imgs/4.jpg",
  //   "/images/assets/imgs/5.jpg",
  //   "/images/assets/imgs/6.jpg",
  //   "/images/assets/imgs/7.jpg",
  //   "/images/assets/imgs/8.jpg",
  //   "/images/assets/imgs/9.jpg",
  //   "/images/assets/imgs/10.jpg",
  //   "/images/assets/imgs/11.jpg",
  //   "/images/assets/imgs/12.jpg",
  //   "/images/assets/imgs/13.jpg",
  //   "/images/assets/imgs/14.jpg",
  //   "/images/assets/imgs/15.jpg",
  //   "/images/assets/imgs/16.jpg",
  //   "/images/assets/imgs/17.jpg",
  //   "/images/assets/imgs/18.jpg",
  //   "/images/assets/imgs/19.jpg",
  //   "/images/assets/imgs/20.jpg",
  //   "/images/assets/imgs/22.jpg",
  //   "/images/assets/imgs/23.jpg",
  //   "/images/assets/imgs/24.jpg",
  //   "/images/assets/imgs/25.jpg",
  //   "/images/assets/imgs/26.jpg",
  //   "/images/assets/imgs/30.jpg",
  //   "/images/assets/imgs/31.jpg",
  //   "/images/assets/imgs/32.jpg",
  //   "/images/assets/imgs/33.jpg",
  //   "/images/assets/imgs/34.jpg",
  //   "/images/assets/imgs/35.jpg",
  //   "/images/assets/imgs/36.jpg",
  //   "/images/assets/imgs/37.jpg",
  //   "/images/assets/imgs/38.jpg",
  //   "/images/assets/imgs/39.jpg",
  //   "/images/assets/imgs/40.jpg",
  //   "/images/assets/imgs/41.jpg",
  //   "/images/assets/imgs/42.jpg",
  //   "/images/assets/imgs/43.jpg",
  //   "/images/assets/imgs/44.jpg",
  //   "/images/assets/imgs/45.jpg",
  //   "/images/assets/imgs/46.jpg",
  //   "/images/assets/imgs/47.jpg",
  //   "/images/assets/imgs/48.jpg",
  //   "/images/assets/imgs/49.jpg",
  //   "/images/assets/imgs/50.jpg",
  // ];

  const [tag, setTag] = useState<string>("living")
  // ✅ Safely get fileNames for the current tag
  const fileNames = imageMap[tag] ?? [];

  // ✅ Construct full image URLs
  const images = fileNames.map((file) => `/images/assets/imgs/${tag}/${file}`);

  //console.log(images);


  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center my-10 max-w-6xl gap-5'>
        <div onClick={() => setTag("living")} className='relative group cursor-pointer flex flex-col items-center justify-center rounded-full overflow-hidden w-44 h-44 border-2 border-white'>
          <Image src={'/images/assets/imgs/17.jpg'} alt={''} height={300} width={300} className='h-full' />
          <h3 className='absolute text-white text-xl font-medium group-hover:bg-white/10 group-hover:backdrop-blur-xl w-full h-full flex items-center justify-center'>Living Room</h3>
        </div>
        <div onClick={() => setTag("bed")} className='relative group cursor-pointer  flex flex-col items-center justify-center rounded-full overflow-hidden w-44 h-44 border-2 border-white'>
          <Image src={'/images/assets/imgs/17.jpg'} alt={''} height={300} width={300} className='h-full' />
          <h3 className='absolute text-white text-xl font-medium group-hover:bg-white/10 group-hover:backdrop-blur-xl w-full h-full flex items-center justify-center'>Bed Room</h3>
        </div>
        <div onClick={() => setTag("kitchen")} className='relative group cursor-pointer  flex flex-col items-center justify-center rounded-full overflow-hidden w-44 h-44 border-2 border-white'>
          <Image src={'/images/assets/imgs/17.jpg'} alt={''} height={300} width={300} className='h-full' />
          <h3 className='absolute text-white text-xl font-medium group-hover:bg-white/10 group-hover:backdrop-blur-xl w-full h-full flex items-center justify-center'>Kitchen</h3>
        </div>
        <div onClick={() => setTag("dining")} className='relative group cursor-pointer  flex flex-col items-center justify-center rounded-full overflow-hidden w-44 h-44 border-2 border-white'>
          <Image src={'/images/assets/imgs/17.jpg'} alt={''} height={300} width={300} className='h-full' />
          <h3 className='absolute text-white text-xl font-medium group-hover:bg-white/10 group-hover:backdrop-blur-xl w-full h-full flex items-center justify-center'>Dining</h3>
        </div>
        <div onClick={() => setTag("office")} className='relative group cursor-pointer  flex flex-col items-center justify-center rounded-full overflow-hidden w-44 h-44 border-2 border-white'>
          <Image src={'/images/assets/imgs/17.jpg'} alt={''} height={300} width={300} className='h-full' />
          <h3 className='absolute text-white text-xl font-medium group-hover:bg-white/10 group-hover:backdrop-blur-xl w-full h-full flex items-center justify-center'>Office</h3>
        </div>
        <div onClick={() => setTag("commercial")} className='relative group cursor-pointer  flex flex-col items-center justify-center rounded-full overflow-hidden w-44 h-44 border-2 border-white'>
          <Image src={'/images/assets/imgs/17.jpg'} alt={''} height={300} width={300} className='h-full' />
          <h3 className='absolute text-white text-xl font-medium group-hover:bg-white/10 group-hover:backdrop-blur-xl w-full h-full flex items-center justify-center'>Commercial</h3>
        </div>
      </div>
      <div className="flex flex-wrap -m-1 md:-m-2">
        {images.length > 0 ? (
          [0, 1].map((columnIndex) => (
            <div key={columnIndex} className="flex flex-wrap w-full md:w-1/2">
              {images
                .filter((_, index) => index % 2 === columnIndex)
                .map((src, index) => (
                  <div
                    key={index}
                    className={`${index % 3 === 2 ? "w-full" : "w-1/2"
                      } flex items-center justify-center p-1 md:p-2`}
                  >
                    <ImageViewer src={src} alt="gallery" />
                  </div>
                ))}
            </div>
          ))
        ) : (
          <h3 className="text-center text-teal-600 max-w-3xl my-10 text-2xl font-medium">
            Our Architect is working hard on the drawing board. Designs will be published soon!
          </h3>
        )}
      </div>

    </div>
  )
}

export default GalleryComponent
