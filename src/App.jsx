import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
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
      <div className="max-w-7xl mx-auto pt-20 px-6 overflow-x-hidden">
        <HeroSection setScroll={setScroll} />
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
