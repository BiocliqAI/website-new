import { MouseEvent } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: { href: string; label: string }[]
  handleNavClick: (event: MouseEvent<HTMLAnchorElement>, selector: string) => void
}

export default function MobileMenu({ isOpen, onClose, navItems, handleNavClick }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[#070b16] transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white">
          <XMarkIcon className="h-8 w-8" />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
        {navItems.map((n) => (
          <a
            key={n.href}
            href={n.href}
            onClick={(event) => {
              handleNavClick(event, n.href)
              onClose()
            }}
            className="text-slate-300 hover:text-white transition"
          >
            {n.label}
          </a>
        ))}
        <a
          href="mailto:info@biocliq.com"
          className="mt-8 rounded-full px-6 py-2 bg-cyan-500 text-slate-900 text-xl font-medium hover:brightness-110 transition"
          onClick={onClose}
        >
          Get in touch
        </a>
      </nav>
    </div>
  )
}
