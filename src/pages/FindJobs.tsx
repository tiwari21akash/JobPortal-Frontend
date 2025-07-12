

import { useEffect, useState } from "react";
import axios from 'axios';
import JobCard from "../components/JobCard";
import BASE_URL from "../config";

type Job = {
  id: string;
  title: string;
  jobType: string;
  companyName: string;
  skills: string[];
  locations: string[];
  description: string;
  applyLink: string;
};

const FindJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/jobs`);
        if (response.data?.status === "success") {
          setJobs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Jobs</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={{
                id: job.id,
                title: job.title,
                company: job.companyName,
                location: job.locations.join(", "),
                skills: job.skills,
                salary: "Not disclosed",
                jobType: job.jobType,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FindJobs;

