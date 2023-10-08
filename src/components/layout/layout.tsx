import type { PropsWithChildren } from 'react'

import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Header } from '@/components/header'

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl">
      <Gradient className="absolute bottom-0 left-1/2 top-0 ml-28 hidden w-1/2 lg:block" />
      <Header />
      <main className="flex-shrink-0 flex-grow items-center lg:flex">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
