import { MouseEvent } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

interface HeaderProps {
    navItems: { href: string; label: string }[]
    onContactClick: () => void
    onMobileMenuOpen: () => void
    handleNavClick?: (event: MouseEvent<HTMLAnchorElement>, selector: string) => void
}

export default function Header({ navItems, onContactClick, onMobileMenuOpen, handleNavClick }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#070b16]/60 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 h-20 md:h-24">
                <Link
                    to="/"
                    className="flex items-center gap-3 text-white font-semibold tracking-tight"
                >
                    <img
                        src="/logo.png"
                        alt="Biocliq AI"
                        className="h-12 w-auto md:h-16"
                    />
                </Link>
                <nav className="hidden sm:flex items-center gap-6 text-sm">
                    {navItems.map((n) => (
                        n.href.startsWith('/') && !n.href.includes('#') ? (
                            <Link
                                key={n.href}
                                to={n.href}
                                className="text-slate-300 hover:text-white transition"
                            >
                                {n.label}
                            </Link>
                        ) : (
                            <a
                                key={n.href}
                                href={n.href}
                                onClick={(event) => handleNavClick && handleNavClick(event, n.href)}
                                className="text-slate-300 hover:text-white transition"
                            >
                                {n.label}
                            </a>
                        )
                    ))}
                </nav>
                <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-slate-400 sm:hidden"
                    onClick={onMobileMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                    onClick={onContactClick}
                    className="hidden sm:inline-flex rounded-full px-4 py-1.5 bg-cyan-500 text-slate-900 text-sm font-medium hover:brightness-110 transition"
                >
                    Get in touch
                </button>
            </div>
        </header>
    )
}
