import React from 'react'

import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'

export default function FaqsPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="FAQ's">
          <p>Add your FAQ content here.</p>
        </ArticleContent>

        <ArticleMedia>
          <img src="https://picsum.photos/420/640" alt="Lorem Picsum" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
