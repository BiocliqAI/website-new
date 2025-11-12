import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import GlowOrb from '../components/GlowOrb'
import Badge from '../components/Badge'

const problemPoints = [
  'ECG-gated CT demands specialized equipment, extra time, and exposes patients to higher radiation.',
  'Limited access to gated scanners restricts preventative screening programs.',
  'Missed identification of at-risk patients delays intervention opportunities.'
]

const solutionHighlights = [
  'Low-dose, non-gated chest CT that can run on the vast majority of scanners already in service.',
  'Cloud-native pipeline that integrates with existing PACS and RIS workflows.',
  'Validated performance with 90%+ sensitivity and specificity across leading cardiac centers.'
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

const comparison = [
  {
    feature: 'Cost-Effectiveness',
    ours: 'Affordable non-gated protocol',
    gated: 'High-cost, gated acquisition',
    competitor: 'Premium pricing'
  },
  {
    feature: 'Accessibility',
    ours: 'Runs on widely deployed CT systems',
    gated: 'Limited to tertiary hospitals',
    competitor: 'Requires specialized imaging centers'
  },
  {
    feature: 'Ease of Use',
    ours: 'Simple workflow, minimal training',
    gated: 'Needs dedicated technologists',
    competitor: 'Moderate complexity'
  },
  {
    feature: 'Efficiency',
    ours: 'Rapid turnaround with automated outputs',
    gated: 'Time-intensive acquisition + manual reads',
    competitor: 'Longer queue times'
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
          <Link to="/" className="text-white font-semibold tracking-tight">
            Biocliq AI
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
        <Section id="overview" className="relative z-10 text-center">
          <div className="flex justify-center gap-3 flex-wrap mb-6">
            <Badge>Cardiology</Badge>
            <Badge>AI-Powered CAC</Badge>
            <Badge>Preventive Care</Badge>
          </div>
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight text-white max-w-3xl mx-auto">
            Corsight™ automates coronary calcium scoring on routine, non-gated CT
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-base md:text-lg">
            Revolutionizing cardiovascular risk assessment with rapid, affordable CAC scoring that plugs into today’s imaging infrastructure and unlocks proactive prevention programs.
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

      <Section kicker="Clinical context" title="Coronary Artery Calcification in focus">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-sm md:text-base text-slate-300">
            <p>
              <strong>CAC is the earliest and most reliable indicator of cardiovascular risk.</strong> Accurate scoring enables cardiologists to stratify patients and act before adverse events.
            </p>
            <p>
              Corsight delivers structured reports across the four-tier CAC scale&mdash;from <em>No Risk</em> to <em>High Risk</em>&mdash;so clinicians can personalize interventions ranging from lifestyle changes to advanced therapies.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-4 text-sm md:text-base text-slate-300">
            <h3 className="text-white text-lg font-semibold">Key takeaways</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Trusted quantitative signal that augments traditional risk scores.</li>
              <li>Guides prevention strategies for asymptomatic individuals.</li>
              <li>Supports clinician-patient conversations with tangible evidence.</li>
            </ul>
            <blockquote className="text-slate-400 text-sm italic border-l-2 border-cyan-400/50 pl-3">
              “Early detection through CAC scoring can help prevent major cardiac events. Consult your doctor today.”
            </blockquote>
          </div>
        </div>
      </Section>

      <Section title="What holds cardiology back today?" kicker="The problem">
        <div className="grid md:grid-cols-3 gap-6">
          {problemPoints.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm md:text-base text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="How Corsight solves it" kicker="Our solution">
        <div className="grid md:grid-cols-3 gap-6">
          {solutionHighlights.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm md:text-base text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="workflow" title="Built for streamlined adoption" kicker="How it works">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-white font-semibold text-lg">{step.title}</h3>
              <p className="mt-2 text-sm md:text-base text-slate-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why providers choose Corsight" kicker="Competitive advantage">
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-3 text-sm md:text-base text-slate-300">
            <thead className="text-left text-xs uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2 text-white">Corsight</th>
                <th className="px-4 py-2">ECG-gated CT</th>
                <th className="px-4 py-2">Typical AI competitor</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="rounded-2xl border border-white/10 bg-white/[0.03]">
                  <td className="px-4 py-3 font-medium text-white">{row.feature}</td>
                  <td className="px-4 py-3 text-cyan-200">{row.ours}</td>
                  <td className="px-4 py-3">{row.gated}</td>
                  <td className="px-4 py-3">{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="validation" title="Clinically proven accuracy" kicker="Validation">
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

      <Section title="Partner with Biocliq to scale heart health" kicker="Let’s transform care together">
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
