import { useState } from "react";
import axios from "axios";
import BASE_URL from "../config";

const PostJob = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    title: "",
    category: "",
    jobType: "",
    description: "",
    responsibilities: "",
    qualifications: "",
    applyLink: "",
    skills: "",
    locations: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const payload = {
        ...formData,
        skills: formData.skills.split(",").map(skill => skill.trim()),
        locations: formData.locations.split(",").map(loc => loc.trim())
      };

      const response = await axios.post(`${BASE_URL}/jobs`, payload);

      if (response.data?.status === "success") {
        setMessage("✅ Job posted successfully!");
        setFormData({
          companyName: "",
          title: "",
          category: "",
          jobType: "",
          description: "",
          responsibilities: "",
          qualifications: "",
          applyLink: "",
          skills: "",
          locations: ""
        });
      }
    } catch (error) {
      setMessage("❌ Failed to post job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md p-8 rounded-md border border-gray-300 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Post a New Job</h2>
      {message && <p className="text-center mb-4 text-blue-600 font-medium">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Company Name", name: "companyName" },
          { label: "Job Title", name: "title" },
          { label: "Category", name: "category" },
          { label: "Job Type", name: "jobType" },
          { label: "Apply Link", name: "applyLink" },
        ].map(field => (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-1">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={(formData as any)[field.name]}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              required
            />
          </div>
        ))}

        {[
          { label: "Description", name: "description" },
          { label: "Responsibilities", name: "responsibilities" },
          { label: "Qualifications", name: "qualifications" }
        ].map(field => (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-1">{field.label}</label>
            <textarea
              name={field.name}
              value={(formData as any)[field.name]}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded"
              rows={3}
              required
            ></textarea>
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium mb-1">Skills (comma separated)</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Locations (comma separated)</label>
          <input
            type="text"
            name="locations"
            value={formData.locations}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Posting..." : "Post Job"}
        </button>
      </form>
    </div>
  );
};

export default PostJob;