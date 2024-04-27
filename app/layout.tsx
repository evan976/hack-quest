import '@/app/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'

import type { Metadata } from 'next'

import { Footer } from '@/components/layouts/footer'
import { Navbar } from '@/components/layouts/navbar'
import { nextBookFont, nextPosterFont, neueMachinaFont } from '@/lib/fonts'
import { cn } from '@/lib/utils'


export const metadata: Metadata = {
  title: 'Hack Quest',
  description: 'Hack Quest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-background text-text-100 antialiased',
          nextBookFont.variable,
          nextPosterFont.variable,
          neueMachinaFont.variable,
        )}
      >
        <main className="max-w-[1360px] mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
