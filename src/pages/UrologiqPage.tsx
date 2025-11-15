import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import GlowOrb from '../components/GlowOrb'
import Badge from '../components/Badge'

const workflowSteps = [
  {
    title: 'Low-dose CT KUB',
    detail: 'Acquire a standard low-dose CT KUB without altering existing protocols.'
  },
  {
    title: 'Upload securely',
    detail: 'Send studies to Biocliq Cloud via automated routing or manual upload in seconds.'
  },
  {
    title: 'Reports in minutes',
    detail: 'Receive structured reports, 3D visuals, and stone composition insights almost instantly.'
  }
]

const capabilityHighlights = [
  {
    icon: '🛰️',
    text: 'Detects, locates, and quantifies stones across kidneys, ureters, and bladder.'
  },
  {
    icon: '🔍',
    text: 'Differentiates phleboliths and arterial calcifications from true ureteral stones.'
  },
  {
    icon: '🧪',
    text: 'Density-based stone composition guides shockwave, PCNL, or laser treatment decisions.'
  },
  {
    icon: '🧭',
    text: 'Interactive 3D visualization maps the calyceal system and stone volumes for first-time-right intervention.'
  },
  {
    icon: '🧬',
    text: 'Handles complex anatomies including horseshoe kidneys, dual ureters, staghorn calculi, and peri-stent stones.'
  }
]

const complexCases = [
  {
    title: 'Horseshoe kidneys',
    description: 'Anatomical variants are auto-segmented so teams can plan access routes confidently.',
    image: '/horseshoe.png'
  },
  {
    title: 'Stone near stent',
    description: 'Urologiq distinguishes stent artifacts from true stones, reducing unnecessary interventions.',
    image: '/stent.png'
  },
  {
    title: 'Staghorn stones',
    description: 'Large stone burden is quantified with volumetrics and 3D renderings for multi-stage surgery planning.',
    image: '/staghorn.png'
  }
]

