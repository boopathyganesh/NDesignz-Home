import Image from 'next/image'
import React from 'react'

const MaintencePage = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 p-10 min-h-screen'>
            <Image src={'/images/404.svg'} alt={''} height={600} width={600} />
            <h1 className='text-3xl text-center text-teal-700 font-bold'>Something went wrong! Contact Administrator</h1>
        </div>
    )
}

export default MaintencePage
