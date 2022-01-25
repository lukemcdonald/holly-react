import React from 'react'
import Layout from '../layouts/index'
import {
	Article,
	ArticleContent,
	ArticleMedia,
} from '../components/layout/Article'

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
