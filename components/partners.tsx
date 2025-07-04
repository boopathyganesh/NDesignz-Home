"use client"
import { brands } from '@/context/data';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";


const Partners = () => {
    const isDesktop = useMediaQuery('lg')
    const spread = isDesktop ? 200 : 100;
    return (
        <section className='relative max-w-sm md:max-w-4xl lg:max-w-full w-full mx-auto' >
            <div className='my-10'>
                <h1 className='text-center text-2xl md:text-4xl text-teal-700 font-semibold mb-2'>Our Trusted World Grade Partners</h1>
            </div>
            <div className='flex items-center justify-center mb-10'>
                <Marquee speed={30} loop={0} autoFill gradient gradientColor='#b1efef' gradientWidth={spread} className='bg-white h-24 overflow-hidden filter bg-blend-color-burn'>
                    {brands.map((item, index) => (
                        <div key={index} className='flex items-center justify-center w-32 ml-24 overflow-hidden'>
                            <Image src={item.image} alt={item.brand} height={500} width={500} className='w-32 partner-img' priority />
                        </div>
                    ))}
                </Marquee>
            </div>

        </section>
    )
}

export default Partners
