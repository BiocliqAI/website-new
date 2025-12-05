import { useEffect, MouseEvent, useState } from 'react'
import Layout from '../Layout'
import Section from '../components/Section'
import ReactiveMesh from '../components/ReactiveMesh'
import TechCard from '../components/TechCard'
import GlowOrb from '../components/GlowOrb'
import ImpactCard from '../components/ImpactCard'

export default function LandingPage() {
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
    { href: '#about-us', label: 'About Us' },
    { href: '/careers', label: 'Careers' }
  ]

  return (
    <Layout navItems={navItems} handleNavClick={handleNavClick}>

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
                Biocliq’s mission is to make advanced medical AI accessible to
                every healthcare system — improving diagnosis, personalizing
                treatment, and transforming the future of global health.
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
              href="https://onevieweb.biocliq.ai/"
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

      <div className="relative" id="workflow">
        <Section title="Advanced AI, Seamlessly Integrated" kicker="Workflow">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm md:text-base text-slate-300">
              <p>
                Biocliq AI isn't just powerful; it's designed to fit effortlessly into your existing radiology workflow.
              </p>
              <p>
                From the CT Scanner to the PACS Server, our automated upload and inference engine ensures that smart reports are generated and sent back in minutes, ready for the radiologist to validate.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden p-2">
              <img
                src="/workflow-integration.jpg"
                alt="Biocliq AI Workflow Integration"
                className="w-full h-auto rounded-xl"
              />
            </div>
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
              <h3 className="text-white text-xl font-semibold">
                ISO 13485 Certified
              </h3>
              <p className="text-sm md:text-base text-slate-300">
                Our quality management system for medical devices is ISO 13485
                compliant, ensuring rigor from data acquisition to clinical
                delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="relative mx-auto grid place-items-center w-36 h-36 rounded-full border-4 border-cyan-300/70 bg-gradient-to-br from-cyan-900/40 to-fuchsia-900/30 text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                <div className="absolute inset-3 rounded-full border border-cyan-200/40" />
                <div className="relative flex flex-col items-center gap-1 uppercase tracking-[0.3em] text-[0.55rem] font-semibold">
                  <span>CDSCO</span>
                  <span className="text-[0.7rem] tracking-[0.25em]">
                    Certified
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm md:text-base text-slate-300">
                CDSCO seal of approval for safe, compliant deployment across
                Indian healthcare systems.
              </p>
            </div>
          </div>
        </Section>
      </div>

      <div className="relative" id="about-us">
        <Section title="Proven Accuracy, Real Results" kicker="Impact">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ImpactCard
              icon="👍"
              title="Improved Consultant satisfaction"
              description="with smarter, precise reports that help better patient outcomes"
            />
            <ImpactCard
              icon="😊"
              title="Better patient satisfaction"
              description="with visual and explainable report"
            />
            <ImpactCard
              icon="💰"
              title="Reduced cost of operations"
              description="by 30%"
            />
            <ImpactCard
              icon="📈"
              title="Increased revenues"
              description="due to higher referrals"
            />
          </div>
        </Section>
      </div>

      <div className="relative" id="claims">
        <Section
          title="Clinician-backed proof points"
          kicker="Why teams trust Biocliq AI"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🧠",
                text: "Sharper clinical confidence: Biocliq AI interprets complex imaging with near-expert consistency, lifting diagnostic accuracy and outcomes.",
              },
              {
                icon: "⚡️",
                text: "Faster answers: Automated pipelines slash review times so clinicians can act while it still matters.",
              },
              {
                icon: "📋",
                text: "Tailored insights: Every study returns structured, patient-specific narratives aligned to the next best clinical move.",
              },
              {
                icon: "🧩",
                text: "Built to grow: Modular architecture fits existing systems and scales effortlessly with expanding service lines.",
              },
              {
                icon: "🔒",
                text: "Locked-down security: Enterprise-grade safeguards and regulatory alignment keep sensitive data protected end to end.",
              },
              {
                icon: "🤝",
                text: "Team-ready workflows: Shared workspaces keep radiologists, surgeons, and administrators in sync around each case.",
              },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm md:text-base text-slate-200 space-y-3"
              >
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
          <p className="text-slate-400 text-sm">
            © 2025 Biocliq AI. Building the intelligent healthcare future.
          </p>
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-5 text-sm">
            {[
              { href: "#intro", label: "Mission" },
              { href: "#about-us", label: "About Us" },
              { href: "/careers", label: "Careers" },
            ].map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-slate-400 hover:text-white transition"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </Layout>
  );
}
