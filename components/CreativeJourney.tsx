import Image from 'next/image'
import React from 'react'
interface Props {
  image: string;
  text: string;
  content: string;
}
const CreativeCard = ({ image, text, content }: Props) => {
  return (
    <div className='flex items-center justify-center rounded-3xl relative w-64 h-64 md:w-80 md:h-80 border border-teal overflow-hidden p-3 group smooth' style={{ zIndex: 999 }}>
      <Image src={image} alt={''} height={800} width={800} style={{ zIndex: 1010 }} />
      <div style={{ zIndex: 1200 }} className='flex flex-col items-center justify-center gap-3 text-center absolute top-0 left-[50%] transform smooth -translate-x-[50%] translate-y-96 group-hover:translate-y-0 backdrop-blur-md h-full w-full bg-white/40'>
        <h1 className='text-lg md:text-2xl font-medium text-teal'>{text}</h1>
        <p className='max-w-72 text-xs md:text-sm'>{content}</p>
      </div>
      <h1 className='text-2xl font-semibold text-teal-700 absolute top-0 h-full w-full text-center flex items-center justify-center backdrop-blur-sm bg-white/60' style={{ zIndex: "1011" }}>{text}</h1>
    </div>
  )
}

const CreativeJourney = () => {
  return (
    <div className='max-w-sm md:max-w-4xl lg:max-w-full w-full flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url("/images/assets/HomeBg/cover2.jpg")` }}>
      <div className='flex flex-col items-center justify-center bg-white/80 w-full h-full py-10'>
        <div className='flex flex-col items-center justify-center gap-4 text-center max-w-7xl'>
          <h1 className='text-2xl md:text-4xl text-teal-700 font-semibold'>Creative Journey of Livestyle Homes</h1>
          <p className='text-base'>At Livestyle Homes, we believe that every space tells a story. Our creative journey is built around bringing that story to life, turning your vision into a stunning reality that reflects your personality, values, and lifestyle. As seasoned interior and exterior designers, we blend aesthetic beauty with functionality, offering a seamless experience from conception to completion.</p>
        </div>
        <div className='flex items-center justify-center gap-5 flex-wrap my-5 max-w-7xl'>
          <CreativeCard image={'/images/assets/vision.png'} text={'Discovery & Vision Setting'} content='We begin by understanding your desires, preferences, and inspirations. During this stage, we delve deep into your goals and dreams for the space, whether it’s a modern home, a sophisticated office, or an inviting outdoor area. We carefully consider every detail to ensure we capture your unique style and requirements.' />
          <CreativeCard image={'/images/assets/proposal.png'} text={'Tailored Design Proposal'} content='With your vision in mind, we craft a personalized design that harmonizes modern aesthetics with timeless Indian cultural elements. From spatial planning and color palettes to furniture selection and decor accents, each aspect is thoughtfully curated. We involve you at every stage, making adjustments based on your feedback, ensuring the design truly resonates with your personality.' />
          <CreativeCard image={'/images/assets/material.png'} text={'Material Selection & Sustainability'} content='We believe that the foundation of any great design lies in the quality and sustainability of its materials. In this phase, we carefully select materials that align with your vision while ensuring durability and environmental responsibility. From eco-friendly wood options to sustainably sourced fabrics and low-VOC paints, we prioritize choices that are both beautiful and mindful of our planet.' />
          <CreativeCard image={'/images/assets/expert.png'} text={'Expert Execution'} content='Our skilled team brings the design to life with precision, combining the finest materials with expert craftsmanship. From detailed interiors to functional and stylish exteriors, we manage every detail to ensure impeccable quality and a seamless transformation. We collaborate closely with artisans and vendors to meet high standards, all while maintaining strict timelines and budget requirements.' />
          <CreativeCard image={'/images/assets/satisfaction.png'} text={'Customer Satisfaction & Aftercare'} content='We’re committed to not only meeting your expectations but exceeding them. Our work doesn’t stop when the final touches are made. We walk you through your transformed space, ensuring every detail is perfect. After completion, we provide ongoing support and guidance, ready to assist with any future updates, adjustments, or maintenance needs.' />
        </div>
      </div>
    </div>
  )
}

export default CreativeJourney
