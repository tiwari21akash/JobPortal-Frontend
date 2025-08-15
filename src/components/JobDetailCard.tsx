import type { Job } from "@/lib/types";
import { Link } from "react-router-dom";
type JobDetailCardProps = {
  job: Job
};

const JobDetailCard = ({ job }: JobDetailCardProps) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-all space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4 w-full">
        <h1 className="text-3xl font-bold break-words md:truncate flex-1 min-w-0">{job.title}</h1>
      </div>
      <div>
        <p className="text-lg text-gray-700">{job.companyName}</p>
        <p className="text-sm text-gray-500">{job.locations.join(", ")}</p>
      </div>

      <div className="flex gap-3">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">{job.category}</span>
        <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">{job.jobType}</span>
        {job.salary && (
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">💰 {job.salary}</span>
        )}
      </div>

      <hr />

      <section>
        <h2 className="text-xl font-semibold mb-2">📝 Description</h2>
        <p className="text-gray-800">{job.description}</p>
      </section>

      <hr />

      <section>
        <h2 className="text-xl font-semibold mb-2">🛠️ Responsibilities</h2>
        <p className="text-gray-800">{job.responsibilities}</p>
      </section>

      <hr />

      <section>
        <h2 className="text-xl font-semibold mb-2">🎓 Qualifications</h2>
        <p className="text-gray-800">{job.qualifications}</p>
      </section>

      <hr />

      <section>
        <h2 className="text-xl font-semibold mb-2">💡 Skills</h2>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <hr />

      <div className="flex justify-end items-center">
        <Link
          to="/find-jobs"
          className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition mr-4"
        >
          Back to Jobs
        </Link>
        <a
          href={job.applyLink}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply
        </a>
      </div>
    </div>
  );
};

export default JobDetailCard;
