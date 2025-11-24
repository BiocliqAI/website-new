import { useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'

// Mock data for the cards
const impactData = [
    {
        icon: "/happy_doctor_icon.png",
        title: "Improved Consultant satisfaction",
        description: "with smarter, precise reports that help better patient outcomes"
    },
    {
        icon: "/happy_patient_icon.png",
        title: "Better patient satisfaction",
        description: "with visual and explainable report"
    },
    {
        icon: "/reduced_cost_icon.png",
        title: "Reduced cost of operations",
        description: "by 30%"
    },
    {
        icon: "/increased_revenue_icon.png",
        title: "Increased revenues",
        description: "due to higher referrals"
    }
]

// Option A: Glassmorphism with Gradient Border
function ImpactCardOptionA({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-100 transition duration-500 blur"></div>
            <div className="relative h-full bg-slate-900 rounded-2xl p-6 flex flex-col items-center text-center border border-white/10">
                <div className="mb-4 bg-white/5 p-4 rounded-full">
                    <img src={icon} alt="" className="w-12 h-12 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm">{description}</p>
            </div>
        </div>
    )
}

// Option B: Minimalist with Accent
function ImpactCardOptionB({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
        <div className="h-full bg-white/[0.02] hover:bg-white/[0.05] border-l-4 border-cyan-500 rounded-r-xl p-6 transition duration-300">
            <div className="flex items-start gap-4">
                <div className="shrink-0">
                    <img src={icon} alt="" className="w-10 h-10 object-contain" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    )
}

// Option C: Bold & Colorful
function ImpactCardOptionC({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
        <div className="h-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-lg hover:shadow-cyan-500/20 transition duration-300">
            <div className="h-full bg-[#0f1623] rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                <div className="mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    <img src={icon} alt="" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-3">{title}</h3>
                <p className="text-slate-400">{description}</p>
            </div>
        </div>
    )
}

export default function ImpactDesignPreview() {
    return (
        <div className="min-h-screen bg-[#0B101B] text-white p-8">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Impact Card Design Options</h1>
                    <Link to="/" className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition">Back to Home</Link>
                </div>

                <section>
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Option A: Glassmorphism & Glow</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {impactData.map((item, i) => (
                            <ImpactCardOptionA key={i} {...item} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Option B: Minimalist Side-Accent</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {impactData.map((item, i) => (
                            <ImpactCardOptionB key={i} {...item} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Option C: Bold & Central</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {impactData.map((item, i) => (
                            <ImpactCardOptionC key={i} {...item} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
