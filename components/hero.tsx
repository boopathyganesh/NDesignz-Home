import Image from 'next/image'
import React, { useState } from 'react'
import HeroBG from "@/public/images/asset_23.jpg"
import { Button } from './ui/button'
import EnquiryForm from './Forms/Enquiry'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { HomeBg } from '@/context/data'
import Autoplay from "embla-carousel-autoplay"
import * as gtag from '../lib/gtag';
type PointerDownOutsideEvent = CustomEvent<{ originalEvent: PointerEvent }>;
type FocusOutsideEvent = CustomEvent<{ originalEvent: FocusEvent }>;

const Hero = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState(false);

  const handleInteractionOutside = (event: PointerDownOutsideEvent | FocusOutsideEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  function handleSuccess() {
    gtag.event({
      action: 'click_button',
      category: 'Button',
      label: 'Subscribe Now',
      value: 1,
    });
    setOpenDialog(false)
    setIsOpen(true)
  }

  return (
    <section className='max-w-sm md:max-w-4xl lg:max-w-full h-[370px] mt-20 md:mt-32 lg:mt-0 lg:h-[750px] w-full flex items-center justify-center gap-4 bg-white/10 bg-center bg-cover bg-opacity-15 overflow-hidden'>
      <div className='w-full h-full flex items-center justify-center relative'>
        <Carousel opts={{ loop: true, dragFree: true }} plugins={[
          Autoplay({ delay: 4000 })
        ]}>
          <CarouselContent className='max-w-full w-full m-0'>
            {HomeBg.map((hero, index) => (
              <CarouselItem key={index} className='w-full flex items-center justify-center p-0 relative'>
                <Image src={hero.Image} alt={'Banner Image'} width={1000} height={1000} className='w-full h-auto' />
                <div className='bg-black/40 absolute top-0 h-full w-full'></div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='text-white bg-teal border-none hidden md:flex absolute left-5 lg:left-10' />
          <CarouselNext className='text-white bg-teal border-none hidden md:flex absolute right-5 lg:right-10' />
        </Carousel>
        <div className='absolute top-[35%] lg:top-[40%] left-[50%] -translate-x-[50%] transform w-full lg:w-max flex flex-col items-center justify-center gap-5 p-5 lg:rounded-2xl lg:bg-black/50'>
          <div className='flex flex-col items-center justify-center text-center'>
            <h1 className='text-white text-xl lg:text-2xl xl:text-4xl leading-tight font-medium'>Unveil the Art of Indian Elegance - Interiors That Speak to the Soul</h1>
            <p className='text-white/90 mt-3 max-w-xl text-base lg:text-xl'>Making your home so beautiful, you'll never want to leave</p>
          </div>
          <div className='flex items-center justify-center gap-5'>
            <Button onClick={() => setOpenDialog(true)} className='hover:scale-105'>Lets Talk</Button>
            <Link className='group' href={"/gallery"}><span className='bg-white px-4 py-3 text-teal rounded-md text-sm font-medium hover:bg-teal hover:text-white hover:scale-105'>Visit our Gallery</span></Link>
          </div>
        </div>
        {/* <div className='w-1/2 flex items-center justify-center max-h-90 overflow-y-auto'>
          <EnquiryForm />
        </div> */}
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent onInteractOutside={handleInteractionOutside} className="max-w-xs lg:max-w-max border border-teal" style={{ zIndex: 99999 }}>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
            <EnquiryForm onSuccessSubmit={() => handleSuccess()} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>You Enquiry Request was Recorded!</AlertDialogTitle>
            <AlertDialogDescription>
              You will be receiving a Call or Whatsapp Conversion regarding this enquiry from our Expert Designers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}

export default Hero
