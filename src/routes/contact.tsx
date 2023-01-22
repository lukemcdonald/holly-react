import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'
import React from 'react'

export default function ContactPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="Contact">
          <p>Add your contact information here.</p>
        </ArticleContent>

        <ArticleMedia>
          <img src="https://picsum.photos/420/640" alt="Lorem Picsum" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
