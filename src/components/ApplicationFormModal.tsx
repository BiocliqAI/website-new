import React, { useState, useRef } from 'react';
import { storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import emailjs from '@emailjs/browser';

interface ApplicationFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function ApplicationFormModal({ isOpen, onClose, jobTitle }: ApplicationFormModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: ''
    });
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'uploading' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const formRef = useRef<HTMLFormElement>(null);

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
                setErrorMessage('File size must be less than 5MB');
                return;
            }
            setFile(selectedFile);
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setErrorMessage('Please upload your CV');
            return;
        }

        setIsSubmitting(true);
        setStatus('uploading');
        setErrorMessage('');

        try {
            // 1. Upload to Firebase Storage
            const timestamp = Date.now();
            const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
            const storageRef = ref(storage, `cvs/${timestamp}_${sanitizedFileName}`);

            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            // 2. Send Email via EmailJS
            setStatus('sending');

            const templateParams = {
                job_title: jobTitle,
                applicant_name: formData.name,
                applicant_email: formData.email,
                applicant_phone: formData.phone,
                cover_letter: formData.coverLetter,
                cv_link: downloadURL,
                file_name: file.name,
                file_size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            setTimeout(() => {
                onClose();
                // Reset form after closing
                setFormData({ name: '', email: '', phone: '', coverLetter: '' });
                setFile(null);
                setStatus('idle');
            }, 3000);

        } catch (error) {
            console.error('Error submitting application:', error);
            setStatus('error');
            setErrorMessage('Failed to submit application. Please try again or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-lg transform overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-md transition-all">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white"
                >
                    ✕
                </button>

                {status === 'success' ? (
                    <div className="text-center py-8">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-3xl mb-4">
                            ✅
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Application Sent!</h3>
                        <p className="text-slate-300">
                            Thank you for applying. We will review your application and get back to you soon.
                        </p>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold text-white mb-1">
                            Apply for {jobTitle}
                        </h3>
                        <p className="text-slate-400 mb-6 text-sm">
                            Please fill out the form below and attach your resume.
                        </p>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Cover Letter (Optional)</label>
                                <textarea
                                    name="coverLetter"
                                    rows={3}
                                    value={formData.coverLetter}
                                    onChange={handleInputChange}
                                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors resize-none"
                                    placeholder="Tell us why you're a great fit..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Resume / CV</label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        id="cv-upload"
                                    />
                                    <label
                                        htmlFor="cv-upload"
                                        className="flex items-center justify-center w-full rounded-lg bg-white/5 border border-dashed border-white/20 px-4 py-6 text-slate-400 hover:bg-white/10 hover:border-cyan-500/50 cursor-pointer transition-all"
                                    >
                                        {file ? (
                                            <span className="text-cyan-400 font-medium">{file.name}</span>
                                        ) : (
                                            <span>Click to upload PDF or DOC (Max 5MB)</span>
                                        )}
                                    </label>
                                </div>
                            </div>

                            {errorMessage && (
                                <div className="text-red-400 text-sm bg-red-400/10 p-2 rounded">
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-900 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-2"
                            >
                                {status === 'uploading' ? 'Uploading CV...' :
                                    status === 'sending' ? 'Sending Application...' :
                                        'Submit Application'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
