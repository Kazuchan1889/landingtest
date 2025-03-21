import { features } from "../constants";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeatureSection = () => {
  return (
    <motion.div 
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="text-center" id="Feature" variants={fadeInUp}>
        <span className="bg-neutral-900 text-red-700 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          project
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Our Project{" "}
          <span className="bg-gradient-to-r from-red-500 to-indigo-800 text-transparent bg-clip-text">
             Idea
          </span>
        </h2>
      </motion.div>
      <div className="flex flex-wrap mt-10 lg:mt-20" id="Feature">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="w-full sm:w-1/2 lg:w-1/3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-red-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeatureSection;
