import { Link } from 'react-router-dom'
import Badge from './Badge'

type Props = {
  title: string
  blurb: string
  tag: string
  href: string
  highlights?: string[]
}

export default function TechCard({ title, blurb, tag, href, highlights = [] }: Props) {
  const isInternal = href.startsWith('/')

  const external = href.startsWith('http')

  return (
    <article className="group text-left w-full rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden" data-testid={`tech-card-${title}`}>
      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="mt-1 size-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 ring-1 ring-white/15" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge>{tag}</Badge>
            </div>
            <h3 className="text-lg md:text-xl text-white font-semibold">{title}</h3>
            <p className="mt-1 text-slate-300 text-sm md:text-base">{blurb}</p>
          </div>
        </div>
        {isInternal ? (
          <Link to={href} className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-white transition">
            Know more
            <span aria-hidden>→</span>
          </Link>
        ) : (
          <a href={href} className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-white transition" target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
            Know more
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
      <div className="bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-transparent group-hover:via-fuchsia-500/20">
        {highlights.length ? (
          <div className="px-5 py-4 flex flex-wrap gap-2 text-xs text-cyan-100/80">
            {highlights.map((item) => (
              <span key={item} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-tight">
                {item}
              </span>
            ))}
          </div>
        ) : (
          <div className="h-24" />
        )}
      </div>
    </article>
  )
}
