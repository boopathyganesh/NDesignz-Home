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
        <section className='max-w-7xl w-full text-white pb-10 flex flex-col items-center justify-center gap-10'>
            <div className='text-4xl font-semibold text-center text-gold-400'>
                <h1>FAQs About Home Interior Design</h1>
            </div>
            <Accordion type="single" collapsible className='max-w-4xl mx-auto w-full' defaultValue="0">
                {FAQData.map((faq, index) => (
                    <AccordionItem key={index} value={index.toString()} >
                        <AccordionTrigger className='text-gold-200'>{faq.question}</AccordionTrigger>
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
