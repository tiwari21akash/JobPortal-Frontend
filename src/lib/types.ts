export type Job = {
    id: string;
    title: string;
    jobType: string;
    companyName: string;
    skills: string[];
    locations: string[];
    description: string;
    applyLink: string;
    category?: string;
    responsibilities?: string;
    qualifications?: string;
};