import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Doctors from "./pages/Doctors";
import DoctorDetail from "./pages/DoctorDetail";
import Hospitals from "./pages/Hospitals";
import HospitalDetail from "./pages/HospitalDetail";
import Specialities from "./pages/Specialities";
import SpecialityDetail from "./pages/SpecialityDetail";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Departments from "./pages/Departments";
import Appointment from "./pages/Appointment";
import Emergency from "./pages/Emergency";
import AppointmentPopup from "./components/AppointmentPopup";
import FreeConsultation from "./pages/FreeConsultation";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import PremiumLoader from "./components/PremiumLoader";
import FloatingContact from "./components/FloatingContact";

const App = () => {
  const location = useLocation();
  const isLoaderPage = location.pathname === "/loader";

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/10 selection:text-primary scroll-smooth bg-white">
      {/* Sticky Navbar */}
      {!isLoaderPage && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loader" element={<PremiumLoader />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/services" element={<Services />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorDetail />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospital/:id" element={<HospitalDetail />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/speciality/:id" element={<SpecialityDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Professional Institutional Footer */}
      {!isLoaderPage && <Footer />}

      {/* Global Scroll to Top Button */}
      {!isLoaderPage && <ScrollToTop />}
      {!isLoaderPage && <FloatingContact />}
      {!isLoaderPage && <AppointmentPopup />}
    </div>
  );
};

export default App;
