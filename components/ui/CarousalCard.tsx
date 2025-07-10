import React from 'react'
import Image from 'next/image'
import { CardProps } from '@/context/data'
import Link from 'next/link'
interface Props {
    description: string
}

const CarousalCard = ({ title, icon, id, description }: CardProps & Props) => {
    return (
        <Link href={`/services#${id}`} className='relative group w-80 md:w-96 h-52 group flex items-center justify-center rounded-3xl overflow-hidden shadow-white/25 shadow-2xl'>
            <Image src={icon} alt={title+" Design Coimbatore"} height={500} width={500} className='w-full h-auto group-hover:scale-110 smooth' priority />
            <div className='absolute bottom-0 w-full h-max flex flex-col items-center justify-center text-center rounded-t-lg bg-white/70 '>
                <h1 className='text-black font-semibold py-1'>{title}</h1>
                <p className='hidden group-hover:flex'>{description}</p>
            </div>
        </Link>
    )
}

export default CarousalCard
