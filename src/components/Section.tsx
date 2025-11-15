import { ReactNode } from 'react'

type Props = {
  id?: string
  title?: string | null
  kicker?: string | null
  className?: string
  children?: ReactNode
}

export default function Section({ id, title, kicker, className = '', children }: Props) {
  return (
    <section id={id} className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 scroll-mt-24 ${className}`}>
      <div className="mb-8 md:mb-12">
        {kicker ? <p className="text-xs tracking-widest uppercase text-slate-400 mb-2">{kicker}</p> : null}
        {title ? <h2 className="text-2xl md:text-4xl font-semibold text-slate-50 leading-tight">{title}</h2> : null}
      </div>
      {children}
    </section>
  )
}
