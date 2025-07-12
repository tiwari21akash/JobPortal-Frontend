import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../config";

interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
  company: string;
  active: boolean;
}

const AdminJobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editingJob, setEditingJob] = useState<Job | null>(null);


  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/jobs`);
      setJobs(res.data);
    } catch (error) {
      setJobs([]);
      // Optionally handle error
    }
  };

  const handleToggleActive = async (job: Job) => {
    await axios.patch(`${BASE_URL}/jobs/${job.id}`, { active: !job.active });
    fetchJobs();
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`${BASE_URL}/jobs/${id}`);
    fetchJobs();
  };

  const handleEdit = (job: Job) => {
    setEditingJob(job);
  };

  const handleUpdate = async () => {
    if (editingJob) {
      await axios.put(`${BASE_URL}/jobs/${editingJob.id}`, editingJob);
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
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${job.active ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
              {job.active ? 'Active' : 'Inactive'}
            </span>
            <button
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${job.active ? 'border-green-500 text-green-700 hover:bg-green-50' : 'border-gray-400 text-gray-600 hover:bg-gray-100'}`}
              onClick={() => handleToggleActive(job)}
            >
              {job.active ? 'Set Inactive' : 'Set Active'}
            </button>
          </div>
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
