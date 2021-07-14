import React from 'react'

import Header from '../components/layout/Header'
import Main from '../components/layout/Main'
import Footer from '../components/layout/Footer'

export default function Layout({ children }) {
	return (
		<div className="relative overflow-hidden bg-gray-100">
			<div className="absolute top-0 bottom-0 w-1/2 ml-28 left-1/2 bg-gradient-to-b from-primary-500 to-primary-300" />
			<div className="flex flex-col min-h-screen mx-auto my-0 overflow-hidden bg-white shadow-2xl max-w-screen-2xl">
				<Header />
				<Main>{children}</Main>
				<Footer />
			</div>
		</div>
	)
}
