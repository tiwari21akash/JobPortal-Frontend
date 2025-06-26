import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import JobCategoriesSection from "@/components/JobCategoriesSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Hero/>
      <HowItWork/>
      <JobCategoriesSection />
      <TrustedCompanies/>
    </>
  );
};

export default Home;
