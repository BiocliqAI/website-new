import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import GlowOrb from '../components/GlowOrb'
import Badge from '../components/Badge'

const solutionHighlights = [
  {
    title: 'Coronary artery calcium',
    image: '/cac.png',
    body: 'CAC is the earliest indicator of cardiovascular risk, enabling proactive intervention long before symptoms arise.'
  },
  {
    title: 'Thoracic aortic aneurysm detection',
    image: '/taa.png',
    body: 'Corsight flags aortic aneurysms from routine non-gated CT, surfacing high-risk patients when it matters most.'
  },
  {
    title: 'Cardiac fat quantification',
    image: '/cf.png',
    body: 'Cardiac fat levels correlate with adverse outcomes; Corsight tracks these biomarkers to inform comprehensive care.'
  }
]

const steps = [
  {
    title: '1. Scan',
    detail: 'Patients walk in for a low-dose, plain chest CT at a Biocliq-enabled radiology partner.'
  },
  {
    title: '2. Analyze',
    detail: 'Images upload securely to the Biocliq cloud for automated CAC scoring and 3D visualization.'
  },
  {
    title: '3. Report',
    detail: 'Clinicians receive structured results that inform prevention strategies in minutes.'
  }
]

export default function CorsightPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
            <a href="#overview" className="text-slate-300 hover:text-white transition">
              Why Corsight
            </a>
            <a href="#workflow" className="text-slate-300 hover:text-white transition">
              Workflow
            </a>
            <a href="#validation" className="text-slate-300 hover:text-white transition">
              Validation
            </a>
          </nav>
          <a href="mailto:info@biocliq.com?subject=Connect%20about%20Corsight" className="rounded-full px-4 py-1.5 bg-cyan-500 text-slate-900 text-sm font-medium hover:brightness-110 transition">
            Talk to us
          </a>
        </div>
      </header>

      <div className="relative py-16 md:py-24 overflow-hidden">
        <GlowOrb />
        <Section id="overview" className="relative z-10 text-center py-10 md:py-14">
          <div className="flex justify-center gap-3 flex-wrap mb-6">
            <Badge>Cardiology</Badge>
            <Badge>AI-Powered CAC</Badge>
            <Badge>Preventive Care</Badge>
          </div>
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto">
            Corsight
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-slate-100 text-lg md:text-2xl font-semibold">
            Get a comprehensive heart assessment with a low dose, non-gated CT.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:info@biocliq.com?subject=Corsight%20demo" className="rounded-full px-5 py-2.5 bg-cyan-500 text-slate-900 font-medium hover:brightness-110 transition">
              Request a demo
            </a>
            <Link to="/" className="rounded-full px-5 py-2.5 border border-white/15 text-white hover:bg-white/10 transition">
              Back to home
            </Link>
          </div>
        </Section>
      </div>

      <Section kicker="Clinical context" title="Heart health screening falls short" className="py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-sm md:text-base text-slate-300">
            <p>
              Traditional screening leans on the CAC score alone, often requiring an expensive, high-radiation ECG-gated CT. That narrow lens leaves other critical risks unseen.
            </p>
            <p>
              Providers need broader insight without forcing patients through specialized scanners or higher dose protocols.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <img src="/heart.png" alt="Corsight clinical overview" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="What holds cardiology back today?" kicker="The problem" className="py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm md:text-base text-slate-300">
            CAC-only programs miss silent aortic aneurysms and cardiac fat signals that drive adverse events.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm md:text-base text-slate-300">
            ECG-gated studies are costly, higher dose, and limited to tertiary centers—keeping broad screening out of reach.
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm md:text-base text-slate-300">
            Clinicians lack a unified, affordable pathway to assess comprehensive heart health in a single visit.
          </div>
        </div>
      </Section>

      <Section title="How Corsight solves it" kicker="Our solution" className="py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {solutionHighlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-5 space-y-3">
                <h3 className="text-white font-semibold text-lg capitalize">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-300">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm md:text-base text-slate-300 max-w-3xl">
          Corsight delivers this broader assessment from a low-dose, affordable non-gated CT—bringing comprehensive heart health screening to everyday clinical settings.
        </p>
      </Section>

      <Section id="workflow" title="Built for streamlined adoption" kicker="How it works" className="py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-white font-semibold text-lg">{step.title}</h3>
              <p className="mt-2 text-sm md:text-base text-slate-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </Section>


      <Section id="validation" title="Clinically proven accuracy" kicker="Validation" className="py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-white font-semibold text-lg">90%+ sensitivity &amp; specificity</h3>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Pilot studies with leading cardiac centres confirm Corsight’s agreement with expert readers while delivering results in a fraction of the time.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-white font-semibold text-lg">Designed for trust</h3>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Every report highlights the CAC tier, quantified scores, and supporting 3D visualisations so clinicians can validate and communicate decisions confidently.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Partner with Biocliq to scale heart health" kicker="Let’s transform care together" className="py-10 md:py-14">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold text-xl">Ready to pilot Corsight?</h3>
              <p className="mt-2 text-slate-300 text-sm md:text-base">
                Call us at <a href="tel:+919731121919" className="text-cyan-300 hover:text-white transition">+91-9731121919</a> or email <a href="mailto:info@biocliq.com" className="text-cyan-300 hover:text-white transition">info@biocliq.com</a> to start a conversation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:info@biocliq.com?subject=Start%20a%20Corsight%20pilot" className="rounded-full px-5 py-2.5 bg-cyan-500 text-slate-900 font-medium hover:brightness-110 transition">
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
            <a href="#overview" className="text-slate-400 hover:text-white transition">
              Overview
            </a>
            <a href="#workflow" className="text-slate-400 hover:text-white transition">
              Workflow
            </a>
            <a href="#validation" className="text-slate-400 hover:text-white transition">
              Validation
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
