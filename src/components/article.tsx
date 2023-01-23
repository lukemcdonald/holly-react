import type { PropsWithChildren } from 'react'

export function Article({ children }: PropsWithChildren) {
  return (
    <article className="article text-center lg:w-full lg:py-20 lg:text-left">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative lg:flex">{children}</div>
      </div>
    </article>
  )
}

export function ArticleContent({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div className="flex-grow">
      <div className=" prose mx-auto py-10 lg:pr-20 lg:pt-16 lg:prose-xl">
        {title && (
          <header>
            <h1 className="mt-12 mb-3 text-4xl font-bold lg:text-5xl lg:leading-tight">
              {title}
            </h1>
          </header>
        )}

        {children}
      </div>
    </div>
  )
}

export function ArticleMedia({ children }: PropsWithChildren) {
  return (
    <figure className="relative max-w-[40rem] py-10 lg:-right-10 lg:w-full lg:py-0">
      {children}
    </figure>
  )
}
