"use client"
import Image from 'next/image'
import Link from 'next/link'
import Brand from "@/public/images/Brand/brand-logo.svg"
import { useEffect, useState } from 'react';
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
import { Button } from './button';
import EnquiryForm from '../Forms/Enquiry';
type PointerDownOutsideEvent = CustomEvent<{ originalEvent: PointerEvent }>;
type FocusOutsideEvent = CustomEvent<{ originalEvent: FocusEvent }>;

const Navbar = () => {
    const [bgColor, setBgColor] = useState('bg-white');
    const [openDialog, setOpenDialog] = useState<boolean>(false)

    const handleInteractionOutside = (event: PointerDownOutsideEvent | FocusOutsideEvent) => {
        event.preventDefault();
        event.stopPropagation();
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBgColor('bg-white/70 border border-teal-700');
            } else {
                setBgColor('bg-white');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-3 left-[50%] transform -translate-x-[50%] max-w-7xl w-full flex items-center justify-between px-20 py-3 h-28 ${bgColor} rounded-3xl smooth`} style={{ zIndex: 99999 }}>
            <Link href={''} className='h-32 w-40 overflow-hidden flex items-center justify-center'>
                <Image src={Brand} alt={'Alpha Solutions'} className='w-full h-auto' />
            </Link>
            <nav className='w-1/2'>
                <ul className='list-none w-full flex items-center justify-between text-gold-400 font-medium text-lg'>
                    <li>
                        <Link className='text-black hover:text-teal-600' href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className='text-black hover:text-teal-600' href={'/gallery'}>Gallery</Link>
                    </li>
                    <li>
                        <Link className='text-black hover:text-teal-600' href={'/#services'}>Services</Link>
                    </li>
                    <li>
                        <Link className='text-black hover:text-teal-600' href={'/about'}>About Us</Link>
                    </li>
                    <li>
                        <Link className='text-black hover:text-teal-600' href={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Button onClick={() => setOpenDialog(true)} className='cursor-pointer px-5 py-3 bg-teal-600 rounded-xl text-white font-medium hover:border border-teal'>Lets Talk</Button>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent onInteractOutside={handleInteractionOutside} className="max-w-xs lg:max-w-max border border-teal" style={{ zIndex: 99999 }}>
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription></DialogDescription>
                        <EnquiryForm onSuccessSubmit={() => setOpenDialog(false)} />
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Navbar
