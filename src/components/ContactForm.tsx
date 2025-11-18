export default function ContactForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>This is a placeholder for the contact form.</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded">
          Close
        </button>
      </div>
    </div>
  )
}
