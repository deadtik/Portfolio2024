import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"

/**
 * Montserrat font configuration.
 *
 * @type {Object}
 * @property {string[]} subsets - The subsets of the font.
 * @property {string} variable - The CSS variable for the font.
 */

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return(
   <>

    <head>
      <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" /> </div>
    </head>
    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen `}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
   </>
  ) 
}
