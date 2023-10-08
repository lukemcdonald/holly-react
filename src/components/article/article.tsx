import { ArticleContent, ArticleImage, ArticleMedia, ArticleTitle } from '@/components/article'
import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'
import invariant from 'tiny-invariant'

function Article({
  className,
  children,
  imageAlt,
  imageSrc,
  title,
}: PropsWithChildren<{
  className?: string
  imageAlt?: string
  imageSrc?: string
  title: string
}>) {
  if (imageSrc) {
    invariant(imageAlt, 'Image alt text is required.')
  }

  return (
    <article className={cn('article text-center lg:w-full lg:py-20 lg:text-left', className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative lg:flex">
          <ArticleContent>
            <header>
              <ArticleTitle>{title}</ArticleTitle>
            </header>

            {children}
          </ArticleContent>

          {imageSrc && (
            <ArticleMedia>
              <ArticleImage alt={imageAlt!} src={imageSrc} />
            </ArticleMedia>
          )}
        </div>
      </div>
    </article>
  )
}

export default Article
