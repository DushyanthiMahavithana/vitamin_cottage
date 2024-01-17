import React from 'react'
import SectionHeaders from '@/components/SectionHeaders'
import RegisterForm from '@/components/forms/RegisterForm'

export default function Registerpage() {
  return (
    <>

    <div className='text-center mt-20'>
      <SectionHeaders mainheader={'Register Now'}></SectionHeaders>
    </div>
    <RegisterForm/>
    
    </>
  )
}
