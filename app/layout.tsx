import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { Footer } from '@/components/molecules/Footer'
import { Navbar } from '@/components/molecules/Navbar'
import GoogleAnalytics from '@/components/util/GoogleAnalytics'

import { Providers } from './providers'

import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'DIX31',
  description: 'Developpeur Independant Xavier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <div className="min-h-screen min-w-screen">
            <div className=" flex flex-col h-screen">
              <Navbar />
              <main className="flex-1 pt-16">
                <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                  <div className="flex flex-col min-w-0 break-words w-full mb-6rounded-lg bg-gray-50 dark:bg-slate-800 border-0">
                    <GoogleAnalytics />
                    {children}
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
