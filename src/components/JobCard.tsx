import { Link } from "react-router-dom";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  skills: string[];
  jobType: string;
};

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="flex justify-between items-start bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all">
      {/* Left Section */}
      <div className="flex-1 pr-4">
        <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
        <p className="text-gray-600">{job.company} – {job.location}</p>
        <p className="text-green-600 mt-2">💰 {job.salary}</p>
        <span className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 mt-2 rounded-full">
          {job.jobType}
        </span>
        {/* Show only first 3 skills */}
        <div className="mt-3 flex flex-wrap gap-2">
          {job.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section - View Button */}
      <div className="flex-shrink-">
        <Link
          to={`/jobs/${job.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Job
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
