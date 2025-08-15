import Navbar from "@/components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import axios from "axios";
import { useJobsStore } from "./store/useJobsStore";

function App() {
  const setJobs = useJobsStore((state) => state.setJobs);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`https://raw.githubusercontent.com/tiwari21akash/JobPortal-Frontend/refs/heads/main/data/jobs.json`);
        console.log("jobs", response.data);
        if (response.data) {
          setJobs(response.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
