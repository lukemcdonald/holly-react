import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="About">
          {/* prettier-ignore */}
          <p>
            Holly is a free HTML/CSS landing page designed and developed by <a href="https://twitter.com/pacovitiello">@pacovitiello</a> and <a href="https://twitter.com/DavidePacilio">@DavidePacilio</a>!
          </p>
          <p>
            Holly is suitable for all kind of startups, it's easily
            customizable, and it's downloadable for personal and commercial use.
          </p>
          <p>This template is distributed under the MIT License.</p>
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
