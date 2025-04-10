import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { motion } from "framer-motion";

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: index * 0.2 },
  }),
};

const Pricing = () => {
  return (
    <motion.div 
      className="mt-20" 
      id="Price"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Pricing
      </motion.h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <motion.div 
            key={index} 
            className="w-full sm:w-1/2 lg:w-1/3 p-2"
            custom={index}
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-red-500 to-indigo-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Pricing;