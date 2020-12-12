import React from 'react';
import Layout from '../layouts/index';

export default function AboutPage() {
	return (
		<Layout>
			<article className="entry">
				<div className="container">
					<div className="entry-inner">
						<div className="entry-content">
							<div className="container-sm">
								<header className="entry-header">
									<h1 className="entry-title">About</h1>
								</header>

								<div className="entry-body">
									<p>
										Holly is a free HTML/CSS landing page designed and developed
										by @pacovitiello and @DavidePacilio!
									</p>
									<p>
										Holly is suitable for all kind of startups, it's easily
										customizable, and it's downloadable for personal and
										commercial use.
									</p>
									<hr />
									<p>
										Live demo:{' '}
										<a href="https://demo.cruip.com/holly/">
											https://demo.cruip.com/holly/
										</a>
									</p>
									<hr />
									<p>This template is distributed under the MIT License.</p>
								</div>
							</div>
						</div>
						<div className="entry-media">
							<img src="https://placehold.it/420x640" alt="" />
						</div>
					</div>
				</div>
			</article>
		</Layout>
	);
}
