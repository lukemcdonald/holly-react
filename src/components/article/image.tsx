import ArticleMedia from '@/components/article/media'

function Image({
  alt,
  height,
  src,
  width,
}: {
  alt: string
  height?: number
  src: string
  width?: number
}) {
  return (
    <ArticleMedia>
      <img
        alt={alt}
        className="mx-auto lg:aspect-[5/7] lg:w-full"
        height={width || 640}
        src={src}
        width={height || 420}
      />
    </ArticleMedia>
  )
}

export default Image
