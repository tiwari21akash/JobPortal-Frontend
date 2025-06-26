type JobDetailCardProps = {
  job: {
    id: string;
    title: string;
    category: string;
    jobType: string;
    description: string;
    responsibilities: string;
    qualifications: string;
    applyLink: string;
    companyName: string;
    skills: string[];
    locations: string[];
    createdAt: string;
  };
};

const JobDetailCard = ({ job }: JobDetailCardProps) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-all space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="text-lg text-gray-700">{job.companyName}</p>
        <p className="text-sm text-gray-500">{job.locations.join(", ")}</p>
      </div>

      <div className="flex gap-3">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">{job.category}</span>
        <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">{job.jobType}</span>
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

      <div>
        <a
          href={job.applyLink}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Apply Now
        </a>
      </div>
    </div>
  );
};

export default JobDetailCard;
