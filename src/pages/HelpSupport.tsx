import React, { useState } from 'react';


const helpSections = [
  {
    title: 'Check our FAQs',
    content: 'Find quick answers to common questions in our FAQ section. This is the fastest way to resolve most issues.'
  },
  {
    title: 'Contact Support',
    content: 'If you need personalized help, reach out to our support team through the Contact Us page. We are here to assist you.'
  },
  {
    title: 'Response Time',
    content: 'We aim to respond to all inquiries within 24 hours. Your satisfaction is our priority.'
  }
];

const HelpSupport = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Help & Support</h1>
      <p className="mb-6">Need assistance? Our support team is here to help you with any issues or questions you may have about using TechJobCareer.</p>
      <div className="space-y-4">
        {helpSections.map((section, idx) => (
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

export default HelpSupport;
