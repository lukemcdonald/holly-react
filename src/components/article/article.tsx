import { ArticleContent, ArticleImage, ArticleTitle } from '@/components/article'
import type { PropsWithChildren } from 'react'
import invariant from 'tiny-invariant'

function Article({
  children,
  imageAlt,
  imageSrc,
  title,
}: PropsWithChildren<{
  imageAlt?: string
  imageSrc?: string
  title: string
}>) {
  if (imageSrc) {
    invariant(imageAlt, 'Image alt text is required.')
  }

  return (
    <article className="article text-center lg:w-full lg:py-20 lg:text-left">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative lg:flex">
          <ArticleContent>
            <header>
              <ArticleTitle>{title}</ArticleTitle>
            </header>

            {children}
          </ArticleContent>

          {imageSrc && <ArticleImage alt={imageAlt!} src={imageSrc} />}
        </div>
      </div>
    </article>
  )
}

export default Article
