export default function WorkflowAnimation() {
    return (
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl p-6 md:p-8 overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }} />
            </div>

            {/* Workflow steps */}
            <div className="relative h-full flex items-center justify-between gap-4">

                {/* Step 1: CT Scanner */}
                <div className="flex-1 flex flex-col items-center gap-3 animate-fade-in">
                    <div className="relative">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-2xl md:text-3xl">🏥</span>
                        </div>
                        {/* Pulse effect */}
                        <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 animate-ping" />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-cyan-100 text-center">CT Scanner</p>
                </div>

                {/* Arrow 1 with animation */}
                <div className="flex-shrink-0 relative w-12 md:w-20">
                    <svg className="w-full h-8" viewBox="0 0 80 32" fill="none">
                        <path
                            d="M 0 16 L 60 16"
                            stroke="url(#gradient1)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            className="animate-dash"
                        />
                        <path d="M 55 11 L 65 16 L 55 21" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
                                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.8)" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {/* Animated dot */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-flow-1" />
                </div>

                {/* Step 2: AI Processing */}
                <div className="flex-1 flex flex-col items-center gap-3 animate-fade-in-delay-1">
                    <div className="relative">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-600/20 border border-fuchsia-500/30 flex items-center justify-center">
                            <span className="text-2xl md:text-3xl">🤖</span>
                        </div>
                        {/* Rotating ring */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-fuchsia-500/30 animate-spin-slow" style={{ animationDuration: '3s' }} />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-fuchsia-100 text-center">AI Processing</p>
                </div>

                {/* Arrow 2 with animation */}
                <div className="flex-shrink-0 relative w-12 md:w-20">
                    <svg className="w-full h-8" viewBox="0 0 80 32" fill="none">
                        <path
                            d="M 0 16 L 60 16"
                            stroke="url(#gradient2)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            className="animate-dash"
                        />
                        <path d="M 55 11 L 65 16 L 55 21" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
                        <defs>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(217, 70, 239, 0.3)" />
                                <stop offset="100%" stopColor="rgba(217, 70, 239, 0.8)" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {/* Animated dot */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-fuchsia-400 rounded-full animate-flow-2" />
                </div>

                {/* Step 3: PACS Server */}
                <div className="flex-1 flex flex-col items-center gap-3 animate-fade-in-delay-2">
                    <div className="relative">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center">
                            <span className="text-2xl md:text-3xl">📊</span>
                        </div>
                        {/* Success checkmark animation */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce-slow">
                            <span className="text-white text-xs">✓</span>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-green-100 text-center">Smart Report</p>
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400/50 rounded-full animate-float-1" />
            <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-fuchsia-400/50 rounded-full animate-float-2" />
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400/50 rounded-full animate-float-3" />

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: -8; }
        }
        
        @keyframes flow-1 {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        
        @keyframes flow-2 {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 10px); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, 10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-delay-1 {
          animation: fade-in 0.6s ease-out 0.2s backwards;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s backwards;
        }
        
        .animate-dash {
          animation: dash 1s linear infinite;
        }
        
        .animate-flow-1 {
          animation: flow-1 2s ease-in-out infinite;
        }
        
        .animate-flow-2 {
          animation: flow-2 2s ease-in-out infinite 0.3s;
        }
        
        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 5s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
        </div>
    )
}
