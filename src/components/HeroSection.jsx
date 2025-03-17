import { useRef } from "react";
import main from "../assets/background.mp4";
import { motion, useInView } from "framer-motion";
import arrow from "../assets/arrow.png";

const HeroSection = ({ setScroll }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  return (
    <div className="flex flex-col items-center lg:mt-20">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover blur-sm -z-10"
      >
        <source src={main} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl lg:-mt-10 text-center tracking-wide">
        We Never Stop Making
        <span className="bg-gradient-to-r from-red-700 to-indigo-400 text-transparent bg-clip-text px-4 py-1 border-2 border-transparent">
          Cool Things
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-white max-w-4xl">
        Shaping the future of technology and Web3 innovation, we are on a
        mission to break boundaries and create limitless possibilities. With a
        vision of global expansion, we harness the power of blockchain to build
        cutting-edge solutions, secure funding, and unlock new revenue models.
        Our commitment to innovation goes beyond technology—we empower
        communities, drive engagement through NFTs and the $HEXA token, and
        redefine the way the world interacts with Web3. The future is here, and
        we’re building it together.
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
      </div>
      <a
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("Feature")
            .scrollIntoView({ behavior: "smooth" });
          setScroll(true);
        }}
        className="cursor-pointer hover:scale-110 flex flex-col items-center -mt-2"
      >
        <button>Scroll Down</button>
        <img className="w-5 h-5 animate-bounce" src={arrow} />
      </a>
    </div>
  );
};

export default HeroSection;
