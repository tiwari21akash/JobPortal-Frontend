import { Routes, Route } from "react-router-dom";
import FindJobs from "../pages/FindJobs";
import About from "../pages/About";
import Home from "../pages/Home";
import ViewJob from "../pages/ViewJob";
import AdminPostJob from '../pages/AdminPostJob';
import AdminJobList from "../pages/AdminJobList";
import LoginCard from "../components/LoginCard";
import RegisterCard from "../components/RegisterCard";
import ContactUs from "../pages/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import HelpSupport from "../pages/HelpSupport";
import FAQs from "../pages/FAQs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-jobs" element={<FindJobs />} />
      <Route path="/jobs/:jobId" element={<ViewJob />} />
      <Route path="/login" element={<LoginCard />} />
      <Route path="/register" element={<RegisterCard />} />
      <Route path="/admin/post-job" element={<AdminPostJob />} />
      <Route path="/admin/jobs" element={<AdminJobList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/help" element={<HelpSupport />} />
      <Route path="/faqs" element={<FAQs />} />
    </Routes>
  );
};

export default AppRoutes;
