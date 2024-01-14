import React from 'react'
import ContentHomeMenu from '../helpers/ContentHomepageMenu'
import Image from 'next/image'
import Link from 'next/link'

export default function HomepageMenu() {
  return (
  <div className="grid grid-cols-3 gaps-4">
    {ContentHomeMenu.map(menuhome =>(
    <div key={menuhome.id} className="bg-gray-200 p-4 rounded-lg text-center">
      <Image src={menuhome.image} width={300} height={200} className="mb-4 rounded-md"></Image>
      <Link className='text-xl font-semibold mb-2' href={"/#"}></Link>
        <div className='items-center'>
         <h1 className=' text-gray-600'>{menuhome.name}</h1>
         <h1 className=' text-gray-600'>{menuhome.price}</h1>
         <Link className='ml-2' href={"/#"}>{menuhome.icon}</Link>
        </div>
    </div>
    ))}
  </div>
  )
}
