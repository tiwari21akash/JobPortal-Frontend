import React from "react";

interface LearningTopicCardProps {
  title: string;
  description: string;
  image: string;
}

const LearningTopicCard: React.FC<LearningTopicCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200">
      <img src={image} alt={title} className="w-16 h-16 mb-4 object-contain" />
      <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default LearningTopicCard;
