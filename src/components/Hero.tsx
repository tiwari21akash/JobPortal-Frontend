
import { useNavigate } from 'react-router-dom';


export default function Hero() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/find-jobs');
  };

  return (
    <section className="bg-gray-800 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        Find your <span className="text-yellow-400">dream job</span> with us
      </h1>
      <p className="mt-6 text-lg text-gray-300">
        Good life begins with a good company. Start exploring thousands of jobs in one place.
      </p>
      <div className="mt-10 flex justify-center">
        <button
          className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-yellow-500 transition"
          onClick={handleExplore}
        >
          Explore Jobs
        </button>
      </div>
    </section>
  );
}
  