import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = async() => {

    const session = await getServerSession (authOptions);
    if(session?.user){
        return <h1>Thank you {session?.user.username}</h1>
    }

  
};

export default page
