import { useEffect, MouseEvent, useState } from 'react'
import Section from '../components/Section'
import ReactiveMesh from '../components/ReactiveMesh'
import Metric from '../components/Metric'
import TechCard from '../components/TechCard'
import GlowOrb from '../components/GlowOrb'
import MobileMenu from '../components/MobileMenu'
import { Bars3Icon } from '@heroicons/react/24/outline'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640) // Tailwind's 'sm' breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    const mains = document.querySelectorAll('main')
    console.assert(mains.length === 1, `[TEST] Expected 1 <main>, found ${mains.length}`)

    const cards = document.querySelectorAll('[data-testid^="tech-card-"]')
    console.assert(cards.length === 4, `[TEST] Expected 4 tech cards, found ${cards.length}`)

    const text = document.body.innerText || ''
    ;['Urologiq', 'Corsight', 'OneView', 'Llama'].forEach((name) => {
      console.assert(text.includes(name), `[TEST] Missing product name in DOM: ${name}`)
    })

    const mapHash = (hash: string) => {
      if (!hash) return hash
      const normalized = hash.toLowerCase()
      if (normalized === '#tech') return '#products'
      if (normalized === '#/tech') return '#products'
      return hash
    }

    const handleHashNavigation = () => {
      const mapped = mapHash(window.location.hash)
      if (mapped && mapped.startsWith('#')) {
        const target = document.querySelector(mapped)
        if (target) {
          window.requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          })
        }
      }
    }

    handleHashNavigation()
    window.addEventListener('hashchange', handleHashNavigation)

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation)
    }
  }, [])

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, selector: string) => {
    if (!selector.startsWith('#')) return
    event.preventDefault()
    const normalizedSelector = selector.toLowerCase()
    const mappedSelector = normalizedSelector === '#tech' || normalizedSelector === '#/tech' ? '#products' : selector
    const target = document.querySelector(mappedSelector)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (selector !== mappedSelector) {
        window.history.replaceState(null, '', mappedSelector)
      }
    }
  }

  const navItems = [
    { href: '#intro', label: 'Mission' },
    { href: '#products', label: 'Products' },
    { href: '#about-us', label: 'About Us' }
  ]

  return (
    <main className="min-h-screen bg-[#070b16] text-slate-200 antialiased selection:bg-cyan-300/30 selection:text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#070b16]/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 h-20 md:h-24">
          <a href="#hero" className="flex items-center gap-3 text-white font-semibold tracking-tight">
            <img src="/3dlogo.png" alt="Biocliq AI" className="h-12 w-auto md:h-16" />
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={(event) => handleNavClick(event, n.href)} className="text-slate-300 hover:text-white transition">
                {n.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-slate-400 sm:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <a href="mailto:info@biocliq.com" className="hidden sm:inline-flex rounded-full px-4 py-1.5 bg-cyan-500 text-slate-900 text-sm font-medium hover:brightness-110 transition">
            Get in touch
          </a>
        </div>
      </header>

      <div className="relative">
        <Section id="hero" className="pt-20 md:pt-28">
          <ReactiveMesh />
        </Section>
      </div>

      <div className="relative">
        <GlowOrb />
        <Section id="intro" kicker="Our mission">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-300 leading-relaxed">
                Biocliq’s mission is to make advanced medical AI accessible to every healthcare system — improving diagnosis, personalizing treatment, and transforming the future of global health.
              </p>
              <div className="mt-6" />
            </div>
            <div className="rounded-2xl border border-white/10 p-3 bg-white/5">
              <div className="aspect-video rounded-xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/backupposter.jpeg"
                >
                  <source src="/aivideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div className="relative" id="products">
        <Section title="Our AI in Action" kicker="Products">
          <div className="grid gap-6 sm:grid-cols-2">
            <TechCard
              title="Urologiq"
              tag="Urology"
              blurb="Delivers smart CT KUB reports that Urologists love!"
              href="/urologiq"
              footer="100,000+ patients diagnosed with 99% accuracy"
              logo="/kub.png"
            />
            <TechCard
              title="Corsight"
              tag="Cardiology"
              blurb="Complete heart assessment - CAC, Aneurysm, Cardiac Fat on Non-Gated CT. Why settle for less?"
              href="/corsight"
              footer="98% sensitivity at 50% less radiation"
              logo="/corsight.png"
            />
            <TechCard
              title="OneView"
              tag="Oncology"
              blurb="3D reconstruction for surgical planning — helps oncologists and surgeons operate with greater precision and confidence."
              href="mailto:info@biocliq.com?subject=Learn%20more%20about%20OneView"
              footer="Surgeons report 30% better outcomes"
              logo="/ov.png"
            />
            <TechCard
              title="Llama"
              tag="Vascular"
              blurb="Automated structured reporting of CTA Peripheral imaging."
              href="/llama"
              footer="Take the grunt work away and deliver the reports that vascular surgeons really want!"
              logo="/llama.png"
            />
          </div>
        </Section>
      </div>

      <div className="relative" id="research">
        <Section title="Certifications" kicker="Validation">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
              <span className="text-3xl" aria-hidden>
                ✅
              </span>
              <h3 className="text-white text-xl font-semibold">ISO 13485 Certified</h3>
              <p className="text-sm md:text-base text-slate-300">
                Our quality management system for medical devices is ISO 13485 compliant, ensuring rigor from data acquisition to clinical delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="relative mx-auto grid place-items-center w-36 h-36 rounded-full border-4 border-cyan-300/70 bg-gradient-to-br from-cyan-900/40 to-fuchsia-900/30 text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                <div className="absolute inset-3 rounded-full border border-cyan-200/40" />
                <div className="relative flex flex-col items-center gap-1 uppercase tracking-[0.3em] text-[0.55rem] font-semibold">
                  <span>CDSCO</span>
                  <span className="text-[0.7rem] tracking-[0.25em]">Certified</span>
                </div>
              </div>
              <p className="mt-4 text-sm md:text-base text-slate-300">
                CDSCO seal of approval for safe, compliant deployment across Indian healthcare systems.
              </p>
            </div>
          </div>
        </Section>
      </div>

      <div className="relative" id="about-us">
        <Section title="Proven Accuracy, Real Results" kicker="Impact">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Metric k="1M+" v="Images processed" />
            <Metric k="99.2%" v="Expert agreement" />
            <Metric k="20+" v="Hospitals trust us" />
            <Metric k="30%" v="Faster TAT" />
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm md:text-base text-slate-300">
              “Biocliq’s models streamlined our workflow and improved consistency.” — <span className="text-white">Chief of Radiology, Partner Hospital</span>
            </p>
          </div>
        </Section>
      </div>

      <div className="relative" id="claims">
        <Section title="Clinician-backed proof points" kicker="Why teams trust Biocliq AI">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🧠',
                text: 'Sharper clinical confidence: Biocliq AI interprets complex imaging with near-expert consistency, lifting diagnostic accuracy and outcomes.'
              },
              {
                icon: '⚡️',
                text: 'Faster answers: Automated pipelines slash review times so clinicians can act while it still matters.'
              },
              {
                icon: '📋',
                text: 'Tailored insights: Every study returns structured, patient-specific narratives aligned to the next best clinical move.'
              },
              {
                icon: '🧩',
                text: 'Built to grow: Modular architecture fits existing systems and scales effortlessly with expanding service lines.'
              },
              {
                icon: '🔒',
                text: 'Locked-down security: Enterprise-grade safeguards and regulatory alignment keep sensitive data protected end to end.'
              },
              {
                icon: '🤝',
                text: 'Team-ready workflows: Shared workspaces keep radiologists, surgeons, and administrators in sync around each case.'
              }
            ].map(({ icon, text }) => (
              <div key={text} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm md:text-base text-slate-200 space-y-3">
                <span className="text-3xl block" aria-hidden>
                  {icon}
                </span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <footer className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© 2025 Biocliq AI. Building the intelligent healthcare future.</p>
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-5 text-sm">
            {[{ href: '#intro', label: 'Mission' }, { href: '#about-us', label: 'About Us' }].map((n) => (
              <a key={n.href} href={n.href} className="text-slate-400 hover:text-white transition">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        handleNavClick={handleNavClick}
      />
    </main>
  )
}
