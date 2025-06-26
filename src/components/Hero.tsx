export default function Hero() {
    return (
      <section className="bg-gray-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Find your <span className="text-yellow-400">dream job</span> with us
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Good life begins with a good company. Start exploring thousands of jobs in one place.
        </p>
  
        <div className="mt-8 flex justify-center">
          <input 
            type="text" 
            placeholder="Job Title (eg. Software Engineer)" 
            className="bg-white-400 p-3 w-64 rounded-l-lg focus:outline-none text-black bg-white"
          />
          <button className="bg-yellow-400 p-3 rounded-r-lg hover:bg-yellow-500">
            🔍
          </button>
            </div>
        </section>
    );
  }
  