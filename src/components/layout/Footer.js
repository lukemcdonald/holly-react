import React from 'react'

import SocialLinks from './SocialLinks'
import NavLinks from './NavLinks'

export default function Footer() {
	return (
		<footer className="text-sm leading-5 tracking-normal text-gray-400">
			<div className="w-full max-w-6xl px-6 mx-auto">
				<div className="relative flex flex-wrap py-10 lg:justify-between">
					<NavLinks className="inline-flex justify-center flex-none w-full mb-6 lg:flex lg:w-1/2 lg:justify-end lg:order-1 lg:mb-0" />
					<SocialLinks className="inline-flex justify-center flex-none w-full mb-6 lg:flex lg:justify-end" />
					<div className="inline-flex justify-center flex-none w-full mb-6 lg:w-1/2 lg:justify-start">
						&copy; 2018 Holly, all rights reserved
					</div>
				</div>
			</div>
		</footer>
	)
}
