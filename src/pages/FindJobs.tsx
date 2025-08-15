import JobCard from "../components/JobCard";
import { useJobsStore } from "@/store/useJobsStore";


const FindJobs = () => {
  const jobs = useJobsStore((state) => state.jobs);
  const selectedCategory = useJobsStore((state) => state.selectedCategory);

  // Map category titles to job types or keywords for filtering
  const categoryMap: Record<string, (job: any) => boolean> = {
    'Software Jobs': (job) => /software|frontend|backend|full[- ]?stack/i.test(job.title),
    'Data Science': (job) => /data|ml|ai|analytics|big data/i.test(job.title),
    'DevOps & Cloud': (job) => /devops|cloud|aws|docker|kubernetes|system admin/i.test(job.title),
  };

  const filteredJobs = selectedCategory && categoryMap[selectedCategory]
    ? jobs.filter(categoryMap[selectedCategory])
    : jobs;

  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Jobs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No jobs found for this category.</div>
        ) : (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={{
                id: job.id,
                title: job.title,
                company: job.companyName,
                location: job.locations.join(", "),
                skills: job.skills,
                salary: job.salary || "Not disclosed",
                jobType: job.jobType,
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FindJobs;

