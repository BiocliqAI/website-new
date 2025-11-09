import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion'
import GlowOrb from './GlowOrb'
import Badge from './Badge'

export default function ReactiveMesh() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [0, 600], [12, -12])
  const rotateY = useTransform(x, [0, 600], [-12, 12])
  const glow = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(6,182,212,0.20), transparent 60%)`

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
        x.set(e.clientX - rect.left)
        y.set(e.clientY - rect.top)
      }}
      style={{ backgroundImage: glow as any }}
      className="relative aspect-[16/10] sm:aspect-[2/1] w-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden"
    >
      <GlowOrb />
      <motion.div style={{ rotateX, rotateY }} className="absolute inset-0 grid grid-cols-12 opacity-60">
        {Array.from({ length: 96 }).map((_, i) => (
          <div key={i} className="place-self-center w-1.5 h-1.5 rounded-full bg-cyan-300/60 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
        ))}
      </motion.div>
      <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="relative size-52 md:size-72 rounded-full bg-gradient-to-tr from-cyan-400/30 via-fuchsia-400/20 to-transparent blur-2xl" />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <div className="mb-4 flex gap-2 flex-wrap justify-center">
          <Badge>Agentic AI</Badge>
          <Badge>Medical Imaging</Badge>
          <Badge>Reasoning + Validation</Badge>
        </div>
        <h1 className="text-3xl md:text-6xl font-semibold tracking-tight text-white">Biocliq AI</h1>
        <p className="mt-4 max-w-2xl text-sm md:text-lg text-slate-300">
          At the frontier of medical intelligence — AI that reasons with CT/MRI to amplify clinical expertise.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#tech" className="rounded-full px-5 py-2.5 bg-cyan-500 text-slate-900 font-medium hover:brightness-110 transition">Products</a>
          <a href="#assistant" className="rounded-full px-5 py-2.5 border border-white/15 text-white hover:bg-white/10 transition">Research and Publications</a>
        </div>
      </div>
    </motion.div>
  )
}
