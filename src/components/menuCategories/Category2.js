import React from 'react'
import Image from 'next/image'
import Smoothies from '../../helpers/Smoothies'
import { ButtonDemo } from '../Button'


export default function Category2() {
  return (
  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
    {Smoothies.map(menu =>(
    <div key={menu.id} className="bg-gray-200 p-4 rounded-lg text-center">
      <Image src={menu.image} width={300} height={200} className="mb-4 rounded-md"></Image>
      <h2 className=' text-gray-600 mb-2 font-mono'>{menu.name}</h2>
        <div>
        <ButtonDemo 
        button_name={'QUICK VIEW'}
        button_link={'/#'}>
        </ButtonDemo>
        </div>
    </div>
    ))}
  </div>
  )
}
