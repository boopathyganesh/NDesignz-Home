"use client"
import Image from 'next/image'
import Link from 'next/link'
import Alpha from "@/public/images/Brand/logo-black.png"
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [bgColor, setBgColor] = useState('bg-black/0');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBgColor('bg-black');
            } else {
                setBgColor('bg-black/0');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full top-0 flex items-center justify-between px-20 py-4 h-28 ${bgColor} smooth`}>
            <Link href={''} className='h-24 w-24 overflow-hidden'>
                <Image src={Alpha} alt={'Alpha Solutions'} className='w-full h-auto' />
            </Link>
            <nav className='w-1/3'>
                <ul className='list-none w-full flex items-center justify-between text-gold-400 font-medium text-lg'>
                    <li>
                        <Link className='text-white hover:text-gold-500' href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className='text-white hover:text-gold-500' href={'/'}>Gallery</Link>
                    </li>
                    <li>
                        <Link className='text-white hover:text-gold-500' href={'/#services'}>Services</Link>
                    </li>
                    <li>
                        <Link className='text-white hover:text-gold-500' href={'/'}>About Us</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Link href={'/'} className='px-5 py-3 bg-gold-400 rounded-xl text-black font-medium'>Lets Talk</Link>
            </div>
        </div>
    )
}

export default Navbar
