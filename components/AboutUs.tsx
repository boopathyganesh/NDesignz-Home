import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className='lg:my-10 p-5 max-w-sm md:max-w-4xl lg:max-w-7xl w-full bg-white text-black'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-2xl lg:text-4xl font-semibold text-teal-700 mb-3'>Who We Are?</h1>
          <p className='text-base lg:text-lg font-light text-black'><span className='text-teal font-semibold'>Livstyle Homes</span> is a trusted interior designer and interior
            design studio in Coimbatore, specializing in stunning modular kitchens,
            wardrobes, false ceilings, and full-home interiors. Our experienced team delivers
            personalized designs, premium materials, and flawless execution—all tailored to
            your lifestyle and budget. Let us transform your space into something truly
            extraordinary</p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
          <div className='w-full md:w-1/2 flex flex-col items-center justify-center text-center gap-2'>
            <h1 className='text-2xl font-medium text-teal'>Crafting Stories Through Spaces.</h1>
            <p>Inspired by India's cultural richness, we craft designs that aren’t just beautiful but also deeply meaningful.</p>
          </div>
          <div className='flex items-center justify-center rounded-3xl overflow-hidden max-h-72'>
            <Image src={'/images/assets/asset1.jpg'} alt={'Crafting Stories'} height={500} width={500} className='hover:scale-110 smooth' priority />
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-5'>
          <div className='flex items-center justify-center rounded-3xl overflow-hidden max-h-72 '>
            <Image src={'/images/assets/asset7.jpg'} alt={'Reimagining Indian Interiors'} height={500} width={500} className='hover:scale-110 smooth' priority />
          </div>
          <div className='w-full md:w-1/2 flex flex-col items-center justify-center text-center gap-2'>
            <h1 className='text-2xl font-medium text-teal'>Reimagining Indian Interiors for the New Gen Home</h1>
            <p>Blending the richness of India’s cultural heritage with today’s design trends, we create interiors that feel both timeless and current. Every space is a canvas for merging tradition with innovation, reflecting your style and sensibilities.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutUs
