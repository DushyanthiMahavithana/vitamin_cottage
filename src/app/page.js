import React from "react"
import Image from 'next/image'
import HomeBanner from '../images/homebanner.jpg'

export default function Home() {
  return (
  <div>
    <Image src={HomeBanner}></Image>
  </div>
    
    
  )
}
