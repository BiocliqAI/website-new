import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CorsightPage from './pages/CorsightPage'
import LlamaPage from './pages/LlamaPage'
import UrologiqPage from './pages/UrologiqPage'
import ContactForm from './components/ContactForm'

export default function App() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage openContactForm={openContactForm} />} />
        <Route path="/corsight" element={<CorsightPage openContactForm={openContactForm} />} />
        <Route path="/llama" element={<LlamaPage openContactForm={openContactForm} />} />
        <Route path="/urologiq" element={<UrologiqPage openContactForm={openContactForm} />} />
      </Routes>
      <ContactForm isOpen={contactFormOpen} onClose={closeContactForm} />
    </BrowserRouter>
  )
}
