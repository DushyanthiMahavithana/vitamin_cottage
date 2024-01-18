'use client';

import { signOut } from "next-auth/react";
import Link from "next/link";


const SignoutUser = () => {
  return (
    <Link className=' hover:text-gray-400' href={'/#'} onClick={()=>signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/login`,
    })}>Logout</Link>
  )
}

export default SignoutUser
