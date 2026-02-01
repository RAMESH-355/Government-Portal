import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/HomeMenuCards";
import { Routes, Route } from "react-router-dom";
import Resume from "../src/pages/Resume";
import Registration from "../src/pages/Registration";
import SkillsAssessed from "../src/pages/SkillsAssessed";
import JobOpportunities from "../src/pages/JobOpportunities";
import EmployerZone from "../src/pages/EmployerZone";
import Services from "../src/pages/Services";
import SkillDetails from "./components/SkillDetails";
import SkillAssessmentDetails from "./components/SkillAssessmentDetails";
import ServicesPage from "./components/ServicesPage";
import JobOpportunitiesDetails from "./components/JobOpportunitiesDetails";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-14 h-full bg-orange-300">
        <Routes>
          <Route 
            path="/" element={<Home />} 
          />
          <Route 
            path="/home" element={<Home />} 
          />
          <Route 
            path="/resume" element={<Resume />} 
          />
          <Route 
            path="/registration" element={<Registration />} 
          />
          <Route 
            path="/skills" element={<SkillsAssessed />} 
          />
          <Route 
            path="/jobopportunities" element={<JobOpportunities />} 
          />
          <Route 
            path="/employerzone" element={<EmployerZone/>} 
          />
          <Route 
            path="/services" element={<Services />} 
          />
          <Route 
            path="/registration/:sectorId" element={<SkillDetails />}
          />
          <Route
            path="/skills-assessment/:sectorId" element={<SkillAssessmentDetails />}
          />
          <Route
            path="/servicespage" element={<ServicesPage />}
          />
          <Route
            path="/job-opportunities-details/:sectorId" element={<JobOpportunitiesDetails />}
          />
          <Route path="/login/:role" element={<LoginForm />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;

