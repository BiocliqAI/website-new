import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import GlowOrb from '../components/GlowOrb'
import Badge from '../components/Badge'

const workloadFacts = [
  'Lower limb angiograms span up to 1,500 slices per study.',
  'Manual reporting demands hours of concentrated radiologist effort.',
  'Tedious slice-by-slice analysis increases fatigue and variation.'
]

const automationHighlights = [
  {
    title: 'Standardized reports',
    description: 'LLAMA structures findings into consistent templates covering inflow, runoff, and collaterals, ready for vascular decision-making.'
  },
  {
    title: '3D labeled renderings',
    description: 'Auto-generated 3D views highlight named arteries and collateral pathways so surgeons can pinpoint intervention sites instantly.'
  },
  {
    title: 'Actionable triage',
    description: 'Integrated severity grading and steno-occlusion flags bubble up critical lesions for prioritised review.'
  }
]

export default function LlamaPage() {
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
            <a href="#challenge" className="text-slate-300 hover:text-white transition">
              Challenge
            </a>
            <a href="#automation" className="text-slate-300 hover:text-white transition">
              Why LLAMA
            </a>
            <a href="#visuals" className="text-slate-300 hover:text-white transition">
              Visuals
            </a>
          </nav>
          <a href="mailto:info@biocliq.com?subject=Connect%20about%20LLAMA" className="rounded-full px-4 py-1.5 bg-cyan-500 text-slate-900 text-sm font-medium hover:brightness-110 transition">
            Talk to us
          </a>
        </div>
      </header>

      <div className="relative py-16 md:py-24 overflow-hidden">
        <GlowOrb />
        <Section id="overview" className="relative z-10 text-center">
          <div className="flex justify-center gap-3 flex-wrap mb-6">
            <Badge>Vascular</Badge>
            <Badge>Automation</Badge>
            <Badge>Lower Limb CTA</Badge>
          </div>
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto">
            LLAMA — Lower Limb Arterial Mapping Algorithm
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-slate-100 text-lg md:text-2xl font-semibold">
            Automate lower limb angiogram reporting and hand surgeons a clear, collateral-aware roadmap in minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:info@biocliq.com?subject=LLAMA%20demo" className="rounded-full px-5 py-2.5 bg-cyan-500 text-slate-900 font-medium hover:brightness-110 transition">
              Request a demo
            </a>
            <Link to="/" className="rounded-full px-5 py-2.5 border border-white/15 text-white hover:bg-white/10 transition">
              Back to home
            </Link>
          </div>
        </Section>
      </div>

      <Section id="challenge" kicker="Clinical context" title="Lower limb angiograms overwhelm reporting capacity">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-sm md:text-base text-slate-300">
            <p>
              Lower limb CTA datasets stretch to <strong>1,500 slices</strong>, demanding exhaustive review of inflow, runoff, and collateral anatomy.
            </p>
            <p>
              Radiologists spend hours navigating raw axial stacks, and fatigue invites variability across reporting styles.
            </p>
            <ul className="space-y-2">
              {workloadFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-cyan-400" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <img src="/LowerLimb.png" alt="Lower limb angiogram stack" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Why surgeons and radiologists choose LLAMA" kicker="Our solution" id="automation">
        <div className="grid md:grid-cols-3 gap-6">
          {automationHighlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-3">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm md:text-base text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm md:text-base text-slate-300">
          LLAMA ingests DICOM studies, maps arterial trees, quantifies stenosis, and exports standardized lower limb reports that slot directly into vascular workflows.
        </p>
      </Section>

      <Section title="See arteries and collaterals at a glance" kicker="Visuals" id="visuals">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <img src="/LowerLimb.png" alt="3D lower limb arterial rendering" className="w-full h-64 object-cover" />
            <div className="p-5 space-y-2">
              <h3 className="text-white font-semibold text-lg">Full-length arterial context</h3>
              <p className="text-sm md:text-base text-slate-300">
                Rapid 3D reconstructions label every segment so surgeons can traverse inflow to pedal arches without scrolling thousands of axial slices.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <img src="/Collaterals.png" alt="Collateral visualization" className="w-full h-64 object-cover" />
            <div className="p-5 space-y-2">
              <h3 className="text-white font-semibold text-lg">Collateral clarity</h3>
              <p className="text-sm md:text-base text-slate-300">
                LLAMA highlights collateral networks and runoff adequacy, informing whether endovascular or surgical pathways are viable.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Bring automation into lower limb programs">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold text-xl">Ready to trial LLAMA?</h3>
              <p className="mt-2 text-slate-300 text-sm md:text-base">
                Contact us for a pilot and see how automated mapping shortens reporting cycles while sharpening intervention decisions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:info@biocliq.com?subject=Start%20a%20LLAMA%20pilot" className="rounded-full px-5 py-2.5 bg-cyan-500 text-slate-900 font-medium hover:brightness-110 transition">
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
            <a href="#challenge" className="text-slate-400 hover:text-white transition">
              Challenge
            </a>
            <a href="#automation" className="text-slate-400 hover:text-white transition">
              Why LLAMA
            </a>
            <a href="#visuals" className="text-slate-400 hover:text-white transition">
              Visuals
            </a>
          </nav>
        </div>
      </footer>
    </main>
  )
}
