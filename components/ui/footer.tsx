import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAddressBook, FaBolt, FaPhone } from 'react-icons/fa6'
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='max-w-full flex flex-col items-center justify-end w-full h-max text-white bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("/images/assets/HomeBg/cover.jpg")` }}>
            <div className='flex items-center justify-between w-full py-5 lg:px-56 bg-black/70'>
                <div className='flex flex-col items-start justify-center gap-3 max-w-96 text-left'>
                    <div className='flex items-center justify-center p-2 bg-white rounded-xl'>
                        <Image src={'/images/Brand/brand.svg'} alt={''} height={200} width={200} />
                    </div>
                    <p className='font-light text-white/90'>Livstyle Homes is a premier interior design company based in Coimbatore, specializing in creating exceptional residential and commercial spaces across Coimbatore and beyond. Our team brings a wealth of expertise and a passion for innovation, blending the latest trends with timeless design principles to craft interiors that are as functional as they are beautiful.</p>
                </div>

                <div className='w-full flex items-start justify-evenly gap-5 text-lg'>
                    <div className='flex flex-col items-start justify-center'>
                        <h4 className='font-medium mb-3'>Quick Access</h4>
                        <ul className='w-full list-inside pl-5 flex flex-col items-start justify-center gap-1'>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaBolt className='group-hover:text-gold-500' />
                                Home
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaBolt className='group-hover:text-gold-500' />
                                About Us
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaBolt className='group-hover:text-gold-500' />
                                Gallery
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaBolt className='group-hover:text-gold-500' />
                                Services
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaBolt className='group-hover:text-gold-500' />
                                Contact Us
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <h4 className='font-medium mb-3'>Contact Information</h4>
                        <ul className='w-full list-inside pl-5 flex flex-col items-start justify-center gap-3'>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaPhone className='group-hover:text-gold-500' />
                                Phone: <span>+91 9876543210</span>
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaMailBulk className='group-hover:text-gold-500' />
                                Email: <span>support@livstylehomes.com</span>
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaAddressBook className='group-hover:text-gold-500' />
                                Address : <span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='max-w-full flex items-center justify-center w-full text-white border-t border-dashed border-white h-14 bg-teal'>
                <div className='max-w-7xl flex items-center justify-between w-full'>
                    <div>Powered by <Link href={'#'} className='text-gold-500 font-semibold'>iroX</Link></div>
                    <div>Copyright &copy; {new Date().getFullYear()} <span className='text-gold-400'>NDesignz</span> - All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
