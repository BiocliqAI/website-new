import { Link } from 'react-router-dom'
import Badge from './Badge'

type Props = {
  title: string
  blurb: string
  tag: string
  href: string
  footer?: string
  logo?: string
}

export default function TechCard({ title, blurb, tag, href, footer, logo }: Props) {
  const isInternal = href.startsWith('/')
  const external = href.startsWith('http')

  const CardWrapper = ({ children }: { children: React.ReactNode }) =>
    isInternal ? (
      <Link to={href} className="group text-left w-full rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden flex flex-col" data-testid={`tech-card-${title}`}>
        {children}
      </Link>
    ) : (
      <a
        href={href}
        className="group text-left w-full rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition overflow-hidden flex flex-col"
        data-testid={`tech-card-${title}`}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )

  return (
    <CardWrapper>
      <div className="p-5 flex flex-col gap-4 flex-1">
        <div className="flex items-start gap-4">
          {logo ? (
            <img src={logo} alt={`${title} logo`} className="mt-1 h-10 w-10 rounded-xl border border-white/10 bg-white/5 object-contain p-1" />
          ) : (
            <div className="mt-1 size-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 ring-1 ring-white/15" />
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge>{tag}</Badge>
            </div>
            <h3 className="text-lg md:text-xl text-white font-semibold">{title}</h3>
            <p className="mt-1 text-slate-300 text-sm md:text-base">{blurb}</p>
          </div>
        </div>
        <div className="mt-auto">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 group-hover:text-white transition">
            Know more
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-transparent group-hover:via-fuchsia-500/20">
        {footer ? (
          <div className="px-5 py-4 text-sm md:text-base font-medium text-cyan-100/90 min-h-[4.5rem] flex items-center">
            {footer}
          </div>
        ) : (
          <div className="h-24" />
        )}
      </div>
    </CardWrapper>
  )
}
