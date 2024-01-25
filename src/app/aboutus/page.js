import React from 'react'
import SectionHeaders from '@/components/SectionHeaders'
import Image from 'next/image'
import AboutImage from '../../images/about-page-image1.jpg'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
 import Paul from '../../images/TeamMembers/paul.jpg' 
 import Julie from '../../images/TeamMembers/julie.jpg' 
 import Hector from '../../images/TeamMembers/hector.jpg' 
 import Nicole from '../../images/TeamMembers/nicole.jpg'
 import Luisa from '../../images/TeamMembers/luisa.jpg'
 import Hanna from '../../images/TeamMembers/hanna.jpg'   
 import AboutImage2 from '../../images/aboutpageimage2.jpg'
 import { ButtonDemo } from '@/components/Button'
 import Link from 'next/link'


  
  const names = ["Paul Smith", "Julie Ross", "Hector Davidson", "Nicole Gray", "Luisa White","Hanna Kennedy"];
  const positions = ["Director", "Manager", "Senior Chef" ,"Chef", "Junior Chef","Marketing Advicer"];
  const teampic = [Paul, Julie, Hector, Nicole, Luisa, Hanna];
  

const page = () => {
  return (
    <div className='mb-20'>
    
    <div className='text-center mt-20 mb-20'>
        <SectionHeaders
        mainheader={"Our Story"}
        subheader={"Unveiling the Juicy Tale Behind Our Orchard of Flavors"}
        paragraph={"Juice Bar was born because our founders understood that wellness didn't have to be high maintenance. Prioritizing nutrition shouldn't mean sacrificing taste. What started as a little passion project continued to grow, expanding across states and infusing the pursuit of wellness with joy. As we continue to write Juice Bar's story, we begin every day with gratitude for the people who have carried us this far with your support and love for our fresh, homemade juices, smoothies, bowls, and more. "}>


        </SectionHeaders>
      
    </div>
    <Image src={AboutImage}></Image>
    <div className='mt-20 text-center'>
        <SectionHeaders 
        mainheader = {"Our Team"}
        subheader={"Meet the innovative minds driving our success"}>

        </SectionHeaders>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-3xl mx-auto"
    >
      <CarouselContent>
      {names.map((name, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="aspect-square items-center justify-center p-2">
                  
                  <Image
          src={teampic[index]}
          width={500}  // Adjust the width as needed
          height={400} // Adjust the height as needed
          className="rounded-sm mb-3" // Apply rounded corners if desired
        />
          <span className=" text-gray-600 mb-2 font-mono">{name}</span><br></br>
          <span className=" text-gray-600 mb-2 font-mono">{positions[index]}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    <div className="relative max-w-full overflow-x-hidden mt-10">
      <Image src={AboutImage2} width={1600}></Image>
      <div className='absolute top-1/3 left-1/3 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-left text-white mt-32'>
        
        <SectionHeaders 
        subheader={'Sip, smile, repeat.'}
        mainheader={'Follow Us on Instagram & Facebook'}
        paragraph={'Drinking fruit juice is always beneficial because you would find all the nutrients in it and you would also remain hydrated. You can experience the overall health of your body. Drinking fruit juice can boost the immune system and also be a health promoter and disease prevention as well.'}>
        </SectionHeaders>
        
        <div className=" flex mb-10 text-left font-mono">
        <p className='pr-2 hover:text-gray-400'><Link href={'/#'}>Facebook</Link></p>
            <p>|</p>
            <p className='pl-2 hover:text-gray-400'><Link href={'/#'}>Instagram</Link></p>
        </div>
        
        <div className="text-left">

        <ButtonDemo 
        button_name={'CONTACT US'}
        button_link={'/#'}>
        </ButtonDemo>

        </div>
      </div>
    </div>
    

    </div>
  )
}

export default page
