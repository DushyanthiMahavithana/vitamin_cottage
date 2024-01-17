import React from 'react'
import Image from 'next/image'
import GoogleIcon from '../../images/google.jpg'


export default function GoogleLogin() {
  return (
    <div>
        
        <button className='rounded-full border px-6 py-2 ml-36 mb-5 flex'>
        <Image src={GoogleIcon} alt={''} width={24} height={24} className='mr-2'></Image>
            Login with google
        </button>
      
    </div>
  )
}
