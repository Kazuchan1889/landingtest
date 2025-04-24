import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { useRef } from "react";
import video3 from "../assets/video3.mp4";
import { motion, useInView } from "framer-motion";
import logo from "../assets/Hero.png";
import { Link } from "react-scroll";

const HeroSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 min-h-[70vh]">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover blur-sm -z-10"
      >
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animasi slide-in untuk logo */}
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-44 w-74 mr-2 -mb-24"
        src={logo}
        alt="Logo"
      />

      {/* Animasi slide-in untuk heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-4xl sm:text-6xl lg:text-7xl mt-24 text-center tracking-wide"
      >
        WE NEVER STOP MAKING
        <span className="bg-gradient-to-r from-red-700 to-indigo-400 text-transparent bg-clip-text px-4 py-1 border-2 border-transparent">
          COOL THINGS
        </span>
      </motion.h1>
      <motion.div className="flex justify-center my-10">
        <a
          href="#visi"
          className="bg-gradient-to-r from-red-500 to-indigo-700 py-3 px-4 mx-3 rounded-md"
        >
          see more
        </a>
      </motion.div>
    </div>
  );
};

export default HeroSection;
