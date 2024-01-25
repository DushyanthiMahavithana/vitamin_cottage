import React from 'react'
import Link from 'next/link'
import { ButtonDemo } from './Button'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SignoutUser from './SignoutUser';

export default async function Header() {
  const session = await getServerSession (authOptions);

  return (
    <header className='flex items-center justify-between'>
      <Link className='text-4xl text-green-500 py-2 font-mono' href={'/'}>VITAMIN COTTAGE</Link>
      <nav className='flex items-center gap-5 font-semibold font-mono'>
        <Link className=' hover:text-gray-400' href={'/'}>Home</Link>
        <Link className=' hover:text-gray-400' href={'/menu'}>Menu</Link>
        <Link className=' hover:text-gray-400' href={'/aboutus'}>About Us</Link>
        <Link className=' hover:text-gray-400' href={'/contactus'}>Contact</Link>
        
      </nav>
      <nav className='flex items-center gap-4 font-semibold font-mono'>
        {session?.user ? (
          <SignoutUser/>
          
  
        ) : (
          <Link className=' hover:text-gray-400' href={'/login'}>Login</Link>
        )}

        <ButtonDemo 
        button_name={'REGISTER'}
        button_link={'/register'}>
        </ButtonDemo>
        
      </nav>
    </header>
  )
}




