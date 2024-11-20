import React from 'react'
import Image from 'next/image'


const OurAchievements = () => {
  return (
    <section className='max-w-sm md:max-w-4xl lg:max-w-4xl mb-10 md:p-5 w-full bg-white text-black'>
      <div className='flex items-center justify-center gap-1'>
        <div className='w-full h-[600px] md:h-[700px] p-5 flex flex-col items-start justify-between gap-10 group'>
          <div className='flex items-center justify-between w-full md:px-5'>
            <div className='text-left font-medium text-base md:text-lg text-black'>
              <h1 className='text-teal-700 text-2xl md:text-4xl font-bold'>5+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='text-center font-medium text-base md:text-lg text-black'>
              <h1 className='text-teal-700 text-2xl md:text-4xl font-bold'>100+</h1>
              <h2>Interior Projects</h2>
            </div>
            <div className='text-right font-medium text-base md:text-lg text-black'>
              <h1 className='text-teal-700 text-2xl md:text-4xl font-bold'>100+</h1>
              <h2>Happy Clients</h2>
            </div>
          </div>
          <div className='h-96 w-full overflow-hidden flex items-center' >
            <Image src={'/images/assets/asset8.jpg'} width={500} height={500} alt={''} className='w-full group-hover:scale-105 md:group-hover:rotate-6 smooth' />
          </div>
          <div>
            <p className='text-sm md:text-base text-center'>Choosing Livstyle Homes means choosing a partner who genuinely cares about bringing your vision to life. Our team combines technical expertise with creative flair, delivering spaces that are beautiful, practical, and built to last. We take pride in our ability to translate ideas into reality, paying close attention to each client’s preferences while adding our unique touch.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurAchievements
