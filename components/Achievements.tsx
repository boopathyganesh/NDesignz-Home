'use client'
import useScrollTriggeredCountUp from '@/hooks/useScrollTriggeredCountUp'
import React, { useRef } from 'react'
import { FaCalendarDays, FaMedal, FaRegStar, FaUsers } from 'react-icons/fa6'

const Achievements = () => {
    const counterRef = useRef<HTMLDivElement>(null)
    return (
        <section className="flex items-center justify-between gap-5 my-10 max-w-5xl w-full" ref={counterRef}>
            <div className="flex flex-col items-center justify-center max-w-28 text-center p-2">
                <span className="flex items-center justify-center rounded-full w-20 h-20 bg-gray-200">
                    <FaUsers className="text-3xl text-teal-700" />
                </span>
                <span className='text-3xl font-semibold mt-3'>{useScrollTriggeredCountUp(counterRef, 500, 3000)}+</span>
                <span className='text-sm text-gray-400'>Happy Clients</span>
            </div>
            <div className="flex flex-col items-center justify-center max-w-28 text-center p-2">
                <span className="flex items-center justify-center rounded-full w-20 h-20 bg-gray-200">
                    <FaMedal className="text-3xl text-teal-700" />
                </span>
                <span className='text-3xl font-semibold mt-3'>{useScrollTriggeredCountUp(counterRef, 750, 3000)}+</span>
                <span className='text-sm text-gray-400'>Projects Done</span>
            </div>
            <div className="flex flex-col items-center justify-center max-w-28 text-center p-2">
                <span className="flex items-center justify-center rounded-full w-20 h-20 bg-gray-200">
                    <FaRegStar className="text-3xl text-teal-700" />
                </span>
                <span className='text-3xl font-semibold mt-3'>{useScrollTriggeredCountUp(counterRef, 10, 3000)}+</span>
                <span className='text-sm text-gray-400'>Years of Experience</span>
            </div>
            <div className="flex flex-col items-center justify-center max-w-28 text-center p-2">
                <span className="flex items-center justify-center rounded-full w-20 h-20 bg-gray-200">
                    <FaCalendarDays className="text-3xl text-teal-700" />
                </span>
                <span className='text-3xl font-semibold mt-3'>{useScrollTriggeredCountUp(counterRef, 24, 3000)}+</span>
                <span className='text-sm text-gray-400'>Response Time</span>
            </div>
        </section>
    )
}

export default Achievements
