'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaAngleDown, FaArrowRightLong } from 'react-icons/fa6'
import { Button } from './ui/button';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import EnquiryForm from './Forms/Enquiry';
import * as gtag from '../lib/gtag';

interface CardProps {
    img: string;
    title: string;
    description: string;
    feat: string[]
}
type PointerDownOutsideEvent = CustomEvent<{ originalEvent: PointerEvent }>;
type FocusOutsideEvent = CustomEvent<{ originalEvent: FocusEvent }>;

const ServiceCards = ({ img, title, description, feat }: CardProps) => {
    const [featClass, setFeatClass] = useState<boolean>(true)
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
        <div className={` flex items-center justify-center max-w-sm md:max-w-xl w-full smooth rounded-2xl overflow-hidden shadow-xl gap-2 ${featClass ? "h-[27rem]" : "h-[29.5rem]"}`}>
            <div className='w-1/2 h-full flex items-center justify-center overflow-hidden bg-gray-300' >
                <Image src={img} alt={title} height={800} width={800} className='aspect-square hover:scale-110 smooth' />
            </div>
            <div className='relative w-1/2 h-full flex flex-col items-start justify-start md:px-2.5 py-5 gap-1'>
                <h4 className='text-lg md:text-[1.6rem] font-bold text-teal'>{title}</h4>
                <p className='text-xs md:text-sm text-balance'>{description}</p>

                <div className='flex flex-col items-start justify-start gap-1 my-2 h-full'>
                    <p className='text-sm md:text-base font-semibold'>What's Included</p>
                    <ul className={`list-inside list-disc text-xs md:text-sm text-wrap ${featClass ? "line-clamp-4" : "line-clamp-none"} md:w-[15rem]`}>
                        {feat.map((featName, i) => (
                            <li key={i} className='indent-2 md:indent-4'>
                                {featName}
                            </li>
                        ))}
                    </ul>
                    <p className='mt-2 flex items-center justify-start gap-2 font-semibold text-xs' onClick={() => setFeatClass(!featClass)}>View All Features <FaAngleDown className={`${featClass ? "rotate-0" : "rotate-180"}`} /></p>
                </div>
                <Button onClick={() => setOpenDialog(true)} className='sticky bottom-0 w-full text-white bg-teal-600 flex items-center hover:border border-teal-600'>Get Quote <FaArrowRightLong /></Button>
            </div>

            {/* Dialog */}

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
        </div>
    )
}

export default ServiceCards
