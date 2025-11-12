import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CorsightPage from './pages/CorsightPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/corsight" element={<CorsightPage />} />
      </Routes>
    </BrowserRouter>
  )
}
