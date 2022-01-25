import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import Faqs from './routes/faqs'
import Support from './routes/support'

import './assets/style.css'

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="faqs" element={<Faqs />} />
			<Route path="support" element={<Support />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('app')
)
