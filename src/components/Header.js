import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <Link className='text-4xl text-green-500 py-2 font-mono' href={'/'}>VITAMIN COTTAGE</Link>
      <nav className='flex items-center gap-10 font-semibold font-mono'>
        <Link className=' hover:text-gray-400' href={'/'}>Home</Link>
        <Link className=' hover:text-gray-400' href={'/menu'}>Menu</Link>
        <Link className=' hover:text-gray-400' href={'/about'}>About Us</Link>
        <Link className=' hover:text-gray-400' href={'/contact'}>Contact</Link>
        <Link className='bg-green-500 px-8 py-2 rounded-lg hover:text-gray-400 hover:bg-green-600' href={'/login'}>LOGIN</Link>
      </nav>
    </header>
  )
}


