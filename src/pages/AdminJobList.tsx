import React, { useEffect, useState } from "react";
import axios from "axios";

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  company: string;
}

const AdminJobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  const fetchJobs = async () => {
    const res = await axios.get("/api/jobs~");
    setJobs(res.data);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/jobs/${id}`);
    fetchJobs();
  };

  const handleEdit = (job: Job) => {
    setEditingJob(job);
  };

  const handleUpdate = async () => {
    if (editingJob) {
      await axios.put(`/api/jobs/${editingJob.id}`, editingJob);
      setEditingJob(null);
      fetchJobs();
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Job Posts</h2>

      {jobs.map((job) => (
        <div key={job.id} className="border p-4 rounded-lg mb-4 shadow-sm">
          {editingJob?.id === job.id ? (
            <>
              <input
                className="block w-full border p-2 mb-2"
                value={editingJob.title}
                onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
              />
              <textarea
                className="block w-full border p-2 mb-2"
                value={editingJob.description}
                onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })}
              />
              <input
                className="block w-full border p-2 mb-2"
                value={editingJob.location}
                onChange={(e) => setEditingJob({ ...editingJob, location: e.target.value })}
              />
              <input
                className="block w-full border p-2 mb-2"
                value={editingJob.company}
                onChange={(e) => setEditingJob({ ...editingJob, company: e.target.value })}
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={handleUpdate}>
                Save
              </button>
              <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={() => setEditingJob(null)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p>{job.description}</p>
              <p className="text-sm text-gray-600">{job.company} — {job.location}</p>
              <div className="mt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleEdit(job)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(job.id)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminJobList;
