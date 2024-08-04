'use client'

import { Toaster } from 'react-hot-toast'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
      <Toaster position="top-right" />
    </>
  )
}
