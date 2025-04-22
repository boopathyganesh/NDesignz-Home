import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAddressBook, FaBolt, FaPhone } from 'react-icons/fa6'
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='max-w-full flex flex-col items-center justify-end w-full h-max text-white bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("/images/assets/HomeBg/cover.jpg")` }}>
            <div className='flex flex-col lg:flex-row items-center justify-between w-full py-5 md:px-5 xl:px-36 bg-black/70'>
                <div className='flex flex-col items-center lg:items-start justify-center gap-3 w-full px-3 lg:max-w-96 text-center lg:text-left'>
                    <div className='flex items-center justify-center p-2 bg-white rounded-xl'>
                        <Image src={'/images/Brand/brand.svg'} alt={'Livstyle Homes'} height={200} width={200} priority />
                    </div>
                    <p className='font-light text-white/90'>Livstyle Homes is a premier interior design company based in Coimbatore, specializing in creating exceptional residential and commercial spaces across Coimbatore and beyond. Our team brings a wealth of expertise and a passion for innovation, blending the latest trends with timeless design principles to craft interiors that are as functional as they are beautiful.</p>
                </div>

                <div className='w-full flex flex-col lg:flex-row items-center lg:items-start justify-evenly gap-5 lg:text-lg'>
                    <div className='flex flex-col items-start justify-center w-max lg:w-96'>
                        <h4 className='font-medium mb-3 my-3 lg:my-2'>Quick Access</h4>
                        <ul className='w-full list-inside pl-5 flex flex-col items-start justify-center gap-1'>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <Link href={'/'} className='flex items-center gap-2'>
                                    <FaBolt className='group-hover:text-gold-500' />
                                    Home
                                </Link>
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <Link href={'/about'} className='flex items-center gap-2'>
                                    <FaBolt className='group-hover:text-gold-500' />
                                    About Us
                                </Link>
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <Link href={'/gallery'} className='flex items-center gap-2'>
                                    <FaBolt className='group-hover:text-gold-500' />
                                    Gallery
                                </Link>
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <Link href={'/#services'} className='flex items-center gap-2'>
                                    <FaBolt className='group-hover:text-gold-500' />
                                    Services
                                </Link>
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <Link href={'/contact'} className='flex items-center gap-2'>
                                    <FaBolt className='group-hover:text-gold-500' />
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center lg:items-start justify-center text-start lg:max-w-[500px] w-full'>
                        <h4 className='font-medium lg:mb-3 my-3 lg:my-0'>Contact Information</h4>
                        <ul className='w-full list-inside pl-5 flex flex-col items-start justify-center gap-3'>
                            <li className='flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaPhone className='group-hover:text-gold-500 text-xl' />
                                Phone: +91 8610933642
                            </li>
                            <li className='flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaMailBulk className='group-hover:text-gold-500 text-xl' />
                                Email: livstylehomescbe@gmail.com
                            </li>
                            <li className='flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaAddressBook className='group-hover:text-gold-500 text-xl' />
                                Address : 1/291, Ramasamy Gounder Street, Near RV Hospital, Chinniyampalayam, 641062
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='max-w-full flex items-center justify-center w-full text-white border-t border-dashed border-white h-24 lg:h-14 bg-teal'>
                <div className='max-w-sm md:max-w-4xl lg:max-w-full md:px-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full text-center gap-1.5'>
                    <div className='text-sm lg:text-base font-semibold flex items-center justify-center'>
                        <Link href={'#'} className='text-gold-500 font-semibold bg-white rounded-lg'>
                            <Image src={'/images/Brand/powered-by-IE.svg'} alt={''} height={150} width={150} className='w-24 mx-2' priority />
                        </Link>
                    </div>
                    <div className='text-sm lg:text-base'>Copyright &copy; {new Date().getFullYear()} <span className='text-gold-400'>Livstyle Homes</span> - All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
