import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import HomeBanner from '../images/homebanner.jpg'
import HomeImage1 from '../images/homepageimage1.jpg'
import HomeImage2 from '../images/homepageimage2.jpg'
import HomepageMenu from "@/components/HomepageMenu"

export default function Home() {
  return (
  <div className="mb-20">
    <Image src={HomeBanner}></Image>
    <div className="mt-20 mb-20 text-center">
      <h1 className="font-mono text-3xl mb-3">Welcome to Vitamin Cottage</h1>
      <p className="font-mono mb-10">Drink good, live good</p>
      <p className="font-mono mb-10">Drinking fruit juice is always beneficial because you would find all the nutrients in it and you would also remain hydrated. You can experience the overall health of your body. Drinking fruit juice can boost the immune system and also be a health promoter and disease prevention as well.</p>
      <Link href={'/'}>
        <button className='bg-green-500 px-8 py-2 rounded-lg font-mono mb-10  hover:text-gray-400 hover:bg-green-600'>ORDER NOW</button>
      </Link>
      <Image src={HomeImage1}></Image>
    </div>
    <h2 className="font-mono text-3xl mt-20 mb-20 text-center">Our Best Sellers</h2>
    <HomepageMenu/>
    <div className="relative max-w-full overflow-x-hidden mt-10">
      <Image src={HomeImage2} width={1600} ></Image>
      <div className='absolute top-1/3 left-1/3 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
        <p className='mt-80 font-mono text-left'>Sip, smile, repeat.</p>
        <h1 className='font-mono text-3xl mb-10 text-left'>Juice-tastic Day ahead!</h1>
        <p className='font-mono mx-auto mb-10 text-left'>Nutrients vary widely depending on the fruits and vegetables you use for juicing and whether you buy the juice or make your own at home.</p>
        <div className="mb-10 text-left font-mono">
          <p>- Diets high in fruits are widely recommended.</p>
          <p>- Fruits have historically held a place in dietary guidance.</p>
          <p>- concentrations of vitamins,vitamins C and A; minerals</p>
        </div>
        <div className="text-left">
          <Link href={"/#"}>
            <button className= 'bg-green-500 px-8 py-2 rounded-lg font-mono mb-10  hover:text-gray-400 hover:bg-green-600'>READ MORE</button>
          </Link>
        </div>
      </div>
    </div>
  </div>  
  )
}
