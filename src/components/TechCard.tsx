import Badge from './Badge'

type Props = {
  title: string
  blurb: string
  tag: string
  onClick?: () => void
}

export default function TechCard({ title, blurb, tag, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden"
      data-testid={`tech-card-${title}`}
    >
      <div className="p-5 flex items-start gap-4">
        <div className="mt-1 size-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 ring-1 ring-white/15" />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Badge>{tag}</Badge>
          </div>
          <h3 className="text-lg md:text-xl text-white font-semibold">{title}</h3>
          <p className="mt-1 text-slate-300 text-sm md:text-base">{blurb}</p>
        </div>
      </div>
      <div className="h-36 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-transparent group-hover:via-fuchsia-500/20" />
    </button>
  )
}
