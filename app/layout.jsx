import '@/styles/globals.css'

import Navbar from '@/components/Navbar'
import Navdots from '@/components/Navdots'
import Socials from '@/components/Socials'

export const metadata = {
    title : "Kyle Bolo",
    description : "Bringing Ideas to life"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
        <body>
            <main className="app relative">
                <div className="container_fixed items-center justify-center flex">
                  <Navbar />
                  <div className="relative items-center justify-center flex h-full w-full">
                    <Navdots />
                    <Socials />
                  </div>
                </div>
                <div className="flex flex-v justify-center items-center container_main">
                  {children}
                </div>
            </main>
        </body>
    </html>
  )
}

export default RootLayout