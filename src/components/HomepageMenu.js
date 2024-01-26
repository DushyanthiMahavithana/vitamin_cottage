import React from 'react'
import ContentHomeMenu from '../helpers/ContentHomepageMenu'
import Image from 'next/image'
import { ButtonDemo } from './Button'


export default function HomepageMenu() {
  return (
  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
    {ContentHomeMenu.map(menuhome =>(
    <div key={menuhome.id} className="bg-gray-200 p-4 rounded-lg text-center">
      <Image src={menuhome.image} width={300} height={200} className="mb-4 rounded-md"></Image>
      <h2 className=' text-gray-600 mb-2 font-mono'>{menuhome.name}</h2>
        <div>
        <ButtonDemo 
        button_name={'VIEW MORE'}
        button_link={'/menu'}>
        </ButtonDemo>
        </div>
    </div>
    ))}
  </div>
  )
}
