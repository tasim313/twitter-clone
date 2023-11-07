import { Inter } from 'next/font/google'
import './globals.css'
import Head from './head'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body className="relative min-h-screen">
        {children}
        <h4 className='text-red-600'>Tasim</h4>
        <h1 className='text-center'>Maksuda High School</h1>
        </body>
    </html>
  )
}
