import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'

function Title({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <h1 className={cn('mb-3 mt-12 text-4xl font-bold lg:text-5xl lg:leading-tight', className)}>
      {children}
    </h1>
  )
}

export default Title
