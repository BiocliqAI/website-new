import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CorsightPage from './pages/CorsightPage'
import LlamaPage from './pages/LlamaPage'
import UrologiqPage from './pages/UrologiqPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/corsight" element={<CorsightPage />} />
        <Route path="/llama" element={<LlamaPage />} />
        <Route path="/urologiq" element={<UrologiqPage />} />
      </Routes>
    </BrowserRouter>
  )
}
