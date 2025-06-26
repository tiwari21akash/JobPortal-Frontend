import { Routes, Route } from "react-router-dom";
import FindJobs from "../pages/FindJobs";
import Home from "../pages/Home";
import ViewJob from "../pages/ViewJob";
import AdminPostJob from '../pages/AdminPostJob';
import AdminJobList from "../pages/AdminJobList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-jobs" element={<FindJobs />} />
      <Route path="/jobs/:jobId" element={<ViewJob />} />
       <Route path="/admin/post-job" element={<AdminPostJob />} />
       <Route path="/admin/jobs" element={<AdminJobList />} />
    </Routes>
  );
};

export default AppRoutes;
