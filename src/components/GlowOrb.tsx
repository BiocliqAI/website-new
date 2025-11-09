export default function GlowOrb() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-fuchsia-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-cyan-500/10 blur-[120px] rounded-full" />
    </div>
  )
}
