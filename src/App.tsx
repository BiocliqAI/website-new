import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CorsightPage from './pages/CorsightPage'
import LlamaPage from './pages/LlamaPage'
import UrologiqPage from './pages/UrologiqPage'
import CareersPage from './pages/CareersPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminDashboardPage from './pages/AdminDashboardPage'
import ProtectedRoute from './components/ProtectedRoute'
import { ContactProvider } from './context/ContactContext'

export default function App() {
  return (
    <BrowserRouter>
      <ContactProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/corsight" element={<CorsightPage />} />
          <Route path="/llama" element={<LlamaPage />} />
          <Route path="/urologiq" element={<UrologiqPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ContactProvider>
    </BrowserRouter>
  )
}
