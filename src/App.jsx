import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <div className="max-w-7xl mx-auto pt-20 px-6 overflow-x-hidden">
            <HeroSection />
            <FeatureSection />
            <Workflow />
            <Pricing />
            <Testimonials />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
