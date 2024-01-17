import React from 'react'
import SectionHeaders from '@/components/SectionHeaders'
import LoginForm from '@/components/forms/LoginForm'

export default function LoginPage() {
  return (
    <>
    <div className='text-center mt-20'>
      <SectionHeaders mainheader={'Login'}></SectionHeaders>
    </div>
    <LoginForm/>
    </>
  )
}
