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


const OurServices = () => {
    return (
        <section id='services' className='max-w-7xl'>
            <div className='flex flex-col items-center justify-center text-white gap-4'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-4xl text-gold-500 font-semibold mb-3'>Our Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam iusto ex, doloremque exercitationem modi voluptatem necessitatibus alias culpa. Nobis, nihil molestiae? Beatae debitis tempore earum saepe atque hic harum.</p>
                </div>
                <div className='my-10 flex items-center justify-center gap-10'>
                    <Carousel>
                        <CarouselContent className='max-w-7xl w-full'>
                            {services.map((item, index) => (
                                <CarouselItem key={index} className='basis-1/3'>
                                    <CarousalCard title={item.title} icon={item.image} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='text-gold-500' />
                        <CarouselNext className='text-gold-500' />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default OurServices
