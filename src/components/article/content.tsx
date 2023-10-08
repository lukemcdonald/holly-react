import type { PropsWithChildren } from 'react'

function Content({ children }: PropsWithChildren) {
  return (
    <div className="flex-grow">
      <div className=" prose mx-auto py-10 lg:prose-xl lg:pr-20 lg:pt-16">{children}</div>
    </div>
  )
}

export default Content
