import React from 'react'
import Layout from '../layouts/index'
import {
	Article,
	ArticleContent,
	ArticleMedia,
} from '../components/layout/Article'

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
