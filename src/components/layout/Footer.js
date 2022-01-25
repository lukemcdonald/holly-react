import React from 'react'

import SocialLinks from './SocialLinks'
import NavLinks from './NavLinks'

export default function Footer() {
	return (
		<footer className="text-sm leading-5 tracking-normal text-gray-400">
			<div className="mx-auto w-full max-w-6xl px-6">
				<div className="relative flex flex-wrap py-10 lg:justify-between">
					<NavLinks className="mb-6 inline-flex w-full flex-none justify-center lg:order-1 lg:mb-0 lg:flex lg:w-1/2 lg:justify-end" />
					<SocialLinks className="mb-6 inline-flex w-full flex-none justify-center lg:flex lg:justify-end" />
					<div className="mb-6 inline-flex w-full flex-none justify-center lg:w-1/2 lg:justify-start">
						&copy; 2018 Holly, all rights reserved
					</div>
				</div>
			</div>
		</footer>
	)
}
