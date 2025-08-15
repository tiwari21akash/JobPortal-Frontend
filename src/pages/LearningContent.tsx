
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Topic {
	id: number;
	title: string;
	content: string;
}

const LearningContent: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [topics, setTopics] = useState<Topic[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		fetch("/data/java.json")
			.then((res) => res.json())
			.then((data) => {
				setTopics(data);
				const idx = data.findIndex((t: Topic) => String(t.id) === id);
				setCurrentIndex(idx >= 0 ? idx : 0);
			});
	}, [id]);

	if (!topics.length) {
		return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;
	}

	const handlePrev = () => {
		if (currentIndex > 0) {
			navigate(`/learning/${topics[currentIndex - 1].id}`);
		}
	};

	const handleNext = () => {
		if (currentIndex < topics.length - 1) {
			navigate(`/learning/${topics[currentIndex + 1].id}`);
		}
	};

	return (
		<div className="flex min-h-screen bg-gray-50">
			{/* Sidebar */}
			<aside className="w-64 bg-white border-r flex flex-col py-8 px-4">
				<h2 className="text-lg font-bold mb-4 text-gray-900">System Design</h2>
				<ul>
					{topics.map((topic, idx) => (
						<li
							key={topic.id}
							className={`mb-1 rounded-md cursor-pointer px-3 py-2 text-base font-medium transition-all ${
								idx === currentIndex
									? "bg-yellow-400 text-gray-900 shadow"
									: "text-gray-700 hover:bg-yellow-100"
							}`}
							onClick={() => navigate(`/learning/${topic.id}`)}
						>
							{topic.title}
						</li>
					))}
				</ul>
			</aside>
			{/* Content Area */}
			<main className="flex-1 px-10 py-8 relative">
				<h1 className="text-3xl font-bold mb-4 text-gray-900">{topics[currentIndex].title}</h1>
				<div className="text-base leading-relaxed whitespace-pre-line mb-8 text-gray-800 max-w-3xl">
					{topics[currentIndex].content}
				</div>
				{/* Navigation Buttons: Responsive below content */}
				<div className="w-full flex justify-between items-center gap-4 mt-4 px-2 max-w-3xl">
					<button
						onClick={handlePrev}
						disabled={currentIndex === 0}
						className={
							'px-5 py-1.5 rounded-full border-2 font-medium text-sm transition-all shadow ' +
							(currentIndex === 0
								? 'border-yellow-200 text-yellow-200 bg-white cursor-not-allowed'
								: 'border-yellow-400 text-yellow-400 bg-white hover:bg-yellow-400 hover:text-gray-900')
						}
					>
						Previous
					</button>
					<button
						onClick={handleNext}
						disabled={currentIndex === topics.length - 1}
						className={
							'px-5 py-1.5 rounded-full border-2 font-medium text-sm transition-all shadow ' +
							(currentIndex === topics.length - 1
								? 'border-yellow-200 text-yellow-200 bg-white cursor-not-allowed'
								: 'border-yellow-400 text-yellow-400 bg-white hover:bg-yellow-400 hover:text-gray-900')
						}
					>
						Next &rarr;
					</button>
				</div>
			</main>
		</div>
	);
}

export default LearningContent;
