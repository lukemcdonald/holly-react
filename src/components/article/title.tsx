import type { PropsWithChildren } from 'react'

function Title({ children }: PropsWithChildren) {
  return <h1 className="mb-3 mt-12 text-4xl font-bold lg:text-5xl lg:leading-tight">{children}</h1>
}

export default Title
