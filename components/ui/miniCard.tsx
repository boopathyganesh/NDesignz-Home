import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    icon: string | StaticImageData;
    content: string;
}

const MiniCard = ({ title, icon, content }: CardProps) => {
    return (
        <div className='w-44 h-48 group bg-white hover:scale-105  text-black flex flex-col items-center justify-center rounded-xl p-2 gap-2 smooth border border-teal'>
            <Image src={icon} alt={title} className='w-28' height={500} width={500} />
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-sm font-bold mb-2 text-teal-700'>{title}</h1>
                <p className='text-xs group-hover:text-black smooth'>{content}</p>
            </div>
        </div>
    )
}

export default MiniCard
