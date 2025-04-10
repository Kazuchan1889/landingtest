import { useState } from "react";
import Slider from "react-slick";
import { features } from "../constants";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeatureSection = () => {
<<<<<<< Updated upstream
  const [Show, setShow] = useState({});
  const [Center, setCenter] = useState(1);

  const toggleShow = (index) => {
    setShow((prev) => ({ ...prev, [index]: !prev[index] }));
  };

=======
  const [Show, setShow] = useState(Array(features.length).fill(false));
  const [Center, setCenter] = useState(1);

  const toggleShow = (index) => {
    setShow((prev) => {
      const newShow = [...prev];
      newShow[index] = !newShow[index];
      return newShow;
    });
  };

  useEffect(() => {
    setShow(Array(features.length).fill(false));
  }, [Center]);

>>>>>>> Stashed changes
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    initialSlide: 1,
    adaptiveHeight: true,
    focusOnSelect: true,
    beforeChange: (oldIndex, newIndex) => setCenter(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
<<<<<<< Updated upstream

      <div className="mt-10 lg:mt-20 px-6">
        <Slider {...settings} className="w-full max-w-[1000px] mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="px-4"
              variants={fadeInUp}
              animate={{
                scale: Center === index ? 1.3 : 0.9,
                transition: { duration: 0.5 },
              }}
            >
              <div className="flex flex-col overflow-hidden items-center text-center bg-neutral-900 ps-5 pe-5 pt-20 pb-20 min-h-[400px] rounded-lg shadow-lg">
                <div className="h-14 w-14 flex justify-center items-center bg-red-700 text-white rounded-full mb-4">
                  {feature.icon}
                </div>
                <h5 className="text-l mb-4">{feature.text}</h5>
                <p className="text-sm text-neutral-500">
                  {Show[index]
                    ? feature.description
                    : `${feature.description.slice(200)}`}
=======
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
>>>>>>> Stashed changes
                </p>
                <button
                  onClick={() => toggleShow(index)}
                  className="mt-4 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  {Show[index] ? "Show Less" : "Show More"}
                </button>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default FeatureSection;
