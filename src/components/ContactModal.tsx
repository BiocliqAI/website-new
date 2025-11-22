import { useState, FormEvent } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import emailjs from '@emailjs/browser'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  if (!isOpen) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables missing')
      setStatus('error')
      setLoading(false)
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          mobile,
        },
        publicKey
      )
      setStatus('success')
      setName('')
      setMobile('')
      setTimeout(() => {
        onClose()
        setStatus('idle')
      }, 2000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#0f1623] border border-white/10 rounded-2xl p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-semibold text-white mb-2">Get in touch</h2>
        <p className="text-slate-400 mb-6">
          Leave your details and we'll get back to you.
        </p>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-400 mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white">Message sent!</h3>
            <p className="text-slate-400 mt-2">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-slate-300 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                placeholder="Your mobile number"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
