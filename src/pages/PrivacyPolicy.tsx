import React, { useState } from 'react';


const policySections = [
  {
    title: 'Your Data is Safe',
    content: 'We use strong security measures to keep your information protected. Your data is never sold to third parties.'
  },
  {
    title: 'How We Use Your Info',
    content: 'We only use your details to improve your experience, help you find jobs, and send you important updates.'
  },
  {
    title: 'You’re in Control',
    content: 'You can view, update, or delete your information anytime. Just contact us if you need help.'
  }
];

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-6">Your privacy is important to us. We are committed to protecting your personal information and being transparent about how we use it.</p>
      <div className="space-y-4">
        {policySections.map((section, idx) => (
          <div key={idx} className="border rounded shadow-sm bg-white">
            <button
              className="w-full flex justify-between items-center p-4 focus:outline-none transition-colors duration-200 hover:bg-gray-100"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-lg font-medium text-left">{section.title}</span>
              <span className={`ml-4 text-2xl transform transition-transform duration-200 ${openIndex === idx ? 'rotate-45 text-yellow-500' : 'rotate-0 text-gray-500'}`}>+</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 bg-gray-50 ${openIndex === idx ? 'max-h-40 p-4' : 'max-h-0 p-0'}`}
            >
              <p className="text-gray-700 text-base">{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
