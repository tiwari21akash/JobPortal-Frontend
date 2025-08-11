

import { useEffect, useState } from "react";
import axios from 'axios';
import JobCard from "../components/JobCard";
import BASE_URL from "../config";
import { jobs, type Job } from "@/lib/Jobs";


const FindJobs = () => {

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_URL}/jobs`);
  //       if (response.data?.status === "success") {
  //         setJobs(response.data.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching jobs:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchJobs();
  // }, []);

  return (
    <div className="py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Jobs</h1>
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
                applyLink: job.applyLink
              }}
            />
          ))}
        </div>
    </div>
  );
};

export default FindJobs;

