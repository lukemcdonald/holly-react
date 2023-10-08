import type { PropsWithChildren } from 'react'

function Media({ children }: PropsWithChildren) {
  return (
    <figure className="relative m-auto max-w-[40rem] py-10 lg:-right-10 lg:w-full lg:py-0">
      {children}
    </figure>
  )
}

export default Media
