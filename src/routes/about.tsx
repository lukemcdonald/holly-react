import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

function AboutPage() {
  return (
    <Layout>
      <Article
        title="About"
        imageAlt="Lorem Picsum"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        {/* prettier-ignore */}
        <p>
            Holly is a free HTML/CSS landing page designed and developed by <a href="https://twitter.com/pacovitiello">@pacovitiello</a> and <a href="https://twitter.com/DavidePacilio">@DavidePacilio</a>!
          </p>
        <p>
          Holly is suitable for all kind of startups, it's easily customizable, and it's
          downloadable for personal and commercial use.
        </p>
        <p>This template is distributed under the MIT License.</p>
      </Article>
    </Layout>
  )
}

export default AboutPage
