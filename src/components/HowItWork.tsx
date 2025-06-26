const steps = [
  {
    title: "Search Jobs",
    description: "Find jobs that match your skills and interests.",
    icon: "🔍",
  },
  {
    title: "Apply",
    description: "Apply for Job and get selected.",
    icon: "📝", // You can use a real image or SVG if needed
  },
  {
    title: "Get Hired",
    description: "Land your dream job with top companies.",
    icon: "🎯",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white text-center py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-gray-700">
            <div className="text-6xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
