import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ScrollToTop } from './components/scroll-to-top'
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import Faqs from './routes/faqs'
import Support from './routes/support'

export default function App() {
  /**
   * Vite exposes env variables on the special import.meta.env object.
   * Basename needs to be set for GitHub Pages to function properly.
   *
   * @link https://vitejs.dev/guide/env-and-mode.html
   */
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="support" element={<Support />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
