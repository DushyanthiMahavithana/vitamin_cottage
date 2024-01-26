import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import SectionHeaders from "@/components/SectionHeaders"
import React from 'react'
import Image from 'next/image'
import ProfilePageImage from '../../../images/profilepageimg.jpg'
import { ButtonDemo } from "@/components/Button"

const page = async() => {
    const session = await getServerSession (authOptions);
    if(session?.user){
        return  <>
        <div className="mt-20 text-center">
            <SectionHeaders
            mainheader={`Hi ${session?.user.username || session.user.name}... Thanks a Sip Million for Juicing In! 🍹`}
            subheader={"#GratefulSips #JuiceInJoy"}
            paragraph={"Your login is like a burst of refreshing flavor in our virtual orchard. We're juiced up with gratitude that you've joined us. Cheers to squeezing the most out of your experience on our juicy website! 🌟🥤"}>
            </SectionHeaders>
        </div>
        <div className="relative max-w-full overflow-x-hidden mb-20">
            <Image 
            src={ProfilePageImage} width={1600} alt={''}>
            </Image>
            <div className='absolute top-1/4 left-1/4 transform-translate-1/2 -translate-x-1/2 -translate-y-1/2 text-left text-white'>
                <SectionHeaders 
                subheader={'Sip, smile, repeat.'}
                mainheader={'Discover Your Blissful Sip'} 
                paragraph={undefined}>
                </SectionHeaders>
                <ButtonDemo 
                button_name={'ORDER NOW'}
                button_link={'/menu'}>
                </ButtonDemo>
            </div>
        </div>
        </>
    }
};

export default page
