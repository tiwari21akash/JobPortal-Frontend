import JobCard from "../components/JobCard";
import { useJobsStore } from "@/store/useJobsStore";


const FindJobs = () => {
  const jobs = useJobsStore((state) => state.jobs);

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
              // applyLink: job.applyLink
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FindJobs;

