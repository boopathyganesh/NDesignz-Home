import React from 'react'
import Image from 'next/image'
import Bed from "@/public/images/svg/bed.svg"
import MiniCard from './ui/miniCard'
import { expertise } from '@/context/data'


const OurExpertise = () => {
  return (
    <section className='my-10 p-5 max-w-7xl w-full bg-black text-white'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-4xl font-semibold text-gold-500 mb-3'>Why should you Consider Us?</h1>
          <p className='text-lg font-light text-white/70'>We Work To Make Your Interior Lifestyle Dreams Come True. Be It Your Home, Office, Commercial, Residential, Industry, Or Public Space, Everyone Has Ideal Thoughts In Mind. No Mess! For Our Customers, Our Home Interiors Bring That Essence To Interior Lifestyle.</p>
        </div>
        <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
          {expertise.map((item,index)=>(
            <MiniCard key={index} title={item.title} icon={item.icon} content={item.content}  />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurExpertise
