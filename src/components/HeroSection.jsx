import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { useRef } from "react";
import video3 from "../assets/video3.mp4";
import { motion, useInView } from "framer-motion";
import logo from "../assets/Hero.png";

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
      {/* coming soon <img className="h-44 w-74 mr-2 -mb-24" src={logo} alt="Logo" />
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-24 text-center tracking-wide">
        Coming
        <span className="bg-gradient-to-r from-red-700 to-indigo-400 text-transparent bg-clip-text px-4 py-1 border-2 border-transparent">
          Soon
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        We Gone Make Somthing Cool :3
      </p>
      <div className="flex justify-center my-10">
          <a
            href="#Price"
            className="bg-gradient-to-r from-red-500 to-indigo-700 py-3 px-4 mx-3 rounded-md"
          >
            Start for free
          </a>
          <a href="#Doc" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a>
        </div> */}
      <img className="h-44 w-74 mr-2 -mb-24" src={logo} alt="Logo" />
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-24 text-center  tracking-wide">
        WE NEVER STOP MAKING
        <span className="bg-gradient-to-r from-red-700 to-indigo-400 text-transparent bg-clip-text px-4 py-1 border-2 border-transparent">
          COOL THINGS
        </span>
      </h1>
      <div className="flex justify-center my-10">
        <a
          href="#visi"
          className="bg-gradient-to-r from-red-500 to-indigo-700 py-3 px-4 mx-3 rounded-md"
        >
          see more
        </a>
      </div>
      {/* <div className="flex mt-10 justify-center" id="Doc">
        <motion.video
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        <motion.video
          ref={ref2}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView2 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div> */}
    </div>
  );
};

export default HeroSection;
