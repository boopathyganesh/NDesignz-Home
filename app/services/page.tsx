"use client"

import { ServiceData } from "@/context/data";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from 'embla-carousel-autoplay'
import EnquiryForm from "@/components/Forms/Enquiry";
import * as gtag from '@/lib/gtag';
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Our Services - LivStyle Homes",
  description: "Our Valuable Services",
  alternates: {
    canonical: "https://livstylehomes.com/services",
  },
};

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center max-w-7xl mx-auto w-full overflow-hidden mt-40">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-700">Services We Offer</h1>
      <section className="flex flex-col items-center justify-center w-full my-5 text-center gap-5 px-4">
        <div className="flex items-center justify-center w-64">
          <Image src={"/images/Brand/brand.svg"} alt={"Livstyle Homes Logo"} height={500} width={500} className="w-full" />
        </div>
        <h1 className="text-xl md:text-2xl font-semibold text-teal-700">Bringing Your Dream Spaces to Life</h1>
        <p className="font-medium md:text-lg">At Livstyle Homes, we specialize in creating stunning interiors and exteriors that blend functionality, aesthetics, and modern Indian sensibilities. Our diverse range of services caters to residential, commercial, and outdoor spaces, ensuring that every corner of your dream space reflects your unique personality and style.</p>
      </section>
      <h1 className="text-4xl font-bold text-teal-700 text-center">Our Signature Services</h1>
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
                        <Image src={item} alt={`CarouselItem-${index}`} height={500} width={500} className="w-full p-2 rounded-3xl" />
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
      <section className="flex flex-col md:flex-row items-center justify-center gap-5 my-5 w-full px-4">
        <div className="flex flex-col items-center justify-center gap-3 w-full lg:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-700 text-center">Ready to Redefine Your Space?</h1>
          <p className="md:text-lg text-center">Get started with Livstyle Homes today. Whether you’re building your dream home, upgrading your office, or redesigning your kitchen, we’re here to make your vision a reality. Contact us for a consultation and take the first step toward your dream interiors.</p>
        </div>
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <EnquiryForm onSuccessSubmit={() => {
            gtag.event({
              action: 'click_button',
              category: 'Button',
              label: 'Subscribe Now',
              value: 1,
            });
          }} />
        </div>
      </section>
    </main>
  );
}
