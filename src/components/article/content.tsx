import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'

function Content({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <div className="flex-grow">
      <div className={cn('prose mx-auto py-10 lg:prose-xl lg:pr-20 lg:pt-16', className)}>
        {children}
      </div>
    </div>
  )
}

export default Content
