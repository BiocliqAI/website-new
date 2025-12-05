import { useState } from 'react'
import Layout from '../Layout'
import Section from '../components/Section'
import GlowOrb from '../components/GlowOrb'
import ApplicationFormModal from '../components/ApplicationFormModal'


interface Job {
  id: string
  title: string
  department: string
  experience: string
  location: string
  description: string
  responsibilities: string[]
  requirements: string[]
  preferences?: string[]
}

const jobs: Job[] = [
  {
    id: 'gen-ai-engineer',
    title: 'Generative AI Engineer',
    department: 'AI/ML',
    experience: '1–3 Years',
    location: 'Bangalore (Hybrid)',
    description: 'We are seeking a motivated Generative AI Engineer with 1–3 years of hands-on experience in building, fine-tuning, and deploying generative models. You will work on real-world applications of LLMs, vision-language models, and multimodal generative systems, contributing to product features, internal automation tools, and customer-facing solutions.',
    responsibilities: [
      'Model Development & Fine-Tuning: Develop, fine-tune, and evaluate LLMs, diffusion models, VLMs, and transformer-based architectures',
      'Train models using custom datasets, including text, image, audio, and multimodal data',
      'Implement prompt engineering, instruction tuning, and retrieval-augmented generation (RAG) pipelines',
      'Build scalable inference pipelines using Python and modern ML frameworks (PyTorch, HuggingFace, TensorRT, ONNX)',
      'Implement model optimization techniques (quantization, distillation, pruning) for deployment on cloud or edge devices',
      'Integrate generative AI models into backend microservices and APIs',
      'Create robust data pipelines for dataset collection, preprocessing, augmentation, and evaluation',
      'Maintain dataset quality with labeling, cleaning, filtering, and benchmarking',
      'Explore new architectures, training techniques, and SOTA research papers',
      'Run controlled experiments, A/B tests, and performance validations',
      'Prototype and iterate quickly to convert ideas into functional demos',
      'Work with DevOps/MLOps teams to package and deploy models in production (Docker, Kubernetes preferred)',
      'Monitor model performance, drift, quality, latency, and reliability once deployed'
    ],
    requirements: [
      '1–3 years experience in applied ML or generative AI',
      'Strong proficiency in Python, PyTorch/TensorFlow, and HuggingFace ecosystem',
      'Practical experience with LLMs, diffusion models, or vision transformers',
      'Hands-on experience fine-tuning models on custom datasets',
      'Familiarity with cloud services (AWS/GCP/Azure) or on-prem GPU stacks',
      'Understanding of transformer architecture, embeddings, tokenization, attention mechanisms',
      'Experience with APIs, microservices, or backend engineering using Python (FastAPI/Flask)',
      'Strong debugging, experimentation, and documentation skills',
      'Bachelor\'s or Master\'s degree in Computer Science, AI/ML, Data Science, Applied Math, or a related field',
      'Equivalent practical experience is also considered'
    ],
    preferences: [
      'Experience with OpenAI, Anthropic, Mistral, Llama, Qwen, or similar model families',
      'Familiarity with vector databases (Pinecone, Weaviate, FAISS)',
      'Knowledge of RAG, agentic workflows, and LLM tool-use frameworks (LangChain, LlamaIndex)',
      'Exposure to multimodal models (e.g., CLIP, VLMs, SAM, diffusion models)',
      'Experience in medical imaging, radiology AI, or healthcare AI (bonus for Biocliq/Eliqsar context)',
      'Contributions to open-source ML projects or published research'
    ]
  },
  {
    id: 'mri-application-specialist',
    title: 'MRI Application Specialist',
    department: 'Medical Imaging & AI',
    experience: '2–5 years',
    location: 'Bangalore / Remote (Hybrid)',
    description: 'We\'re looking for an MRI Application Specialist with strong expertise in anatomy, pathology interpretation, and hands-on segmentation. You will support MRI data curation, segmentation workflows, collaborate closely with radiologists and AI engineers, and help build products aligned with upcoming healthcare technologies.',
    responsibilities: [
      'Perform manual and semi-automatic segmentation of all anatomies, especially MSK, including joints, bones, cartilage, ligaments, tendons, and soft tissues',
      'Review and interpret multi-sequence MRI datasets (T1, T2, PD, STIR, GRE, fat-sat, etc.)',
      'Support MRI protocol understanding, quality checks, and dataset preparation',
      'Contribute to annotation guidelines, workflow improvement, and tool enhancement',
      'Document segmentation protocols and maintain accurate records of anatomical variations'
    ],
    requirements: [
      'Strong understanding of MRI imaging principles, contrast mechanisms, and sequence interpretation',
      'Ability to follow structured segmentation protocols with high accuracy',
      'Clear communication skills for discussions with radiologists and technical teams',
      'Comfortable handling large MSK MRI datasets and various imaging artefacts',
      'Bachelor\'s degree in Radiology, Medical Imaging, Biomedical Engineering, or a related field is a MUST',
      '2–5 years of experience working with MRI datasets and performing segmentation',
      'Experience in medical imaging annotation projects or clinical imaging workflows'
    ],
    preferences: [
      'Strong knowledge of anatomy across all major MRI sequences',
      'Knowledge of relevant anatomical structures and pathologies across various MRI sequences',
      'High precision in 2D and 3D segmentation',
      'Proficiency with segmentation tools such as 3D Slicer, ITK-SNAP, Mimics, MITK, Horos, or equivalent',
      'Ability to work with DICOM data and MRI-specific parameters',
      'Strong visual reasoning and attention to detail',
      'Ability to manage datasets and maintain consistency across volumes and sequences',
      'Prior exposure to AI/ML imaging teams is a plus'
    ]
  },
  {
    id: 'ct-segmentation-specialist',
    title: 'CT Segmentation Specialist (Abdomen)',
    department: 'Medical Imaging & AI',
    experience: '3+ years',
    location: 'Bangalore (Hybrid)',
    description: 'We\'re looking for a CT Segmentation Specialist with strong, hands-on expertise in abdominal anatomy and high-precision segmentation. Your core responsibility will be to produce high-quality, pixel-precise abdominal segmentations that our AI pipelines can rely on.',
    responsibilities: [
      'Perform detailed manual and semi-automatic segmentation of abdominal organs and structures (liver, spleen, pancreas, kidneys, bowel segments, vasculature, etc.)',
      'Work with CT datasets across multiple phases (arterial, venous, delayed)',
      'Validate and maintain consistency of 3D segmentation outputs',
      'Follow internal QA standards and contribute to annotation guideline improvements',
      'Provide feedback on tools, workflows, and edge cases',
      'Document segmentation protocols and maintain accurate records'
    ],
    requirements: [
      'Bachelor\'s degree in Radiology, Biomedical Engineering, Medical Imaging, or a related field is a MUST',
      '3+ years of experience in CT segmentation, specifically abdominal regions',
      'Strong knowledge of abdominal anatomy and CT interpretation',
      'High precision in manual and semi-automatic segmentation'
    ],
    preferences: [
      'Proficiency with tools such as 3D Slicer, ITK-SNAP',
      'Ability to work with DICOM data and PACS-based workflows',
      'Excellent attention to detail and consistency',
      'Ability to identify anatomical variations and handle low-quality datasets',
      'Prior experience working on medical imaging annotation projects or AI/ML workflows is a plus',
      'Experience with liver'
    ]
  },
  {
    id: 'sales-bd-manager',
    title: 'Manager – Sales & Business Development',
    department: 'Sales & Business Development',
    experience: '5–7 years',
    location: 'Bangalore / Hyderabad (with travel across South India)',
    description: 'Biocliq Technologies is looking for an experienced and driven Sales & Business Development Manager to lead growth across South India, with a primary focus on the Hyderabad and Bangalore regions. You will represent Biocliq\'s suite of innovative medical imaging and healthcare technologies, engaging with hospitals, diagnostic centres, and surgical facilities.',
    responsibilities: [
      'Achieve and exceed annual sales targets for the South India territory',
      'Identify, onboard, and nurture customer accounts to drive sustainable revenue growth',
      'Build and execute comprehensive regional sales plans with accurate forecasting and lead tracking',
      'Engage and maintain relationships with key stakeholders including hospital management, radiologists, procurement heads, and finance teams',
      'Deliver persuasive product demonstrations and technical presentations, both in-person and remotely',
      'Ensure prompt customer support and high satisfaction through proactive issue resolution',
      'Provide regular reports on sales progress, expenses, and market insights in alignment with company standards'
    ],
    requirements: [
      'B.Sc. in Medical Imaging Technology / Radiography and MBA in Marketing or Hospital Management (preferred)',
      '5–7 years of experience in medical device, imaging, or healthtech enterprise sales, with a proven track record of selling to hospitals and diagnostic centres',
      'Familiarity with PACS/DICOM workflows, radiology reporting, and AI-based imaging tools is essential',
      'Must be based in or open to relocating to Bangalore/Hyderabad'
    ],
    preferences: [
      'Consultative sales and solution-based approach',
      'Strong negotiation and hospital CXO engagement capabilities',
      'Excellent account planning, pipeline management, and forecasting skills',
      'Proficiency in conducting remote demos, digital follow-ups, and CRM reporting',
      'Deep understanding of the healthcare and imaging ecosystem in South India',
      'Comfortable with frequent travel across the assigned territory'
    ]
  }
]

export default function CareersPage() {
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [selectedJobTitle, setSelectedJobTitle] = useState("")

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
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%2364748b' font-family='Arial, sans-serif' font-size='14'%3ETeam Culture%3C/text%3E%3C/svg%3E"
                }}
              />
            </div>
          </div>
        </Section>
      </div>

      <div className="relative" id="openings">
        <Section title="Open Positions" kicker="Join Our Team">
          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-all duration-300"
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
                      onClick={() => handleApplyClick(job.title)}
                      className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-full hover:bg-cyan-400 transition-colors"
                    >
                      Apply for this job
                    </button>
                  </div>
                </div>

                {/* Job Details */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-white font-medium mb-2">Key Responsibilities</h4>
                      <ul className="text-sm text-slate-300 space-y-1">
                        {job.responsibilities.slice(0, 3).map((resp, idx) => (
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
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-300 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
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
              </div>
            ))}
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