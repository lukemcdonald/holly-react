import { cn } from '@/utils/cn'

function Image({
  alt,
  className,
  height,
  src,
  width,
}: {
  alt: string
  className?: string
  height?: number
  src: string
  width?: number
}) {
  return (
    <img
      alt={alt}
      className={cn('mx-auto lg:aspect-[5/7] lg:w-full', className)}
      height={width || 640}
      src={src}
      width={height || 420}
    />
  )
}

export default Image
