import { useState, ReactNode, MouseEvent } from 'react'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import { useContact } from './context/ContactContext'

interface LayoutProps {
    children: ReactNode
    navItems: { href: string; label: string }[]
    handleNavClick?: (event: MouseEvent<HTMLAnchorElement>, selector: string) => void
    showContactButton?: boolean
}

export default function Layout({ children, navItems, handleNavClick, showContactButton = true }: LayoutProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { openContactModal } = useContact()

    return (
        <main className="min-h-screen bg-[#070b16] text-slate-200 antialiased selection:bg-cyan-300/30 selection:text-white">
            <Header
                navItems={navItems}
                onContactClick={openContactModal}
                onMobileMenuOpen={() => setMobileMenuOpen(true)}
                handleNavClick={handleNavClick}
                showContactButton={showContactButton}
            />

            {children}

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                navItems={navItems}
                handleNavClick={handleNavClick}
                onContactClick={openContactModal}
                showContactButton={showContactButton}
            />
        </main>
    )
}
