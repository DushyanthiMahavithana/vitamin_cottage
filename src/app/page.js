import React from "react"
import Link from 'next/link'
import Image from 'next/image'
import HomeBanner from '../images/homebanner.jpg'
import HomeImage1 from '../images/homepageimage1.jpg'
import HomeImage2 from '../images/homepageimage2.jpg'
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
    <div className="relative max-w-full overflow-x-hidden mt-10">
      <Image src={HomeImage2} width={1600} ></Image>
      <div className='absolute top-1/3 left-1/3 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <p className='mt-80 font-mono text-left'>Welcome to the</p>
            <h1 className='font-mono text-3xl mb-10 text-left'>Animal Kingdom</h1>
            <p className='font-mono mx-auto mb-10 text-left'>We're delighted to present a revolutionary pet food experience designed to elevate your furry friend's well-being. Our commitment to excellence is embedded in every kibble, promising a feast of flavors and nourishment that goes beyond the bowl.</p>
            <div className="mb-10 text-left font-mono">
            <p>- dfdfdfdfdfdfdfd</p>
            <p>- dfdfdfdfdfdfdfd</p>
            <p>- dfdfdfdfdfdfdfd</p>
            <p>- dfdfdfdfdfdfdfd</p>
            <p>- dfdfdfdfdfdfdfd</p>
            </div>
            <div className="text-left">
            <Link href={"/#"}>  
            <button className= 'bg-green-500 px-8 py-2 rounded-lg font-mono mb-10'>SHOP NOW</button>
            </Link>
            </div>
            </div>

    </div>
  </div>
  
    
    
  )
}
