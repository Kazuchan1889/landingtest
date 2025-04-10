import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import { useEffect, useState } from "react";

const App = () => {
  const [Scroll, setScroll] = useState(false);

  useEffect(() => {
    if (!Scroll) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [Scroll]);

  return (
    <>
      <Navbar />
<<<<<<< Updated upstream
      <div className="max-w-7xl mx-auto pt-20 px-6 overflow-x-hidden">
        <HeroSection setScroll={setScroll} />
=======
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <AboutUs />
>>>>>>> Stashed changes
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
