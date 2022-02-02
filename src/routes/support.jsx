import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function SupportPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Support">
          <p>Add your support content here.</p>
        </ArticleContent>

        <ArticleMedia>
          <img src="https://picsum.photos/420/640" alt="Lorem Picsum" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
