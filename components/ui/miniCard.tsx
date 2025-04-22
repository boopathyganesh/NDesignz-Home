import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    icon: string | StaticImageData;
    content: string;
}

const MiniCard = ({ title, icon, content }: CardProps) => {
    return (
        <div className='w-32 h-40 md:w-44 md:h-48 group bg-white hover:scale-105 text-black flex flex-col items-center justify-center rounded-xl p-1 md:p-2 md:gap-2 smooth border border-teal'>
            <Image src={icon} alt={title} className='w-16 md:w-28' height={500} width={500} priority />
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-xs md:text-sm font-bold mb-2 text-teal-700'>{title}</h1>
                <p className='text-[0.6rem] group-hover:text-black smooth'>{content}</p>
            </div>
        </div>
    )
}

export default MiniCard
