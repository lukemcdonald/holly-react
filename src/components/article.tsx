import React from 'react'

export function Article({ children }) {
  return (
    <article className="article text-center lg:w-full lg:py-20 lg:text-left">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative lg:flex">{children}</div>
      </div>
    </article>
  )
}

export function ArticleContent({ title, children }) {
  return (
    <div className="article--content pb-16 pr-20 pt-11 lg:pt-16">
      <div className="mx-auto w-full max-w-3xl">
        {title && (
          <header>
            <h1 className="mt-12 mb-3 text-4xl font-bold lg:text-5xl lg:leading-tight">
              {title}
            </h1>
          </header>
        )}

        <div className="prose mb-8 md:px-16 lg:prose-xl lg:px-0">
          {children}
        </div>
      </div>
    </div>
  )
}

export function ArticleMedia({ children }) {
  return (
    <div className="article--media relative -right-10 py-10 lg:right-0 lg:w-full lg:py-0">
      <span className="inline-flex">{children}</span>
    </div>
  )
}
