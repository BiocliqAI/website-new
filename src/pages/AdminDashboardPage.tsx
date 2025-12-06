import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { jobService, Job } from '../services/jobService';
import { PlusIcon, PencilSquareIcon, TrashIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Layout from '../Layout';
import Section from '../components/Section';
import JobFormModal from '../components/JobFormModal';

export default function AdminDashboardPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingJob, setEditingJob] = useState<Job | undefined>(undefined);
    const navigate = useNavigate();

    const fetchJobs = async () => {
        try {
            const data = await jobService.getAllJobs();
            setJobs(data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/admin/login');
    };

    const handleAddJob = () => {
        setEditingJob(undefined);
        setIsModalOpen(true);
    };

    const handleEditJob = (job: Job) => {
        setEditingJob(job);
        setIsModalOpen(true);
    };

    const handleDeleteJob = async (id: string) => {
        if (confirm('Are you sure you want to delete this job?')) {
            await jobService.deleteJob(id);
            fetchJobs();
        }
    };

    const handleToggleStatus = async (job: Job) => {
        await jobService.toggleJobStatus(job.id!, !job.isActive);
        fetchJobs();
    };

    const handleSaveJob = async (jobData: Omit<Job, 'id' | 'createdAt'>) => {
        if (editingJob?.id) {
            await jobService.updateJob(editingJob.id, jobData);
        } else {
            await jobService.addJob(jobData);
        }
        fetchJobs();
    };

    return (
        <Layout navItems={[]}>
            <div className="pt-20 min-h-screen bg-slate-900">
                <Section>
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-white">Job Dashboard</h1>
                        <div className="flex gap-4">
                            <button
                                onClick={handleAddJob}
                                className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-colors"
                            >
                                <PlusIcon className="w-5 h-5" />
                                Add Job
                            </button>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center text-slate-400 py-12">Loading jobs...</div>
                    ) : (
                        <div className="grid gap-4">
                            {jobs.map((job) => (
                                <div
                                    key={job.id}
                                    className={`p-6 rounded-xl border ${job.isActive ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-900 border-slate-800 opacity-75'
                                        }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                                                <span className={`px-2 py-0.5 text-xs rounded-full ${job.isActive ? 'bg-green-500/20 text-green-400' : 'bg-slate-600/20 text-slate-400'
                                                    }`}>
                                                    {job.isActive ? 'Active' : 'Draft'}
                                                </span>
                                            </div>
                                            <p className="text-slate-400 text-sm mb-1">{job.department} • {job.location}</p>
                                            <p className="text-slate-500 text-sm">Experience: {job.experience}</p>
                                        </div>

                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleToggleStatus(job)}
                                                className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                                                title={job.isActive ? "Deactivate" : "Activate"}
                                            >
                                                {job.isActive ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
                                            </button>
                                            <button
                                                onClick={() => handleEditJob(job)}
                                                className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
                                                title="Edit"
                                            >
                                                <PencilSquareIcon className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteJob(job.id!)}
                                                className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                                                title="Delete"
                                            >
                                                <TrashIcon className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {jobs.length === 0 && (
                                <div className="text-center text-slate-500 py-12 bg-slate-800/30 rounded-xl border border-slate-800 border-dashed">
                                    No jobs found. Click "Add Job" to create one.
                                </div>
                            )}
                        </div>
                    )}
                </Section>
            </div>

            <JobFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSaveJob}
                initialData={editingJob}
            />
        </Layout>
    );
}
