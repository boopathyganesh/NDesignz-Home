import React from 'react'
import Image from 'next/image'
import { CardProps } from '@/context/data'
import Link from 'next/link'

const CarousalCard = ({ title, icon, id }: CardProps) => {
    return (
        <Link href={`/services#${id}`} className='relative w-80 md:w-96 h-52 group flex items-center justify-center rounded-3xl overflow-hidden shadow-white/25 shadow-2xl'>
            <Image src={icon} alt={title} height={500} width={500} className='w-full h-auto group-hover:scale-110 smooth' priority />
            <div className='absolute bottom-0 w-full h-8 flex items-center justify-center text-center rounded-t-lg bg-black/50 '>
                <h1 className='text-white font-semibold'>{title}</h1>
            </div>
        </Link>
    )
}

export default CarousalCard
