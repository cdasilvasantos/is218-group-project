import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieBanner from './components/CookieBanner';




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luxcore',
  description: 'Luxury steakhouse at its core',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <GoogleAnalytics GA_MEASUREMENT_ID='G-ZC5THDW0CG'/>
      <body className={inter.className}>
        {children}
        <CookieBanner/>
        </body>
    </html>
  )
}
