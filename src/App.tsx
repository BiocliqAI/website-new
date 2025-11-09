import { useEffect, useState } from 'react'
import Section from './components/Section'
import ReactiveMesh from './components/ReactiveMesh'
import Metric from './components/Metric'
import TimelineItem from './components/TimelineItem'
import TechCard from './components/TechCard'
import GlowOrb from './components/GlowOrb'

export default function App() {
  const [showReasoning, setShowReasoning] = useState(false)

  useEffect(() => {
    const mains = document.querySelectorAll('main')
    console.assert(mains.length === 1, `[TEST] Expected 1 <main>, found ${mains.length}`)

    const cards = document.querySelectorAll('[data-testid^="tech-card-"]')
    console.assert(cards.length === 4, `[TEST] Expected 4 tech cards, found ${cards.length}`)

    const longevity = document.getElementById('longevity')
    console.assert(!!longevity, '[TEST] Longevity section (#longevity) should exist')
    const biomarkers = longevity ? longevity.querySelectorAll('[data-testid="biomarker-item"]') : []
    console.assert(biomarkers.length >= 6, `[TEST] Expected at least 6 biomarker items, found ${biomarkers.length}`)

    const text = document.body.innerText || ''
    ;['Corsight', 'OneView', 'Urologiq', 'Healthmetrix'].forEach((name) => {
      console.assert(text.includes(name), `[TEST] Missing product name in DOM: ${name}`)
    })
  }, [])

  const navItems = [
    { href: '#tech', label: 'Solutions' },
    { href: '#platform', label: 'Platform' },
    { href: '#impact', label: 'Impact' },
    { href: '#insights', label: 'Insights' },
    { href: '#longevity', label: 'Longevity' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <main className="min-h-screen bg-[#070b16] text-slate-200 antialiased selection:bg-cyan-300/30 selection:text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#070b16]/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 h-16">
          <a href="#" className="text-white font-semibold tracking-tight">Biocliq AI</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map(n => <a key={n.href} href={n.href} className="text-slate-300 hover:text-white transition">{n.label}</a>)}
          </nav>
          <a href="#contact" className="rounded-full px-4 py-1.5 bg-cyan-500 text-slate-900 text-sm font-medium hover:brightness-110 transition">Get in touch</a>
        </div>
      </header>

      <div className="relative py-14 md:py-20">
        <Section id="hero">
          <ReactiveMesh />
        </Section>
      </div>

      <div className="relative py-14">
        <GlowOrb />
        <Section id="intro" title="Why Biocliq Exists" kicker="Our mission">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-300 leading-relaxed">
                We build intelligent systems that understand medical images like experts do. From coronary scoring with <strong>Corsight</strong> to 3D surgical planning with <strong>OneView</strong>, renal stone analysis with <strong>Urologiq</strong>, and whole-body longevity screening with <strong>Healthmetrix</strong>, our AI augments clinicians with precision, speed, and trust.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#tech" className="rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/10">Discover Our Solutions</a>
                <a href="#platform" className="rounded-xl px-4 py-2 border border-white/10 hover:bg-white/10">How it works</a>
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

      <div className="relative py-14" id="tech">
        <Section title="Our AI in Action" kicker="Solutions">
          <div className="grid md:grid-cols-4 gap-6">
            <TechCard title="Corsight" tag="Cardiology" blurb="Detects and quantifies coronary calcium on non-gated CT with expert-level agreement." onClick={() => setShowReasoning(true)} />
            <TechCard title="OneView" tag="Oncology" blurb="3D reconstruction for surgical planning — helps oncologists and surgeons operate with greater precision and confidence." onClick={() => setShowReasoning(true)} />
            <TechCard title="Urologiq" tag="Urology" blurb="Identifies and measures renal stones on non-contrast CT for faster decisions." onClick={() => setShowReasoning(true)} />
            <TechCard title="Healthmetrix" tag="Longevity" blurb="Analyzes whole-body MRI/CT to detect over 50 biomarkers — identifying disease risk well before clinical manifestation." onClick={() => setShowReasoning(true)} />
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-semibold">See how our AI thinks</h3>
                <p className="text-slate-400 text-sm">Transparent, step-by-step medical reasoning</p>
              </div>
              <button onClick={() => setShowReasoning(v => !v)} className="rounded-full px-4 py-2 bg-cyan-500 text-slate-900 text-sm font-medium hover:brightness-110">
                {showReasoning ? 'Hide' : 'Show'}
              </button>
            </div>
            {showReasoning ? (
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                  <TimelineItem title="1. Localize anatomy" body="Segment relevant anatomy and landmarks across CT/MRI slices." />
                </div>
                <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                  <TimelineItem title="2. Quantify findings" body="Detect targets and compute calibrated scores or volumes." />
                </div>
                <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                  <TimelineItem title="3. Validate & report" body="Cross-check with priors, estimate uncertainty, and generate a structured report." />
                </div>
              </div>
            ) : null}
          </div>
        </Section>
      </div>

      <div className="relative py-14" id="longevity">
        <Section title="Longevity & Preventive Health" kicker="Healthmetrix">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-white font-semibold text-lg">Whole-Body Biomarker Panel</h3>
              <p className="text-slate-300 text-sm mt-2">
                Healthmetrix extracts <strong>50+ imaging biomarkers</strong> from WB-MRI/CT to quantify aging and risk long before disease manifests.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {['Visceral fat volume','Liver fat (PDFF proxy)','Pancreatic fat','Epicardial adipose tissue','Aortic calcium burden','Coronary calcium score','Bone mineral proxy','Muscle cross-sectional area','Sarcopenia index','Renal cyst burden','Lung emphysema percent','Thyroid volume'].map((b, i) => (
                  <li key={i} data-testid="biomarker-item" className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">{b}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-white font-semibold text-lg">Aging & Risk Dashboards</h3>
              <p className="text-slate-300 text-sm mt-2">
                Cohort-calibrated reference ranges, biological age deltas, organ-specific risk indexes, and longitudinal trend tracking.
              </p>
              <div className="mt-4 aspect-video rounded-xl bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/15 grid place-items-center">
                <p className="text-slate-400 text-sm">(Placeholder) Risk gauges & organ-age charts</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">Organ age</span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">Risk indices</span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">Population norms</span>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">Longitudinal</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full px-4 py-2 bg-cyan-500 text-slate-900 text-sm font-medium hover:brightness-110">Talk about Healthmetrix</a>
            <a href="#" className="rounded-full px-4 py-2 border border-white/10 text-sm hover:bg-white/10">View sample report</a>
          </div>
        </Section>
      </div>

      <div className="relative py-14" id="impact">
        <Section title="Proven Accuracy, Real Results" kicker="Impact">
          <div className="grid md:grid-cols-4 gap-6">
            <Metric k="1M+" v="Images processed" />
            <Metric k="99.2%" v="Expert agreement" />
            <Metric k="20+" v="Hospitals trust us" />
            <Metric k="30%" v="Faster TAT" />
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm md:text-base text-slate-300">“Biocliq’s models streamlined our workflow and improved consistency.” — <span className="text-white">Chief of Radiology, Partner Hospital</span></p>
          </div>
        </Section>
      </div>

      <footer className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© 2025 Biocliq AI. Building the intelligent healthcare future.</p>
          <nav className="flex items-center gap-5 text-sm">
            {[
              { href: '#tech', label: 'Products' },
              { href: '#longevity', label: 'Longevity' },
              { href: '#impact', label: 'Impact' },
              { href: '#contact', label: 'Contact' },
            ].map(n => <a key={n.href} href={n.href} className="text-slate-400 hover:text-white transition">{n.label}</a>)}
          </nav>
        </div>
      </footer>
    </main>
  )
}
