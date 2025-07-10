import React from 'react'
import Image from 'next/image'
import Bed from "@/public/images/svg/bed.svg"
import MiniCard from './ui/miniCard'
import { expertise } from '@/context/data'
import { Parallax } from 'react-scroll-parallax'


const OurExpertise = () => {
  return (
    <section className='my-10 max-w-sm md:max-w-4xl lg:max-w-full w-full h-max text-black bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url("/images/assets/asset2.jpg")` }}>
      <div className='flex flex-col items-center justify-center w-full h-full py-10 p-5 bg-white/80'>
        <div className='flex flex-col items-center justify-center text-center max-w-7xl'>
          <h1 className='text-2xl lg:text-4xl font-semibold text-teal-700 mb-3'>Why should you Consider Us?</h1>
          <p className='text-base md:text-lg font-light text-black'>We Work To Make Your Interior Lifestyle Dreams Come True. Be It Your Home, Office, Commercial, Residential, Industry, Or Public Space, Everyone Has Ideal Thoughts In Mind. No Mess! For Our Customers, Our Home Interiors Bring That Essence To Interior Lifestyle.</p>
        </div>
        <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
          {expertise.map((item, index) => (
            <MiniCard key={index} title={item.title} icon={item.icon}/>
          ))}
        </div>
      </div>
    </section>

  )
}

export default OurExpertise
