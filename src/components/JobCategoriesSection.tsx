import React from "react";
import JobCategoryCard from "./JobCategoryCard";
import { FaCode, FaDatabase, FaCloud, FaPaintBrush, FaShieldAlt, FaUserTie } from "react-icons/fa";

const categories = [
  {
    title: "Software Jobs",
    description: "Explore frontend, backend, full-stack roles and more.",
    icon: <FaCode className="text-blue-600" />,
  },
  {
    title: "Data Science",
    description: "ML, AI, data analytics, big data jobs.",
    icon: <FaDatabase className="text-purple-600" />,
  },
  {
    title: "DevOps & Cloud",
    description: "Roles in AWS, Docker, Kubernetes and system admin.",
    icon: <FaCloud className="text-indigo-600" />,
  },
  // {
  //   title: "UI/UX Design",
  //   description: "Creative roles in user interface and experience design.",
  //   icon: <FaPaintBrush className="text-pink-600" />,
  // },
//   {
//     title: "Cybersecurity",
//     description: "Protect systems and data in high-demand roles.",
//     icon: <FaShieldAlt className="text-red-600" />,
//   },
//   {
//     title: "Product Management",
//     description: "Bridge tech and business to lead products to success.",
//     icon: <FaUserTie className="text-green-600" />,
//   },
];

const JobCategoriesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Explore Job Categories</h2>
        <p className="text-gray-600 mt-2">Choose a category to start your job search</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {categories.map((cat, index) => (
          <JobCategoryCard
            key={index}
            title={cat.title}
            description={cat.description}
            icon={cat.icon}
            onClick={() => alert(`${cat.title} clicked`)}
          /> 
        ))}
      </div>
    </section>
  );
};

export default JobCategoriesSection;
