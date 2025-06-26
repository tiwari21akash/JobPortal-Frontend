import { Link } from "react-router-dom";

interface JobCategoryCardProps {
  title: string;
  description: string;
  icon?: string;
}

const JobCategoryCard: React.FC<JobCategoryCardProps> = ({ title, description, icon }) => {
  return (
    <Link
      to="/find-jobs"
      className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 text-center"
    >
      <div className="text-5xl mb-4">{icon || "💼"}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
};

export default JobCategoryCard;
