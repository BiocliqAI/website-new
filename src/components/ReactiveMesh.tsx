import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion'
import GlowOrb from './GlowOrb'
import Badge from './Badge'

export default function ReactiveMesh() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [0, 600], [12, -12])
  const rotateY = useTransform(x, [0, 600], [-12, 12])
  const glow = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(34,211,238,0.28), transparent 55%)`

  const textVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const textContainer = {
    hidden: {},
    visible: { transition: { delayChildren: 0.2, staggerChildren: 0.18 } }
  }

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
        x.set(e.clientX - rect.left)
        y.set(e.clientY - rect.top)
      }}
      style={{ backgroundImage: glow as any }}
      className="relative aspect-[16/10] sm:aspect-[2/1] w-full rounded-3xl border border-white/10 bg-[#0d111f] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.video
          className="w-full h-full object-cover opacity-80"
          src="/hero1.mp4"
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1.15 }}
          animate={{ scale: [1.15, 1.07, 1.15] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundImage: 'linear-gradient(120deg, rgba(5,12,35,0.55) 0%, rgba(15,25,54,0.35) 35%, rgba(12,17,31,0.7) 70%)', backgroundSize: '200% 200%' }}
        />
        <motion.div
          className="absolute inset-0 mix-blend-screen"
          animate={{ opacity: [0.4, 0.75, 0.4], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(6,182,212,0.45), transparent 55%), radial-gradient(circle at 80% 30%, rgba(217,70,239,0.35), transparent 55%)' }}
        />
      </div>
      <GlowOrb />
      <motion.div style={{ rotateX, rotateY }} className="absolute inset-0 grid grid-cols-12 opacity-60">
        {Array.from({ length: 96 }).map((_, i) => (
          <motion.div
            key={i}
            className="place-self-center w-1.5 h-1.5 rounded-full bg-cyan-300/50 shadow-[0_0_12px_rgba(34,211,238,0.45)]"
            animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.35, 1] }}
            transition={{ duration: 5 + (i % 6), repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>
      <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="relative size-52 md:size-72 rounded-full bg-gradient-to-tr from-cyan-400/30 via-fuchsia-400/20 to-transparent blur-2xl" />
      </motion.div>
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6" variants={textContainer} initial="hidden" animate="visible">
        <motion.div className="relative mb-6" variants={textVariants}>
          <div className="pointer-events-none absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl opacity-40" />
          <motion.video
            src="/logoanim.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="relative mx-auto h-16 w-auto md:h-20"
            style={{ mixBlendMode: 'screen' }}
          />
        </motion.div>
        <motion.div className="mb-4 flex gap-2 flex-wrap justify-center" variants={textVariants}>
          <Badge>Agentic AI</Badge>
          <Badge>Medical Imaging</Badge>
          <Badge>Reasoning + Validation</Badge>
        </motion.div>
        <motion.h1 className="text-3xl md:text-6xl font-semibold tracking-tight text-white" variants={textVariants}>
          Biocliq AI
        </motion.h1>
        <motion.p className="mt-4 max-w-2xl text-sm md:text-lg text-slate-300" variants={textVariants}>
          At the frontier of medical intelligence — AI that amplifies clinical expertise.
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
