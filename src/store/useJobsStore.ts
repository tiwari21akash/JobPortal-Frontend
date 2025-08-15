import type { Job } from '@/lib/types';
import { create } from 'zustand'

type Store = {
    jobs: Job[];
    setJobs: (jobs: Job[]) => void;
    getJobById: (id: string) => Job | undefined;
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
}

export const useJobsStore = create<Store>()((set, get) => ({
    jobs: [],
    setJobs: (jobs) => set({ jobs }),
    getJobById: (id) => {
        const { jobs } = get();
        return jobs.find(job => job.id === id);
    },
    selectedCategory: null,
    setSelectedCategory: (category) => set({ selectedCategory: category }),
}))
