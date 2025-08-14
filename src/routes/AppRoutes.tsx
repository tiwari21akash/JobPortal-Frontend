import { Routes, Route } from "react-router-dom";
import FindJobs from "../pages/FindJobs";
import Learning from "../pages/Learning";
import Home from "../pages/Home";
import ViewJob from "../pages/ViewJob";
import AdminPostJob from '../pages/AdminPostJob';
import AdminJobList from "../pages/AdminJobList";
import LoginCard from "../components/LoginCard";
import RegisterCard from "../components/RegisterCard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/learning" element={<Learning />} />
      <Route path="/login" element={<LoginCard />} />
      <Route path="/register" element={<RegisterCard />} />
      <Route path="/jobs/:jobId" element={<ViewJob />} />
       <Route path="/admin/post-job" element={<AdminPostJob />} />
       <Route path="/admin/jobs" element={<AdminJobList />} />
    </Routes>
  );
};

export default AppRoutes;
