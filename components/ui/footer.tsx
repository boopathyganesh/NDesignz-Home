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
                    <p className='font-medium text-white/90'>Livstyle Homes – Quality You Can Trust.</p>
                    <p className='font-medium text-white/90'>Serving All of Coimbatore and Surrounding Areas </p>
                    <div className='flex items-center justify-start w-full'>
                        <Image src={'/images/assets/badges/clients.png'} alt={'150+ clients'} height={250} width={250} className='w-28' />
                        <Image src={'/images/assets/badges/experts.png'} alt={'verified experts'} height={250} width={250} className='w-28' />
                    </div>
                </div>

                <div className='w-full flex flex-col md:flex-row items-center lg:items-start justify-evenly gap-5 lg:text-lg'>
                    <div className='flex flex-col items-start justify-center w-max lg:w-96'>
                        <h4 className='font-medium text-xl mb-3 my-3 lg:my-2'>Quick Access</h4>
                        <ul className='w-full list-inside pl-5 flex flex-col items-start justify-center gap-1'>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <Link href={'/'} className='flex items-center gap-2'>
                                    <FaBolt className='group-hover:text-teal-500' />
                                    Home
                                </Link>
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <Link href={'/about'} className='flex items-center gap-2'>
                                    <FaBolt className='group-hover:text-teal-500' />
                                    About Us
                                </Link>
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <Link href={'/gallery'} className='flex items-center gap-2'>
                                    <FaBolt className='group-hover:text-teal-500' />
                                    Gallery
                                </Link>
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <Link href={'/#services'} className='flex items-center gap-2'>
                                    <FaBolt className='group-hover:text-teal-500' />
                                    Services
                                </Link>
                            </li>
                            <li className='text-center flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <Link href={'/contact'} className='flex items-center gap-2'>
                                    <FaBolt className='group-hover:text-teal-500' />
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center lg:items-start justify-center text-start max-w-sm lg:max-w-[500px] w-full'>
                        <h4 className='font-medium text-xl lg:mb-3 my-3 lg:my-0'>Contact Information</h4>
                        <ul className='w-full list-inside pl-3 flex flex-col items-start justify-start gap-3'>
                            <li className='w-full flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaPhone className='group-hover:text-teal-500 text-xl w-10' />
                                <Link href={"tel:+918610933642"} className='w-full'>Phone: +91 8610933642</Link>
                            </li>
                            <li className='w-full flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaMailBulk className='group-hover:text-teal-500 text-xl w-10' />
                                <Link href={"https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=livstylehomescbe@gmail.com"} className='w-full'>Email: livstylehomescbe@gmail.com</Link>
                            </li>
                            <li className='w-full flex items-center justify-start gap-2.5 group hover:font-medium hover:scale-105'>
                                <FaAddressBook className='group-hover:text-teal-500 text-xl w-10' />
                                <p className='w-full'>Address : 1/291, Ramasamy Gounder Street, Near RV Hospital, Chinniyampalayam, 641062</p>
                            </li>
                        </ul>
                        <ul className="w-full flex flex-row items-center justify-center gap-3 mt-6 mb-4 md:order-1 md:ml-4 md:mb-0">
                            <li className="ml-4">
                                <Link href="https://www.instagram.com/livstylehomes/" className="flex justify-center items-center text-teal bg-white hover:text-white hover:bg-teal-500 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                                    <svg className="w-12 h-12 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20.145" cy="11.892" r="1" />
                                        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                                        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link href="https://www.facebook.com/profile.php?id=61571037243716#" className="flex justify-center items-center text-teal bg-white hover:text-white hover:bg-teal-500 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                                    <svg className="w-12 h-12 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link href="https://www.linkedin.com/in/livstyle-homes-a5a165371/" className="flex justify-center items-center text-teal bg-white hover:text-white hover:bg-teal-500 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                                    <svg className="w-12 h-12 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='max-w-full flex items-center justify-center w-full text-white border-t border-dashed border-white h-24 lg:h-14 bg-teal'>
                <div className='max-w-sm md:max-w-4xl lg:max-w-full md:px-10 flex flex-col-reverse lg:flex-row items-center justify-between w-full text-center gap-1.5'>
                    <div className='text-sm lg:text-base font-semibold flex items-center justify-center'>
                        <Link href={'#'} className='text-teal-500 font-semibold bg-white/50 rounded-lg'>
                            <Image src={'/images/Brand/powered-by-IE.svg'} alt={'Powered by iroX Engine'} height={150} width={150} className='w-24 mx-2' priority />
                        </Link>
                    </div>
                    <div className='text-sm lg:text-base'>Copyright &copy; {new Date().getFullYear()} <span className='text-gold-400'>Livstyle Homes</span> - All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
