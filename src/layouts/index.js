import React from 'react'

import Header from '../components/layout/Header'
import Main from '../components/layout/Main'
import Footer from '../components/layout/Footer'

export default function Layout({ children }) {
	return (
		<div className="relative overflow-hidden bg-gray-100">
			<div className="absolute top-0 bottom-0 left-1/2 ml-28 w-1/2 bg-gradient-to-b from-primary-500 to-primary-300" />
			<div className="mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl">
				<Header />
				<Main>{children}</Main>
				<Footer />
			</div>
		</div>
	)
}
