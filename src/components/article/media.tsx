import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'

function Media({
  as: Tag = 'figure',
  children,
  className,
}: PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements
  className?: string
}>) {
  return (
    <Tag
      className={cn(
        'relative m-auto max-w-[40rem] py-10 lg:-right-10 lg:w-full lg:py-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export default Media
