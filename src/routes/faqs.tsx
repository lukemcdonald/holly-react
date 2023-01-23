import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="FAQ's">
          <p>Add your FAQ content here.</p>
          <details
            className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
            open
          >
            <summary className="-mx-4 cursor-pointer border-primary-200 py-3 px-4">
              What is Holly?
            </summary>
            <p>
              Holly is a free HTML/CSS landing page designed and developed by{' '}
              <a href="https://twitter.com/pacovitiello">@pacovitiello</a> and{' '}
              <a href="https://twitter.com/DavidePacilio">@DavidePacilio</a>!
            </p>
            <p>
              Holly is suitable for all kind of startups, it's easily
              customizable, and it's downloadable for personal and commercial
              use.
            </p>
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
              How can I use Holly?
            </summary>
            <p>
              Holly is licensed under the MIT License, which means you can use
              it for personal and commercial projects for free.
            </p>
            <p>
              You can also modify Holly to your needs, but you can't
              redistribute it or sell it as a template.
            </p>
          </details>
          <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
            <summary className="-mx-4 cursor-pointer py-3 px-4">
              Can I contribute to Holly?
            </summary>
            <p>
              Yes, you can! Holly is an open source project, and you can
              contribute to it on{' '}
              <a href="https://github.com/lukemcdonald/holly-react">GitHub</a>.
            </p>
          </details>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="Lorem Picsum"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            width="420"
            height="640"
            src="https://picsum.photos/420/640?grayscale"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
