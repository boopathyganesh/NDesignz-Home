import React from 'react'
import Image from 'next/image'


const OurAchievements = () => {
  return (
    <section className='mb-10 p-5 max-w-4xl w-full bg-white text-black'>
      <div className='flex items-center justify-center gap-1'>
        <div className='w-full h-[700px] p-5 flex flex-col items-start justify-between gap-10 group'>
          <div className='flex items-center justify-between w-full px-5'>
            <div className='text-left font-medium text-lg text-black'>
              <h1 className='text-teal-700 text-4xl font-bold'>5+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='text-left font-medium text-lg text-black'>
              <h1 className='text-teal-700 text-4xl font-bold'>100+</h1>
              <h2>Interior Projects</h2>
            </div>
            <div className='text-left font-medium text-lg text-black'>
              <h1 className='text-teal-700 text-4xl font-bold'>100+</h1>
              <h2>Happy Clients</h2>
            </div>
          </div>
          <div className='h-96 w-full overflow-hidden flex items-center' >
            <Image src={'/images/assets/HomeBg/cover2.jpg'} width={500} height={500} alt={''} className='w-full group-hover:scale-105 group-hover:rotate-6 smooth' />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quae quibusdam quas quo ex iure minus! Doloremque ipsum expedita at optio sit dolorum officia magnam, voluptatum reprehenderit ad quae. Fuga?</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurAchievements
