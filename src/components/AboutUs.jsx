import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const AboutUs = () => {
  return (
    <motion.div
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="text-center" id="AboutUs" variants={fadeInUp}>
        <div className="flex justify-center items-center text-3xl sm:text-5xl lg:text-6xl tracking-wide">
          <h2 className=" mt-10 lg:mt-20">Vision</h2>
          <img className=" mt-10 lg:mt-20 " src={logo} alt="" />
          <h2 className=" mt-10 lg:mt-20 ">Mission</h2>
        </div>
      </motion.div>
      <div className="flex mt-10">
        <motion.div
          className="pt-12 w-full lg:w-1/2"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="mt-1 mb-2 font-semibold text-3xl">Vision</h2>
          <p className="pe-20 text-md text-neutral-100">
            To be a global leader in technology and Web3 innovation, creating
            groundbreaking solutions that redefine the future. No limits, just
            <span className="font-semibold"> endless possibilities.</span>
          </p>
        </motion.div>
        <motion.div
          className="pt-12 w-full lg:w-1/2 flex flex-col justify-end items-end"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={logo} alt="" />
          <h5 className="mt-1 mb-2 text-xl">Mission</h5>
          <p className="text-md text-neutral-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
            dicta!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
