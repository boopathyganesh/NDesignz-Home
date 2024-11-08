'use client'
import React from 'react'
import Image from 'next/image'
import { toast } from 'sonner'
import ConnectForm from './Forms/ConnectForm'

const Connect = () => {
  function handleSucess() {
    toast.success("Thank You for choosing Livstyle Homes!")
    toast.success("Your Enquiry Request has been Received!")
  }
  return (
    <section className='my-10 p-5 max-w-7xl w-full bg-white text-black flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center mb-10'>
        <h1 className='text-4xl font-semibold text-teal-700 mb-3'>Let’s Make Your Dream Space a Reality</h1>
        <p>Ready to bring your vision to life? Reach out to us, and let’s discuss how we can craft a New Gen Indian home or workspace that’s uniquely yours.</p>
      </div>
      <div className='flex items-center justify-between w-full bg-teal-100 rounded-3xl'>
        <div className='w-1/2 flex items-center justify-center  overflow-hidden rounded-3xl max-h-[600px]'>
          <Image src={'/images/assets/connect.jpg'} alt={''} height={500} width={500} className='w-full h-auto' />
        </div>
        <div className='flex items-center justify-center w-1/2'>
          <ConnectForm onSuccessSubmit={handleSucess} />
        </div>
      </div>
    </section>

  )
}

export default Connect
