import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import Faqs from './routes/faqs'
import Support from './routes/support'

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="faqs" element={<Faqs />} />
			<Route path="support" element={<Support />} />
		</Routes>
	)
}