export default function UrologiqPage() {
  const [activeCase, setActiveCase] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveCase((prev) => (prev + 1) % complexCases.length)
    }, 6000)

    return () => window.clearInterval(id)
  }, [])

  return (
    <main className="min-h-screen bg-[#070b16] text-slate-200 antialiased selection:bg-cyan-300/30 selection:text-white">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#070b16]/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 h-16">
          <Link to="/" className="flex items-center gap-2 text-white font-semibold tracking-tight">
            <img src="/logo.png" alt="Biocliq AI" className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/" className="text-slate-300 hover:text-white transition">
              Home
            </Link>
            <a href="#features" className="text-slate-300 hover:text-white transition">
              Capabilities
            </a>
            <a href="#workflow" className="text-slate-300 hover:text-white transition">
              Workflow
            </a>
            <a href="#use-cases" className="text-slate-300 hover:text-white transition">
              Use cases
            </a>
          </nav>
          <a href="mailto:info@biocliq.com?subject=Connect%20about%20Urologiq" className="rounded-full px-4 py-1.5 bg-cyan-500 text-slate-900 text-sm font-medium hover:brightness-110 transition">
            Talk to us
          </a>
        </div>
      </header>

      <div className="relative py-16 md:py-24 overflow-hidden">
        <GlowOrb />
        <Section id="overview" className="relative z-10 text-center">
          <div className="flex justify-center gap-3 flex-wrap mb-6">
            <Badge>Urology</Badge>
            <Badge>CT KUB</Badge>
            <Badge>Automation</Badge>
          </div>
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto">
            Urologiq — CT KUB reporting made intuitive
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-slate-100 text-lg md:text-2xl font-semibold">
            Detect, quantify, and visualize urinary tract stones with automated reports that urologists love.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:info@biocliq.com?subject=Urologiq%20demo" className="rounded-full px-5 py-2.5 bg-cyan-500 text-slate-900 font-medium hover:brightness-110 transition">
              Request a demo
            </a>
            <Link to="/" className="rounded-full px-5 py-2.5 border border-white/15 text-white hover:bg-white/10 transition">
              Back to home
            </Link>
          </div>
        </Section>
      </div>

      <Section id="hero-visual" title="See the entire KUB system at a glance" kicker="Product overview">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-sm md:text-base text-slate-300">
            <p>
              Urologiq pinpoints stones across kidneys, ureters, and bladder while rendering immersive 3D views of the calyceal system. Surgeons align on the plan faster—and patients finally see what’s happening inside their body.
            </p>
            <p>
              Density-based stone composition, volumetrics, and risk scoring arrive pre-packaged inside every report, making first-time-right treatment the default.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <img src="/urologiq.png" alt="Urologiq product overview" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      <Section id="features" title="Everything urologists need, in one click" kicker="Capabilities">
        <div className="grid md:grid-cols-2 gap-6">
          {capabilityHighlights.map(({ icon, text }) => (
            <div key={text} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm md:text-base text-slate-300 space-y-3">
              <span className="text-3xl block" aria-hidden>
                {icon}
              </span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Crystal-clear reporting outputs" kicker="Sample reports">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <img src="/Report1.png" alt="Urologiq report first page" className="w-full h-72 object-cover" />
            <div className="p-5 text-sm md:text-base text-slate-300">
              First-page summary highlights stone burden, density, and actionable insights per kidney segment.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <img src="/Report2.png" alt="Urologiq report second page" className="w-full h-72 object-cover" />
            <div className="p-5 text-sm md:text-base text-slate-300">
              Follow-up visuals showcase multiplanar and 3D renderings that clients can rotate and review together.
            </div>
          </div>
        </div>
      </Section>

      <Section id="workflow" title="Minutes from scan to decision" kicker="Workflow">
        <div className="grid md:grid-cols-3 gap-6">
          {workflowSteps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-3">
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm md:text-base text-slate-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="use-cases" title="Built for real-world anatomic challenges" kicker="Complex cases">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <div className="w-full h-64 bg-white/[0.05] flex items-center justify-center">
            <img src={complexCases[activeCase].image} alt={complexCases[activeCase].title} className="max-h-full max-w-full object-contain" />
          </div>
          <div className="p-6 space-y-3 text-center md:text-left">
            <h3 className="text-white font-semibold text-2xl">{complexCases[activeCase].title}</h3>
            <p className="text-sm md:text-base text-slate-300">{complexCases[activeCase].description}</p>
            <div className="flex justify-center md:justify-start gap-2 pt-2">
              {complexCases.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveCase(index)}
                  className={`size-2.5 rounded-full transition ${index === activeCase ? 'bg-cyan-400' : 'bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Clinical confidence you can measure" kicker="Performance">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center flex flex-col justify-center">
            <p className="text-4xl font-semibold text-white">99.8%</p>
            <p className="mt-2 text-slate-300">Sensitivity validated against expert reads</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center flex flex-col justify-center">
            <p className="text-4xl font-semibold text-white">97%</p>
            <p className="mt-2 text-slate-300">Specificity for stone detection and classification</p>
          </div>
        </div>
      </Section>

      <Section title="Ready to transform CT KUB reporting?">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold text-xl">Pilot Urologiq with your clinical team</h3>
              <p className="mt-2 text-slate-300 text-sm md:text-base">
                Email <a href="mailto:info@biocliq.com" className="text-cyan-300 hover:text-white transition">info@biocliq.com</a> or call <a href="tel:+919731121919" className="text-cyan-300 hover:text-white transition">+91-9731121919</a> to schedule a demonstration.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:info@biocliq.com?subject=Start%20a%20Urologiq%20pilot" className="rounded-full px-5 py-2.5 bg-cyan-500 text-slate-900 font-medium hover:brightness-110 transition">
                Schedule a briefing
              </a>
              <Link to="/" className="rounded-full px-5 py-2.5 border border-white/15 text-white hover:bg-white/10 transition">
                Explore other solutions
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <footer className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© 2025 Biocliq AI. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-sm">
            <Link to="/" className="text-slate-400 hover:text-white transition">
              Home
            </Link>
            <a href="#features" className="text-slate-400 hover:text-white transition">
              Capabilities
            </a>
            <a href="#workflow" className="text-slate-400 hover:text-white transition">
              Workflow
            </a>
            <a href="#use-cases" className="text-slate-400 hover:text-white transition">
              Use cases
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
