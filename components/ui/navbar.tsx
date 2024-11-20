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
import { useRouter } from 'next/navigation';
import * as gtag from '@/lib/gtag';

type PointerDownOutsideEvent = CustomEvent<{ originalEvent: PointerEvent }>;
type FocusOutsideEvent = CustomEvent<{ originalEvent: FocusEvent }>;

const Navbar = () => {
    const [bgColor, setBgColor] = useState('bg-white');
    const [openDialog, setOpenDialog] = useState<boolean>(false)
    const [openMMenu, setOpenMMenu] = useState<boolean>(false)

    const router = useRouter()
    const handleInteractionOutside = (event: PointerDownOutsideEvent | FocusOutsideEvent) => {
        event.preventDefault();
        event.stopPropagation();
    };

    function handleMMenuClick() {
        setOpenMMenu(!openMMenu)
    }

    function linkClick(link: string) {
        setOpenMMenu(false)
        router.push(link)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBgColor('bg-white md:bg-white/70 border border-teal-700');
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
        <div className={`fixed top-3 left-[50%] transform -translate-x-[50%] max-w-sm md:max-w-4xl lg:max-w-7xl w-full flex items-center justify-between px-8 md:px-20 py-3 h-28 ${bgColor} rounded-3xl smooth`} style={{ zIndex: 99999 }}>
            <Link href={''} className='h-32 w-28 md:w-40 flex items-center justify-center'>
                <Image src={Brand} alt={'Livstyle Homes'} className='w-full h-auto' />
            </Link>
            <nav className='hidden lg:flex w-1/2'>
                <ul className='list-none w-full flex items-center justify-between text-teal-600 font-medium text-lg'>
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
            <div className='hidden lg:flex'>
                <Button onClick={() => setOpenDialog(true)} className='cursor-pointer px-5 py-3 bg-teal-600 rounded-xl text-white font-medium hover:border border-teal'>Lets Talk</Button>
            </div>
            <div className='flex items-center justify-center'>
                <label
                    htmlFor="nav_bar_icon"
                    className="lg:hidden w-9 h-10 cursor-pointer flex flex-col items-center justify-center space-y-1.5"
                >
                    <input
                        id="nav_bar_icon"
                        type="checkbox"
                        className="hidden peer"
                        checked={openMMenu}
                        onChange={handleMMenuClick}
                    />
                    <div
                        className="w-2/3 h-1 bg-teal-600 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"
                    ></div>
                    <div
                        className="w-full h-1 bg-teal-600 rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"
                    ></div>
                    <div
                        className="w-2/3 h-1 bg-teal-600 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"
                    ></div>
                </label>

            </div>
            <Dialog open={openMMenu} onOpenChange={setOpenMMenu}>
                <DialogDescription hidden>KYC Verification</DialogDescription>
                <DialogContent className='rounded-2xl flex flex-col items-start justify-center gap-2 max-w-xs bg-white text-black border-none'>
                    <DialogTitle></DialogTitle>
                    <ul className='list-none w-full flex flex-col items-center justify-between text-gold-400 font-medium text-lg gap-2'>
                        <li>
                            <Link onClick={() => linkClick("")} className='text-black hover:text-teal-600' href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link onClick={() => linkClick("")} className='text-black hover:text-teal-600' href={'/gallery'}>Gallery</Link>
                        </li>
                        <li>
                            <Link onClick={() => linkClick("")} className='text-black hover:text-teal-600' href={'/#services'}>Services</Link>
                        </li>
                        <li>
                            <Link onClick={() => linkClick("")} className='text-black hover:text-teal-600' href={'/about'}>About Us</Link>
                        </li>
                        <li>
                            <Link onClick={() => linkClick("")} className='text-black hover:text-teal-600' href={'/contact'}>Contact</Link>
                        </li>
                        <li>
                            <Button onClick={() => setOpenDialog(true)} className='cursor-pointer px-5 py-3 bg-teal-600 rounded-xl text-white font-medium hover:border border-teal'>Lets Talk</Button>
                        </li>
                    </ul>
                </DialogContent>
            </Dialog>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent onInteractOutside={handleInteractionOutside} className="max-w-xs lg:max-w-max border border-teal" style={{ zIndex: 99999 }}>
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription></DialogDescription>
                        <EnquiryForm onSuccessSubmit={() => {
                            setOpenDialog(false); gtag.event({
                                action: 'click_button',
                                category: 'Button',
                                label: 'Subscribe Now',
                                value: 1,
                            });
                        }} />
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Navbar
