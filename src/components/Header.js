import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex items-center justify-between'>
      <Link className='text-4xl text-green-500 py-2 font-mono' href={'/'}>VITAMIN COTTAGE</Link>
      <nav className='flex items-center gap-10 font-semibold font-mono'>
        <Link href={'/'}>Home</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/about'}>About Us</Link>
        <Link href={'/contact'}>Contact</Link>
        <Link className='bg-green-500 px-8 py-2 rounded-lg' href={'/login'}>LOGIN</Link>
      </nav>
    </header>
  )
}


