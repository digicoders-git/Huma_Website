// Import Home Sections
import Hero from "../components/home/Hero";
import TrustBadges from "../components/home/TrustBadges";
import AboutSnapshot from "../components/home/AboutSnapshot";
import WhyIndia from "../components/home/WhyIndia";
import Specialities from "../components/home/Specialities";
import Services from "../components/home/Services";
import Journey from "../components/home/Journey";
import USP from "../components/home/USP";
// import Founder from "../components/home/Founder";
import Testimonials from "../components/home/Testimonials";
import Partners from "../components/home/Partners";
import EmergencyContact from "../components/home/EmergencyContact";
import FinalCTA from "../components/home/FinalCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBadges />
      <AboutSnapshot />
      <WhyIndia />
      <Specialities />
      <Services />
      {/* <Journey /> */}
      <USP />
      {/* <Founder /> */}
      <Testimonials />
      {/* <Partners /> */}
      <EmergencyContact />
      <FinalCTA />
    </>
  );
};

export default Home;
