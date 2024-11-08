import React from 'react'
import Image from 'next/image'
import Bed from "@/public/images/svg/bed.svg"
import MiniCard from './ui/miniCard'
import { expertise } from '@/context/data'
import { Parallax } from 'react-scroll-parallax'


const AboutUs = () => {
  return (
    <section className='my-10 p-5 max-w-7xl w-full bg-white text-black'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-4xl font-semibold text-teal-700 mb-3'>Who We Are?</h1>
          <p className='text-lg font-light text-black'>At <span className='text-teal font-semibold'>Livstyle Homes</span>, we bring the heart of Indian culture into every corner of your home. With over 5 years of experience in designing interiors that blend style, functionality, and a touch of tradition, we specialize in making your dream spaces a reality. Our team of expert designers and craftsmen draw inspiration from India's rich heritage to give each space a unique, soulful touch.</p>
        </div>
        <div className='flex items-center justify-center gap-5'>
          <div className='w-1/2 flex flex-col items-center justify-center text-center gap-2'>
            <h1 className='text-2xl font-medium text-teal'>Crafting Stories Through Spaces.</h1>
            <p>Inspired by India's cultural richness, we craft designs that aren’t just beautiful but also deeply meaningful.</p>
          </div>
          <div className='flex items-center justify-center rounded-3xl overflow-hidden'>
            <Image src={'/images/assets/asset1.jpg'} alt={''} height={500} width={500} />
          </div>
        </div>
        <div className='flex items-center justify-center gap-5'>
          <div className='flex items-center justify-center rounded-3xl overflow-hidden'>
            <Image src={'/images/assets/asset1.jpg'} alt={''} height={500} width={500} />
          </div>
          <div className='w-1/2 flex flex-col items-center justify-center text-center gap-2'>
            <h1 className='text-2xl font-medium text-teal'>Reimagining Indian Interiors for the New Gen Home</h1>
            <p>Blending the richness of India’s cultural heritage with today’s design trends, we create interiors that feel both timeless and current. Every space is a canvas for merging tradition with innovation, reflecting your style and sensibilities.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutUs
