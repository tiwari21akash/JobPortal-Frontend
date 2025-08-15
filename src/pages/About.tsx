
import React from 'react';

const About: React.FC = () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-8 gap-8">
            <div className="flex-1 flex flex-col justify-center items-start">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">ABOUT US</h1>
                <ul className="list-disc pl-5 text-lg text-gray-700 mb-6 space-y-2">
                    <li>Find top tech jobs from leading companies</li>
                    <li>Access curated learning resources</li>
                    <li>Grow your skills and career</li>
                    <li>Receive personalized job recommendations</li>
                    <li>Get guidance for every step of your journey</li>
                </ul>
                <div className="px-6 py-2 rounded-full bg-yellow-400 text-gray-900 font-semibold shadow text-center select-none cursor-default">
                    Empowering Your Tech Career
                </div>
                </div>
            <div className="flex-1 flex justify-center items-center">
                {/* Replace src with your own SVG or PNG illustration */}
                <div className="rounded-2xl border-4 border-yellow-400 p-2 bg-white">
                    <img src="/src/assets/about-team.png" alt="Team" className="w-full max-w-xs md:max-w-sm rounded-xl" />
                </div>
            </div>
        </div>
    </div>
);

export default About;
