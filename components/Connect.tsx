'use client'
import React from 'react'
import Image from 'next/image'
import { toast } from 'sonner'
import ConnectForm from './Forms/ConnectForm'
import * as gtag from '../lib/gtag';
const Connect = () => {
  function handleSucess() {
    gtag.event({
      action: 'click_button',
      category: 'Button',
      label: 'Subscribe Now',
      value: 1,
    });
    toast.success("Thank You for choosing Livstyle Homes!")
    toast.success("Your Enquiry Request has been Received!")
  }
  return (
    <section className='my-10 p-5 max-w-sm md:max-w-4xl lg:max-w-7xl w-full bg-white text-black flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center mb-10 text-center '>
        <h1 className='text-2xl md:text-4xl font-semibold text-teal-700 mb-3'>Let’s Make Your Dream Space a Reality</h1>
        <p>Ready to bring your vision to life? Reach out to us, and let’s discuss how we can craft a New Gen Indian home or workspace that’s uniquely yours.</p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-between w-full bg-teal-100 rounded-3xl'>
        <div className='w-full md:w-1/2 flex items-center justify-center  overflow-hidden rounded-3xl max-h-[450px] md:max-h-[550px] lg:max-h-[850px]'>
          <Image src={'/images/assets/connect.jpg'} alt={'Connect with us'} height={500} width={500} className='w-full h-auto' priority />
        </div>
        <div className='flex items-center justify-center md:w-1/2'>
          <ConnectForm onSuccessSubmit={handleSucess} />
        </div>
      </div>
    </section>

  )
}

export default Connect
