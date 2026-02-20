import Section from './Section'
import ReactiveMesh from './ReactiveMesh'

// Backup of the original landing hero before the Healthmetrix hero update.
export default function HeroSectionBackup() {
  return (
    <div className="relative">
      <Section id="hero" className="pt-20 md:pt-28">
        <ReactiveMesh />
      </Section>
    </div>
  )
}
