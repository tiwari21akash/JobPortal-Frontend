import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import JobDetailCard from "../components/JobDetailCard";
import { useJobsStore } from "@/store/useJobsStore";
import type { Job } from "@/lib/types";

const ViewJob = () => {
  const { jobId } = useParams();
  const jobs = useJobsStore((state) => state.jobs);
  const [job, setJob] = useState<Job | null>(null);
  const getJobById = useJobsStore((state) => state.getJobById);

  useEffect(() => {
    if (!jobId) return;
    const job = getJobById(jobId)
    setJob(job ?? null);
  }, [jobId, jobs]);

  // if (loading) return <p className="text-center mt-10 text-gray-500">Loading job details...</p>;

  if (!job) return <p className="text-center mt-10 text-red-500">Job not found.</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <JobDetailCard job={job} />
    </div>
  );
};

export default ViewJob;
