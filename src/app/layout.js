import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import HeaderInfo from '@/components/HeaderInfo'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const roboto = Roboto({ subsets: ['latin'], weight: ['400','500','700'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='mx-auto max-w-4xl'>
          <HeaderInfo/>
          <Header/>
          <Toaster />
           {children}
          <Footer/>
        </main>
        </body>
    </html>
  )
}
