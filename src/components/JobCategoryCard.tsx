import { Link } from "react-router-dom";

import React from "react";

interface JobCategoryCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const JobCategoryCard: React.FC<JobCategoryCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <Link
      to="/find-jobs"
      className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 text-center"
      onClick={onClick}
    >
      <div className="text-5xl mb-4">{icon || "💼"}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
};

export default JobCategoryCard;
