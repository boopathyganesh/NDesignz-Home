import React from 'react'
import { services } from '@/context/data'
import CarousalCard from './ui/CarousalCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'


const OurServices = () => {
    return (
        <section id='services' className='max-w-sm md:max-w-4xl lg:max-w-7xl my-10 px-5'>
            <div className='flex flex-col items-center justify-center text-black gap-4'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl text-teal-700 font-semibold mb-3'>Crafting Your Dream Spaces</h1>
                    <p>Transform your home or workspace into a beautiful blend of modern elegance and Indian charm. At <span className='text-teal font-semibold'>Livstyle Homes</span>, we design interiors that are not only stylish and functional but also deeply connected to the warmth of Indian culture. From vibrant living rooms and streamlined modular kitchens to custom furniture that speaks to your unique taste, we bring your dream spaces to life with creativity and craftsmanship.</p>
                </div>
                <div className='my-10 flex items-center justify-center gap-10'>
                    <Carousel opts={{ loop: true, dragFree: true }} plugins={[
                        Autoplay({ delay: 4000 })
                    ]}>
                        <CarouselContent className='max-w-sm md:max-w-3xl lg:max-w-7xl w-full'>
                            {services.map((item, index) => (
                                <CarouselItem key={index} className='basis-auto lg:basis-1/3'>
                                    <CarousalCard title={item.title} icon={item.image} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='text-white bg-teal hidden lg:flex' />
                        <CarouselNext className='text-white bg-teal hidden lg:flex' />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default OurServices
