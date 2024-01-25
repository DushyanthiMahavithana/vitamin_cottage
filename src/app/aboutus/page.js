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


  
  const names = ["Paul Smith", "Julie Ross", "Hector Davidson", "Nicole Gray", "Luisa White","Hanna Kennedy"];
  const positions = ["Director", "Manager", "Senior Chef" ,"Chef", "Junior Chef","Marketing Advicer"];
  const teampic = [Paul, Julie, Hector, Nicole, Luisa, Hanna];
  

const page = () => {
  return (
    <>
    
    <div className='text-center mt-20 mb-20'>
        <SectionHeaders
        mainheader={"Our Story"}
        paragraph={"Juice Bar was born because our founders understood that wellness didn't have to be high maintenance. Prioritizing nutrition shouldn't mean sacrificing taste. What started as a little passion project continued to grow, expanding across states and infusing the pursuit of wellness with joy. As we continue to write Juice Bar's story, we begin every day with gratitude for the people who have carried us this far with your support and love for our fresh, homemade juices, smoothies, bowls, and more. "}>


        </SectionHeaders>
      
    </div>
    <Image src={AboutImage}></Image>
    <div className='mt-20 text-center'>
        <SectionHeaders 
        mainheader = "Our Team">

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

    </>
  )
}

export default page
