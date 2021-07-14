import React, { Component } from 'react'
import { setupScrollReveal } from '../../assets/js/main.js'

import NewsletterForm from '../forms/NewsletterForm'

class Hero extends Component {
	componentDidMount() {
		setupScrollReveal()
	}

	render() {
		const { title, content, illustration: Illustration } = this.props

		return (
			<section className="text-center lg:w-full lg:text-left lg:py-20">
				<div className="w-full max-w-6xl px-6 mx-auto hero">
					<div className="relative hero-inner lg:flex">
						<div
							className="pt-10 pb-16 hero-copy lg:pt-16 lg:pr-20"
							style={{ minWidth: '600px' }}
						>
							<div className="w-full max-w-3xl mx-auto">
								<h1 className="mt-0 mb-4 text-4xl font-bold hero-title is-revealing md:text-5xl ">
									{title}
								</h1>
								<p className="px-16 prose prose-xl hero-paragraph is-revealing md:px-0">
									{content}
								</p>
							</div>

							<NewsletterForm
								className="max-w-md m-0 mt-8 hero-form md:flex"
								submit="Get early access"
							/>
						</div>

						<div className="relative py-10 hero-illustration right-10 md:right-20 lg:right-0 lg:p-0">
							<Illustration />
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Hero
