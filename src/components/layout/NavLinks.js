import React from 'react'
import { NavLink } from 'react-router-dom'

const NAV_LINKS = [
	{ text: 'Contact', href: '/contact' },
	{ text: 'About Us', href: '/about' },
	{ text: "FAQ's", href: '/faqs' },
	{ text: 'Support', href: '/support' },
]
export default function NavLinks({ className }) {
	return (
		<ul className={className}>
			{NAV_LINKS.map(({ text, href }) => (
				<li key={text} className="ml-4">
					<NavLink to={href} activeClassName="is-active" className="text-white">
						{text}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
