import { ScrollToTop } from '@/components/scroll-to-top'
import AboutPage from '@/routes/about'
import ContactPage from '@/routes/contact'
import FaqsPage from '@/routes/faqs'
import HomePage from '@/routes/home'
import SupportPage from '@/routes/support'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faqs" element={<FaqsPage />} />
          <Route path="support" element={<SupportPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
