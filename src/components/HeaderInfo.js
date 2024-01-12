import React from 'react'
import Link from 'next/link'

export default function HeaderInfo() {
  return (
    <div className='flex mt-5 mb-5 font-mono'>
        <div className='flex mr-40'>
            <p className='px-7'><Link href={'/'}>vitamincottage@gmail.com</Link></p>
            <p>|</p>
            <p className='px-7'><Link href={'/'}>+94 71 123 4567</Link></p>
        </div>
        <div className='flex'>
            <p className='px-7'><Link href={'/'}>Facebook</Link></p>
            <p>|</p>
            <p className='px-7'><Link href={'/'}>Instagram</Link></p>
        </div>
    </div>
  )
}
