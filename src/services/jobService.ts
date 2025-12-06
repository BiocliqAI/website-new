import { db } from '../firebase/config';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
    orderBy
} from 'firebase/firestore';

export interface Job {
    id?: string;
    title: string;
    department: string;
    experience: string;
    location: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    education?: string[];
    preferences?: string[];
    isActive: boolean;
    createdAt: any;
}

const JOBS_COLLECTION = 'jobs';

export const jobService = {
    // Get all active jobs (for public Careers page)
    getActiveJobs: async () => {
        const q = query(
            collection(db, JOBS_COLLECTION),
            where('isActive', '==', true),
            orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Job));
    },

    // Get all jobs (for Admin Dashboard)
    getAllJobs: async () => {
        const q = query(
            collection(db, JOBS_COLLECTION),
            orderBy('createdAt', 'desc')
        );
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Job));
    },

    // Add a new job
    addJob: async (job: Omit<Job, 'id' | 'createdAt'>) => {
        return await addDoc(collection(db, JOBS_COLLECTION), {
            ...job,
            createdAt: new Date(),
            isActive: true // Default to active
        });
    },

    // Update an existing job
    updateJob: async (id: string, job: Partial<Job>) => {
        const jobRef = doc(db, JOBS_COLLECTION, id);
        return await updateDoc(jobRef, job);
    },

    // Delete a job
    deleteJob: async (id: string) => {
        const jobRef = doc(db, JOBS_COLLECTION, id);
        return await deleteDoc(jobRef);
    },

    // Toggle job status
    toggleJobStatus: async (id: string, isActive: boolean) => {
        const jobRef = doc(db, JOBS_COLLECTION, id);
        return await updateDoc(jobRef, { isActive });
    }
};
