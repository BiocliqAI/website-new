import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'
import Section from '../components/Section'
import GlowOrb from '../components/GlowOrb'
import Badge from '../components/Badge'
import { useContact } from '../context/ContactContext'

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
  const { openContactModal } = useContact()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#features', label: 'Capabilities' },
    { href: '#workflow', label: 'Workflow' },
    { href: '#use-cases', label: 'Use cases' }
  ]

  return (
    <Layout navItems={navItems}>

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
            <button
              onClick={openContactModal}
              className="rounded-full px-5 py-2.5 bg-cyan-500 text-slate-900 font-medium hover:brightness-110 transition"
            >
              Request a demo
            </button>
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
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden p-2 md:p-4">
            <img
              src="/urologiq-capabilities.png"
              alt="Biocliq Intelligent Urology Suite Capabilities"
              className="w-full h-auto rounded-xl"
            />
            <img
              src="/logo.png"
              alt="Biocliq Logo"
              className="absolute bottom-4 right-4 w-32 md:w-48"
            />
          </div>
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
        <div className="grid md:grid-cols-3 gap-6">
          {complexCases.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="w-full h-56 bg-white/[0.05] flex items-center justify-center">
                <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-sm md:text-base text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
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
    </Layout>
  )
}
