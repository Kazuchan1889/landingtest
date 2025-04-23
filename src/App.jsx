import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VisiMisi from "./components/VisiMisi";
import FeatureSection from "./components/FeatureSection";
import Roadmap from "./components/Roadmap";
import Workflow from "./components/Workflow";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Teams from "./components/Teams";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import Cooming from "./components/Cooming";
import bg from "./assets/bglanding.png";

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
          <div className="pt-20 overflow-x-hidden">
            <HeroSection />

            {/* Full width background section */}
            <div
              style={{ backgroundImage: `url(${bg})` }}
              className="bg-cover bg-top bg-no-repeat w-full"
            >
              <div className="max-w-7xl mx-auto px-6">
                <VisiMisi />
                <FeatureSection />
                <Roadmap />
                <Quotes />
                {/* <Workflow /> */}
                {/* <Pricing /> */}
                <Teams />
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
              <Footer />
            </div>
          </div>
        </>
      )}
      <></>
    </>
  );
};

export default App;
