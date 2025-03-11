import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { motion } from "framer-motion";

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Workflow = () => {
  return (
    <motion.div 
      className="mt-20" 
      id="Work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide"
        variants={slideInLeft}
      >
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-red-500 to-indigo-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </motion.h2>
      <div className="flex flex-wrap justify-center" id="Work">
        <motion.div 
          className="p-2 w-full lg:w-1/2"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={codeImg} alt="Coding" />
        </motion.div>
        <motion.div 
          className="pt-12 w-full lg:w-1/2"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {checklistItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex mb-12"
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Workflow;
