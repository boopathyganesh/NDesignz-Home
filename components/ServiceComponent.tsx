"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ServiceData } from "@/context/data";
import Image from "next/image";

import Autoplay from 'embla-carousel-autoplay'
const ServiceComponent = () => {
    return (
        <div className="flex flex-col items-start justify-center gap-5 py-5">
            {ServiceData.map((service, index) => (
                <section key={index} id={service.id} className="bg-teal-50 w-full rounded-2xl py-2 px-5 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-medium text-teal-600 text-center w-full my-3">{service.title}</h1>
                    <p className="text-center">{service.description}</p>
                    <div className={`flex ${index % 2 == 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"} items-center justify-between w-full my-3`}>
                        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
                            <ul className="my-3 list-inside list-disc">
                                <h3 className="text-xl font-medium">What We Offer</h3>
                                {service.offer.map((offer, index) => (
                                    <li key={index}>{offer}</li>
                                ))}
                            </ul>
                            <div>
                                <h1 className="text-xl font-medium">Why Choose Us?</h1>
                                <ul className="my-3 list-inside list-decimal ">
                                    {service.why.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <Carousel opts={{ loop: true, dragFree: true }} plugins={[
                                Autoplay({ delay: 6000 })
                            ]}>
                                <CarouselContent className='w-full'>
                                    {service.images.map((item, index) => (
                                        <CarouselItem key={index} className="">
                                            <Image src={item} alt={`CarouselItem-${index}`} height={500} width={500} className="w-full p-2 rounded-3xl" priority />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {/* <CarouselPrevious className='text-white bg-teal hidden lg:flex' />
                  <CarouselNext className='text-white bg-teal hidden lg:flex' /> */}
                            </Carousel>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default ServiceComponent
