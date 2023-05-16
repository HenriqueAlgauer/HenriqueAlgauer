import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Henrique Algauer',
  description: 'Personal Web Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-zinc-700 font-mono scrollbar-none'>{children}</body>
    </html>
  )
}
