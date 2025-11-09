export default function TimelineItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1.5 size-2 rounded-full bg-cyan-400" />
      <h4 className="text-white font-medium">{title}</h4>
      <p className="text-slate-300 text-sm mt-1">{body}</p>
    </div>
  )
}
