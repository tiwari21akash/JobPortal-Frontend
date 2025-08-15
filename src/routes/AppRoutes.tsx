import { Routes, Route } from "react-router-dom";
import FindJobs from "../pages/FindJobs";
import About from "../pages/About";
import Learning from "../pages/Learning";
import Home from "../pages/Home";
import ViewJob from "../pages/ViewJob";
import AdminPostJob from '../pages/AdminPostJob';
import AdminJobList from "../pages/AdminJobList";
import LoginCard from "../components/LoginCard";
import RegisterCard from "../components/RegisterCard";
import LearningContent from "../pages/LearningContent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-jobs" element={<FindJobs />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/learning/:id" element={<LearningContent />} />
      <Route path="/login" element={<LoginCard />} />
      <Route path="/register" element={<RegisterCard />} />
      <Route path="/jobs/:jobId" element={<ViewJob />} />
      <Route path="/admin/post-job" element={<AdminPostJob />} />
      <Route path="/admin/jobs" element={<AdminJobList />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
