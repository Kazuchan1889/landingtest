import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);
  
  return <span>{displayedText}</span>;
};

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide" id="Test">
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What People are Saying
      </motion.h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin shadow-lg">
              <p className="text-neutral-300">
                <Typewriter text={testimonial.text} />
              </p>
              <div className="flex mt-8 items-start">
                <motion.img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                />
                <div>
                  <h6 className="text-lg font-bold">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
