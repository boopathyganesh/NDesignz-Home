import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { FAQ as FAQData } from '@/context/FAQ'


const FAQ = () => {
    return (
        <section className='max-w-sm md:max-w-md lg:max-w-7xl w-full text-black pb-10 flex flex-col items-center justify-center gap-10'>
            <div className='text-2xl md:text-4xl font-semibold text-center text-teal-700'>
                <h1>Frequently Asked Questions</h1>
            </div>
            <Accordion type="single" collapsible className='max-w-xs md:max-w-4xl mx-auto w-full' defaultValue="0">
                {FAQData.map((faq, index) => (
                    <AccordionItem key={index} value={index.toString()} className='w-full'>
                        <AccordionTrigger className='text-teal-600 text-left'>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}

            </Accordion>
        </section>
    )
}

export default FAQ
