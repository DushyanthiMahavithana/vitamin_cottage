import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import HomeBanner from '../images/homebanner.jpg'
import HomeImage1 from '../images/homepageimage1.jpg'
import HomepageMenu from "@/components/HomepageMenu"

export default function Home() {
  return (
  <div>
    <Image src={HomeBanner}></Image>
    <div className="mt-20 mb-20 text-center">
      <h1 className="font-mono text-3xl mb-3">Welcome to Vitamin Cottage</h1>
      <p className="font-mono mb-10">Drink good, live good</p>
      <p className="font-mono mb-10">Drinking fruit juice is always beneficial because you would find all the nutrients in it and you would also remain hydrated. You can experience the overall health of your body. Drinking fruit juice can boost the immune system and also be a health promoter and disease prevention as well.</p>
      <Link href={'/'}>
        <button className='bg-green-500 px-8 py-2 rounded-lg font-mono mb-10'>Order now</button>
      </Link>
      <Image src={HomeImage1}></Image>
    </div>
    <h2 className="font-mono text-3xl mt-20 mb-20 text-center">Our Best Sellers</h2>
    <HomepageMenu/>
  </div>
  
    
    
  )
}
