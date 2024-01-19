import React from 'react'
import Image from 'next/image'
import GoogleIcon from '../../images/google.jpg'
import { signIn } from 'next-auth/react'


export default function GoogleLogin() {
  const loginWithGoogle = () =>signIn('google',{callbackUrl:'http://localhost:3000/profile'});
  return (
    <div>
        
        <button className='rounded-full border px-6 py-2 ml-36 mb-5 flex hover:text-gray-400'
        onClick={loginWithGoogle}>
        <Image src={GoogleIcon} alt={''} width={24} height={24} className='mr-2'></Image>
            Login with google
        </button>
      
    </div>
  )
}
