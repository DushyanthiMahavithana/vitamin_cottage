'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import {useSelector} from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";


export default function HeaderInfo() {
  const item = useSelector((state) => state.cart);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    if (item) {
      setItemCount(item.length);
    } else {
      setItemCount(0);
    }
  }, [item]);

  return (
    <div className='flex mt-5 mb-5 font-mono'>
        <div className='flex mr-28'>
            <p className='px-5  hover:text-gray-400'><Link href={'mailto:vitamincottage2gmail.com'}>vitamincottage@gmail.com</Link></p>
            <p>|</p>
            <p className='px-5  hover:text-gray-400'><Link href={'tel:+94 71 123 4567'}>+94 71 123 4567</Link></p>
        </div>
        <div className='flex'>
            <p className='px-5  hover:text-gray-400'><Link href={'/#'}>Facebook</Link></p>
            <p>|</p>
            <p className='px-5  hover:text-gray-400'><Link href={'/#'}>Instagram</Link></p>
            <p className='px-7  hover:text-gray-400'><Link href={'/cart'} className='flex'><FaCartShopping/> <span>{itemCount}</span></Link></p>
        </div>
    </div>
  )
}
