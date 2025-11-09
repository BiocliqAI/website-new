export default function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
      <p className="text-3xl md:text-4xl font-semibold text-white">{k}</p>
      <p className="text-slate-400 mt-1">{v}</p>
    </div>
  )
}
