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
      <Link
        to={href}
        className="group text-left w-full rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col"
        data-testid={`tech-card-${title}`}
      >
        {children}
      </Link>
    ) : (
      <a
        href={href}
        className="group text-left w-full rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col"
        data-testid={`tech-card-${title}`}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )

  return (
    <CardWrapper>
      {/* Main content area with horizontal layout */}
      <div className="flex flex-col sm:flex-row flex-1">
        {/* Logo section - 1/3 of the card */}
        <div className="sm:w-1/3 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 group-hover:from-cyan-500/10 group-hover:to-fuchsia-500/10 transition-all duration-300 flex items-center justify-center p-8 sm:p-6 border-b sm:border-b-0 sm:border-r border-white/10">
          {logo ? (
            <img
              src={logo}
              alt={`${title} logo`}
              className="w-full max-w-[120px] sm:max-w-none sm:w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-24 h-24 sm:w-full sm:h-auto sm:aspect-square rounded-2xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 ring-1 ring-white/15" />
          )}
        </div>

        {/* Content section - 2/3 of the card */}
        <div className="sm:w-2/3 p-5 flex flex-col gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <Badge>{tag}</Badge>
            </div>
            <h3 className="text-xl md:text-2xl text-white font-semibold">{title}</h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">{blurb}</p>
          </div>

          <div className="mt-auto">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 group-hover:text-white transition">
              Know more
              <span aria-hidden className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-transparent group-hover:from-cyan-500/20 group-hover:via-fuchsia-500/30 transition-all duration-300">
        {footer ? (
          <div className="px-5 py-4 text-sm md:text-base font-medium text-cyan-100/90 group-hover:text-cyan-50 transition-colors min-h-[4.5rem] flex items-center">
            {footer}
          </div>
        ) : (
          <div className="h-24" />
        )}
      </div>
    </CardWrapper>
  )
}
