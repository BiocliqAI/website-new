import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Job } from '../services/jobService';

interface JobFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (job: Omit<Job, 'id' | 'createdAt'>) => Promise<void>;
    initialData?: Job;
}

export default function JobFormModal({ isOpen, onClose, onSubmit, initialData }: JobFormModalProps) {
    const [formData, setFormData] = useState({
        title: '',
        department: '',
        experience: '',
        location: '',
        description: '',
        responsibilities: '',
        requirements: '',
        education: '',
        preferences: '',
        isActive: true
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title,
                department: initialData.department,
                experience: initialData.experience,
                location: initialData.location,
                description: initialData.description,
                responsibilities: initialData.responsibilities.join('\n'),
                requirements: initialData.requirements.join('\n'),
                education: initialData.education?.join('\n') || '',
                preferences: initialData.preferences?.join('\n') || '',
                isActive: initialData.isActive
            });
        } else {
            setFormData({
                title: '',
                department: '',
                experience: '',
                location: '',
                description: '',
                responsibilities: '',
                requirements: '',
                education: '',
                preferences: '',
                isActive: true
            });
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await onSubmit({
                ...formData,
                responsibilities: formData.responsibilities.split('\n').filter(line => line.trim()),
                requirements: formData.requirements.split('\n').filter(line => line.trim()),
                education: formData.education.split('\n').filter(line => line.trim()),
                preferences: formData.preferences.split('\n').filter(line => line.trim())
            });
            onClose();
        } catch (error) {
            console.error('Error saving job:', error);
            alert('Failed to save job');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-900 z-10">
                    <h2 className="text-2xl font-bold text-white">
                        {initialData ? 'Edit Job' : 'Add New Job'}
                    </h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-white">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-slate-300 mb-2">Job Title</label>
                            <input
                                required
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Department</label>
                            <input
                                required
                                value={formData.department}
                                onChange={e => setFormData({ ...formData, department: e.target.value })}
                                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Experience</label>
                            <input
                                required
                                value={formData.experience}
                                onChange={e => setFormData({ ...formData, experience: e.target.value })}
                                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-slate-300 mb-2">Location</label>
                            <input
                                required
                                value={formData.location}
                                onChange={e => setFormData({ ...formData, location: e.target.value })}
                                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-slate-300 mb-2">Description</label>
                        <textarea
                            required
                            rows={3}
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-slate-300 mb-2">Responsibilities (One per line)</label>
                        <textarea
                            required
                            rows={5}
                            value={formData.responsibilities}
                            onChange={e => setFormData({ ...formData, responsibilities: e.target.value })}
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 outline-none"
                            placeholder="- Lead development..."
                        />
                    </div>

                    <div>
                        <label className="block text-slate-300 mb-2">Requirements (One per line)</label>
                        <textarea
                            required
                            rows={5}
                            value={formData.requirements}
                            onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 outline-none"
                            placeholder="- 5+ years experience..."
                        />
                    </div>

                    <div>
                        <label className="block text-slate-300 mb-2">Education (One per line)</label>
                        <textarea
                            rows={3}
                            value={formData.education}
                            onChange={e => setFormData({ ...formData, education: e.target.value })}
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 outline-none"
                            placeholder="- Bachelor's degree in..."
                        />
                    </div>

                    <div>
                        <label className="block text-slate-300 mb-2">Preferences (Optional, One per line)</label>
                        <textarea
                            rows={3}
                            value={formData.preferences}
                            onChange={e => setFormData({ ...formData, preferences: e.target.value })}
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-500 outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="isActive"
                            checked={formData.isActive}
                            onChange={e => setFormData({ ...formData, isActive: e.target.checked })}
                            className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-cyan-500"
                        />
                        <label htmlFor="isActive" className="text-slate-300">Active (Visible on Careers Page)</label>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 text-slate-300 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2 bg-cyan-500 text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Saving...' : 'Save Job'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
