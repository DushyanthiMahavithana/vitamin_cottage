import React from 'react'
import SectionHeaders from '@/components/SectionHeaders'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const contact = () => {
  return (
    <div className='mb-20'>
    
    <div className='text-center mt-20 mb-10'>
        <SectionHeaders
        mainheader={"Contact Us"}
        subheader={"Frequently Asked Questions"}
        >


        </SectionHeaders>
      
    </div>
    <div>
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Do you deliver to workplaces or events?</AccordionTrigger>
    <AccordionContent>
      
Yes, we offer delivery services to workplaces and events.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Can I customize my juice order?</AccordionTrigger>
    <AccordionContent>
    Yes, you can customize your juice order to suit your preferences.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>What forms of payment do you accept?</AccordionTrigger>
    <AccordionContent>
      
We accept cash, credit cards, and mobile payments such as Apple Pay and Google Pay.
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
    </div>
  )
}

export default contact
