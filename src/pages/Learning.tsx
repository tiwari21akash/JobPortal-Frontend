import React, { useEffect, useState } from "react";
import LearningTopicCard from "../components/LearningTopicCard";

interface Topic {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Learning: React.FC = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    fetch("/data/learningTopics.json")
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);

  return (
  <div className="bg-gray-100 py-16 px-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Learning Topics</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <LearningTopicCard
            key={topic.id}
            title={topic.title}
            description={topic.description}
            image={topic.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Learning;
