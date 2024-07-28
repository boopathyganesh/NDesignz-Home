import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col items-center justify-end w-full h-14 text-black'>
            <div></div>
            <div className='max-w-full flex items-center justify-center w-full text-white border-t border-dashed border-gold-300 h-12'>
                <div className='max-w-7xl flex items-center justify-between w-full'>
                    <div>Powered by <Link href={'#'} className='text-blue-500 font-semibold'>iroX</Link></div>
                    <div>Copyright &copy; {new Date().getFullYear()} <span className='text-gold-400'>NDesignz</span> - All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
