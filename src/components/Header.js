import React from 'react'
import Link from 'next/link'
import { ButtonDemo } from './Button'

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <Link className='text-4xl text-green-500 py-2 font-mono' href={'/'}>VITAMIN COTTAGE</Link>
      <nav className='flex items-center gap-5 font-semibold font-mono'>
        <Link className=' hover:text-gray-400' href={'/'}>Home</Link>
        <Link className=' hover:text-gray-400' href={'/menu'}>Menu</Link>
        <Link className=' hover:text-gray-400' href={'/about'}>About Us</Link>
        <Link className=' hover:text-gray-400' href={'/contact'}>Contact</Link>
        
      </nav>
      <nav className='flex items-center gap-4 font-semibold font-mono'>
        <Link className=' hover:text-gray-400' href={'/login'}>login</Link>

        <ButtonDemo 
        button_name={'REGISTER'}
        button_link={'/register'}>
        </ButtonDemo>
        
      </nav>
    </header>
  )
}


