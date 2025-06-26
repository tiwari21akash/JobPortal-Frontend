import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../config";
import JobDetailCard from "../components/JobDetailCard";

const ViewJob = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/jobs/${jobId}`);
        if (response.data?.status === "success") {
          setJob(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading job details...</p>;

  if (!job) return <p className="text-center mt-10 text-red-500">Job not found.</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <JobDetailCard job={job} />
    </div>
  );
};

export default ViewJob;
