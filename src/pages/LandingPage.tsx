import { useEffect } from 'react'
import Section from '../components/Section'
import ReactiveMesh from '../components/ReactiveMesh'
import Metric from '../components/Metric'
import TechCard from '../components/TechCard'
import GlowOrb from '../components/GlowOrb'

export default function LandingPage() {
  useEffect(() => {
    const mains = document.querySelectorAll('main')
    console.assert(mains.length === 1, `[TEST] Expected 1 <main>, found ${mains.length}`)

    const cards = document.querySelectorAll('[data-testid^="tech-card-"]')
    console.assert(cards.length === 4, `[TEST] Expected 4 tech cards, found ${cards.length}`)

    const text = document.body.innerText || ''
    ;['Urologiq', 'Corsight', 'OneView', 'Llama'].forEach((name) => {
      console.assert(text.includes(name), `[TEST] Missing product name in DOM: ${name}`)
    })
  }, [])

  const navItems = [
    { href: '#intro', label: 'Mission' },
    { href: '#products', label: 'Products' },
    { href: '#about-us', label: 'About Us' }
  ]

  return (
    <main className="min-h-screen bg-[#070b16] text-slate-200 antialiased selection:bg-cyan-300/30 selection:text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#070b16]/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 h-16">
          <a href="#" className="text-white font-semibold tracking-tight">Biocliq AI</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-slate-300 hover:text-white transition">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="mailto:info@biocliq.com" className="rounded-full px-4 py-1.5 bg-cyan-500 text-slate-900 text-sm font-medium hover:brightness-110 transition">
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
              <div className="mt-6 flex gap-3">
                <a href="#products" className="rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/10">
                  Discover Our Solutions
                </a>
                <a href="#about-us" className="rounded-xl px-4 py-2 border border-white/10 hover:bg-white/10">
                  How it works
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-3 bg-white/5">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/15 grid place-items-center">
                <p className="text-slate-300 text-sm">(Video placeholder) AI analyzing CT/MRI</p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div className="relative" id="products">
        <Section title="Our AI in Action" kicker="Products">
          <div className="grid md:grid-cols-2 gap-6">
            <TechCard
              title="Urologiq"
              tag="Urology"
              blurb="Delivers smart CT KUB reports that Urologists love!"
              href="mailto:info@biocliq.com?subject=Learn%20more%20about%20Urologiq"
              footer="100,000+ patients diagnosed with 99% accuracy"
            />
            <TechCard
              title="Corsight"
              tag="Cardiology"
              blurb="Complete heart assessment - CAC, Aneurysm, Cardiac Fat on Non-Gated CT. Why settle for less?"
              href="/corsight"
              footer="98% sensitivity at 50% less radiation"
            />
            <TechCard
              title="OneView"
              tag="Oncology"
              blurb="3D reconstruction for surgical planning — helps oncologists and surgeons operate with greater precision and confidence."
              href="mailto:info@biocliq.com?subject=Learn%20more%20about%20OneView"
              footer="Surgeons report 30% better outcomes"
            />
            <TechCard
              title="Llama"
              tag="Vascular"
              blurb="Automated structured reporting of CTA Peripheral imaging."
              href="mailto:info@biocliq.com?subject=Learn%20more%20about%20Llama"
              footer="Take the grunt work away and deliver the reports that vascular surgeons really want!"
            />
          </div>
        </Section>
      </div>

      <div className="relative" id="about-us">
        <Section title="Proven Accuracy, Real Results" kicker="Impact">
          <div className="grid md:grid-cols-4 gap-6">
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

      <footer className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© 2025 Biocliq AI. Building the intelligent healthcare future.</p>
          <nav className="flex items-center gap-5 text-sm">
            {[{ href: '#intro', label: 'Mission' }, { href: '#products', label: 'Products' }, { href: '#about-us', label: 'About Us' }].map((n) => (
              <a key={n.href} href={n.href} className="text-slate-400 hover:text-white transition">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  )
}
