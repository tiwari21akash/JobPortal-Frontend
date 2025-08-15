import React, { useState } from 'react';


const faqs = [
  {
    question: 'How do I apply for a job?',
    answer: 'Browse available jobs and click on the job you are interested in. Follow the application instructions provided.'
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact us through the Contact Us page.'
  },
  {
    question: 'Is my data safe?',
    answer: 'Yes, we use industry-standard security measures to protect your data and privacy.'
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded shadow-sm bg-white">
            <button
              className="w-full flex justify-between items-center p-4 focus:outline-none transition-colors duration-200 hover:bg-gray-100"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-lg font-medium text-left">{faq.question}</span>
              <span className={`ml-4 text-2xl transform transition-transform duration-200 ${openIndex === idx ? 'rotate-45 text-yellow-500' : 'rotate-0 text-gray-500'}`}>+</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 bg-gray-50 ${openIndex === idx ? 'max-h-40 p-4' : 'max-h-0 p-0'}`}
              style={{}}
            >
              <p className="text-gray-700 text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
