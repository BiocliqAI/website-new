import { useState, useEffect } from 'react'
import Layout from '../Layout'
import Section from '../components/Section'
import GlowOrb from '../components/GlowOrb'
import ApplicationFormModal from '../components/ApplicationFormModal'
import { jobService, Job } from '../services/jobService'


const CareersPage = () => {
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [selectedJobTitle, setSelectedJobTitle] = useState("")
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await jobService.getActiveJobs()
        setJobs(data)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  const handleApplyClick = (title: string) => {
    setSelectedJobTitle(title)
    setShowApplyModal(true)
  }

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    if (!selector.startsWith('#')) return
    event.preventDefault()
    const target = document.querySelector(selector)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { href: '#culture', label: 'Culture' },
    { href: '#openings', label: 'Open Positions' }
  ]

  return (
    <Layout navItems={navItems} handleNavClick={handleNavClick} showContactButton={false}>
      <div className="relative">
        <GlowOrb />
        <Section id="hero" className="pt-20 md:pt-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Careers at Biocliq AI
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-8">
              Join us in building the future of medical AI
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Be part of a team that's transforming healthcare through cutting-edge AI technology.
              We're looking for passionate individuals who want to make a real impact on patient care worldwide.
            </p>
          </div>
        </Section>
      </div>

      <div className="relative" id="culture">
        <Section title="Our Culture" kicker="Why Work With Us">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm md:text-base text-slate-300">
              <p>
                At Biocliq AI, we're driven by a mission to transform healthcare through innovation.
                Our team combines cutting-edge AI technology with deep medical expertise to create
                solutions that make a real difference in patients' lives.
              </p>
              <p>
                We foster a culture of continuous learning, collaboration, and bold thinking.
                Here, you'll work alongside brilliant minds in AI, healthcare, and technology,
                tackling challenges that matter.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: "🚀", text: "Innovation-driven environment" },
                  { icon: "📚", text: "Continuous learning opportunities" },
                  { icon: "🤝", text: "Collaborative team culture" },
                  { icon: "💡", text: "Impactful work that saves lives" }
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <span className="text-xl">{icon}</span>
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden p-2">
              <img
                src="/carrers.png"
                alt="Biocliq AI Team Culture"
                className="w-full h-auto rounded-xl"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%2364748b' font-family='Arial, sans-serif' font-size='14'%3ETeam Culture%3C/text%3E%3Csvg%3E"
                }}
              />
            </div>
          </div>
        </Section>
      </div>

      <div className="relative" id="openings">
        <Section title="Open Positions" kicker="Join Our Team">
          <div className="space-y-6">
            {loading ? (
              <div className="text-center text-slate-400 py-12">Loading open positions...</div>
            ) : jobs.length === 0 ? (
              <div className="text-center text-slate-400 py-12 bg-slate-800/30 rounded-2xl border border-slate-800">
                <p className="text-lg">No open positions at the moment.</p>
                <p className="text-sm mt-2">Please check back later or send an open application below.</p>
              </div>
            ) : (
              jobs.map((job) => (
                <div
                  key={job.id}
                  className="group relative p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">
                            {job.department}
                          </span>
                          <span className="px-2 py-1 bg-white/10 text-slate-300 rounded-full">
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-300 mb-2">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <span>📍 {job.location}</span>
                        <span>💼 Full-time</span>
                        <span>🚀 Immediate joiner preferred</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id!)}
                        className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-slate-800 transition-colors"
                      >
                        {expandedJobId === job.id ? 'Hide Details' : 'View Details'}
                      </button>
                      <button
                        onClick={() => handleApplyClick(job.title)}
                        className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-full hover:bg-cyan-400 transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Job Details */}
                  {expandedJobId === job.id && (
                    <div className="mt-6 pt-6 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-white font-medium mb-2">Key Responsibilities</h4>
                          <ul className="text-sm text-slate-300 space-y-1">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-cyan-300 mt-1">•</span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-2">Requirements</h4>
                          <ul className="text-sm text-slate-300 space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-cyan-300 mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {job.education && job.education.length > 0 && (
                          <div>
                            <h4 className="text-white font-medium mb-2">Education</h4>
                            <ul className="text-sm text-slate-300 space-y-1">
                              {job.education.map((edu, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-cyan-300 mt-1">•</span>
                                  {edu}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {job.preferences && job.preferences.length > 0 && (
                          <div>
                            <h4 className="text-white font-medium mb-2">Preferred</h4>
                            <ul className="text-sm text-slate-300 space-y-1">
                              {job.preferences.map((pref, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-cyan-300 mt-1">•</span>
                                  {pref}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </Section>
      </div>



      <div className="relative">
        <Section>
          <div className="text-center rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't see the right fit?
            </h3>
            <p className="text-slate-300 mb-6">
              We're always looking for talented individuals. Send us your resume and let's talk!
            </p>
            <button
              onClick={() => handleApplyClick("Open Application")}
              className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-full hover:bg-cyan-400 transition-colors"
            >
              Send Open Application
            </button>
          </div>
        </Section>
      </div>

      <ApplicationFormModal
        isOpen={showApplyModal}
        onClose={() => setShowApplyModal(false)}
        jobTitle={selectedJobTitle}
      />

    </Layout>
  )
}

export default CareersPage