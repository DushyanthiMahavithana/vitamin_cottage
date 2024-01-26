import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import HomeBanner from '../images/homebanner.jpg'
import HomeImage1 from '../images/homepageimage1.jpg'
import HomeImage2 from '../images/homepageimage2.jpg'
import HomepageMenu from "@/components/HomepageMenu"
import SectionHeaders from "@/components/SectionHeaders"
import { ButtonDemo } from "@/components/Button"


export default function Home() {
  return (
  <>
  <div className="mb-20">
    <Image src={HomeBanner}></Image>
    <div className="mt-20 mb-20 text-center">

      <SectionHeaders 
      mainheader={'Welcome to Vitamin Cottage'}
      subheader={'Drink good, live good'}
      paragraph={'Drinking fruit juice is always beneficial because you would find all the nutrients in it and you would also remain hydrated. You can experience the overall health of your body. Drinking fruit juice can boost the immune system and also be a health promoter and disease prevention as well.'}> 
      </SectionHeaders>
      
      <ButtonDemo 
        button_name={'ORDER NOW'}
        button_link={'/menu'}>
      </ButtonDemo>

      <Image src={HomeImage1}></Image>
    </div>
    <div className="text-center">
      <SectionHeaders 
      mainheader={'Our Best Sellers'}>
      </SectionHeaders>

      <HomepageMenu />

    </div>
    
    <div className="relative max-w-full overflow-x-hidden mt-10">
      <Image src={HomeImage2} width={1600}></Image>
      <div className='absolute top-1/3 left-1/3 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-left text-white mt-32'>
        
        <SectionHeaders 
        subheader={'Sip, smile, repeat.'}
        mainheader={'Juice-tastic Day ahead!'}
        paragraph={'Nutrients vary widely depending on the fruits and vegetables you use for juicing and whether you buy the juice or make your own at home.'}>
        </SectionHeaders>
        
        <div className="mb-10 text-left font-mono">
          <p>- Diets high in fruits are widely recommended.</p>
          <p>- Fruits have historically held a place in dietary guidance.</p>
          <p>- concentrations of vitamins,vitamins C and A; minerals</p>
        </div>
        
        <div className="text-left">

        <ButtonDemo 
        button_name={'CONTACT US'}
        button_link={'/contactus'}>
        </ButtonDemo>

        </div>
      </div>
    </div>
  </div>  
  </>
  )
}
