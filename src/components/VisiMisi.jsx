import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vision from "../assets/vision_frame.png";
import mission from "../assets/mission_logo.png";
import web3 from "../assets/web3.0.png";
import community from "../assets/community.png";
import globally from "../assets/globally.png";
import emblem from "../assets/logo-emblem.png";

export default function VisiMisi() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000); // ganti item tiap 3 detik
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      id: "globally",
      text: "Bring HBM's tech solutions to international markets.",
      image: globally,
    },
    {
      id: "web3",
      text: "Build blockchain-powered services, secure funding, and create new revenue models.",
      image: web3,
    },
    {
      id: "community",
      text: "Engage Web3 users via NFTs and $HEXA token.",
      image: community,
    },
  ];

  const positions = [
    "translate-x-[40%] -translate-y-[75%]",
    "translate-x-[20%] translate-y-[5%]",
    "translate-x-[40%] translate-y-[85%]",
  ];

  const [order, setOrder] = useState([0, 1, 2]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setOrder((prev) => [prev[1], prev[2], prev[0]]);
        setFade(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="visi"
      className="flex flex-col items-center w-full min-h-screen p-4"
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Vision Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center w-full mt-10 gap-6 lg:gap-0">
        <motion.div
          className="relative w-[100%] lg:w-1/2 h-[50vh] flex items-center justify-center lg:justify-start"
          variants={fadeRight}
        >
          <img
            src={vision}
            alt="Vision"
            className="hidden lg:block absolute w-[200%] lg:w-[150%] z-0 translate-x-[5%] translate-y-[5%] lg:-translate-x-[40%] lg:mt-40"
          />

          {/* Teks di dalam gambar untuk < lg, normal position untuk lg+ */}
          <div
            id="visi"
            className="
      absolute 
      top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 
      z-10 text-white text-center 
      px-7 w-[90%]
      lg:static lg:text-left lg:px-0 lg:mt-32 lg:translate-x-0 lg:translate-y-0
    "
          >
            <h3 className="text-xl xl:text-3xl font-bold mb-2 lg:-translate-x-[10%]">
              Vision
            </h3>
            <p className="xl:text-lg lg:text-sm lg:w-[40%] w-full text-xs lg:mx-0 lg:-translate-x-[35%]">
              To be a global leader in technology and web3 innovation, creating
              groundbreaking solutions that redefine the future. No limits, just{" "}
              <span className="font-bold">endless possibilities</span>.
            </p>
          </div>
        </motion.div>

        {/* Title Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center pr-0 lg:pr-10 gap-3"
          variants={fadeLeft}
        >
          <h3 className="text-white text-3xl lg:text-5xl font-semibold">
            VISION
          </h3>
          <img src={emblem} alt="emblem" className="w-[15%] lg:w-[6%]" />
          <h3 className="text-white text-3xl lg:text-5xl font-semibold">
            MISSION
          </h3>
        </motion.div>
      </div>

      {/* Mission Section */}
      <motion.div
        className="w-full h-[50vh] flex flex-col lg:flex-row items-center justify-center relative"
        variants={fadeUp}
      >
        <div className="hidden lg:block w-[20%]"></div>

        <div className="relative w-full lg:w-[80%] flex justify-center items-center">
          <div className="relative w-[80%] lg:w-[50%] flex items-center justify-center">
            {isLargeScreen ? (
              // LG+: Animated rotation
              order.map((itemIndex, posIndex) => {
                const item = items[itemIndex];
                const center = posIndex === 1;
                return (
                  <div
                    key={item.id}
                    className={`
                absolute w-full flex flex-row items-center gap-3 text-white leading-relaxed z-10
                transition-all duration-1000 ease-in-out transform
                ${positions[posIndex]} ${fade ? "opacity-0" : "opacity-100"}
              `}
                  >
                    <p
                      className={`text-center lg:text-left px-4 lg:w-2/3 lg:text-lg transition-opacity duration-500 ${
                        center ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.text}
                    </p>
                    <img
                      src={item.image}
                      alt={item.id}
                      className="lg:w-1/3 w-1/2"
                    />
                  </div>
                );
              })
            ) : (
              <div className="w-full flex flex-col items-center justify-center relative">
                {/* Mission Title (mobile only) */}
                {!isLargeScreen && (
                  <div className="text-white text-center text-xl font-semibold mb-4">
                    Mission
                  </div>
                )}

                {/* Carousel */}
                <div className="flex justify-center items-center w-full">
                  <button
                    onClick={() =>
                      setCurrentIndex(
                        (prev) => (prev - 1 + items.length) % items.length
                      )
                    }
                    className="text-white px-2 text-2xl"
                    aria-label="Previous"
                  >
                    ‹
                  </button>

                  <div className="flex flex-col items-center text-white w-[80%] max-w-xs bg-black bg-opacity-50 rounded-lg p-4 shadow-lg transition-all duration-500">
                    <img
                      src={items[currentIndex].image}
                      alt={items[currentIndex].id}
                      className="w-1/2 mb-2"
                    />
                    <p className="text-center text-sm">
                      {items[currentIndex].text}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setCurrentIndex((prev) => (prev + 1) % items.length)
                    }
                    className="text-white px-2 text-2xl"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </div>

                {/* Dot indicators */}
                <div className="flex gap-2 mt-3">
                  {items.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentIndex === i ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Background mission image */}
          {isLargeScreen && (
            <img
              src={mission}
              alt="mission"
              className="absolute translate-x-[40%] z-0"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
