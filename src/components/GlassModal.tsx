import React from 'react';

interface GlassModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function GlassModal({ isOpen, onClose, children }: GlassModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-md transform overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-8 text-center shadow-2xl backdrop-blur-md transition-all">
                <div className="mb-6">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 text-3xl">
                        📧
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                    Apply for this Position
                </h3>

                <div className="text-slate-300 mb-8">
                    {children}
                </div>

                <button
                    onClick={onClose}
                    className="w-full rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-900 hover:bg-cyan-400 transition-colors"
                >
                    Got it
                </button>
            </div>
        </div>
    );
}
