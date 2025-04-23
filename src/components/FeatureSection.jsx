import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: 1, content: "Project 1" },
  { id: 2, content: "Project 2" },
  { id: 3, content: "Project 3" },
  { id: 4, content: "Project 4" },
  { id: 5, content: "Project 5" },
  { id: 6, content: "Project 6" },
  { id: 7, content: "Project 7" },
  { id: 8, content: "Project 8" },
  { id: 9, content: "Project 9" },
  { id: 10, content: "Project 10" },
  { id: 11, content: "Project 11" },
];

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const getItem = (index) => items[(index + items.length) % items.length];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    // bg-gradient-to-b from-[#420000] to-[#aa0000]
    <div className="w-full flex flex-col items-center justify-center  py-10 px-4 overflow-hidden min-h-screen mt-20">
      <h2 className="text-white text-4xl font-bold mb-8">
        <span className="text-red-600">Our</span> Things
      </h2>

      {viewAll ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full max-h-[720px] overflow-y-auto">
          {items.slice(0, 9).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-[150px] bg-red-700 text-white flex items-center justify-center rounded-[15px] text-lg shadow-lg"
            >
              {item.content}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="relative w-full max-w-6xl h-[420px] flex items-center justify-center overflow-hidden">
          <div className="flex justify-center items-center gap-8 w-full relative">
            {/* Previous */}
            <motion.div
              key={`prev-${current}`}
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block w-[260px] h-[320px] bg-red-600 rounded-[15px] flex items-center justify-center text-white text-2xl md:text-3xl shadow-lg cursor-pointer"
              onClick={() => {
                setDirection(-1); // Geser ke kiri
                setCurrent((prev) => (prev - 1 + items.length) % items.length); // Mengupdate item
              }}
            >
              <div className="flex justify-center items-center h-full w-full">
                {getItem(current - 1).content}
              </div>
            </motion.div>

            {/* Center (Current Item) */}
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.4 }}
              className="w-[400px] md:w-[600px] h-[320px] md:h-[380px] relative overflow-hidden rounded-[15px] bg-red-700 shadow-2xl flex items-center justify-center text-white text-2xl md:text-4xl cursor-pointer"
              onClick={() => {
                setDirection(1); // Geser ke kanan
                setCurrent((prev) => (prev + 1) % items.length); // Mengupdate item
              }}
            >
              <div>{getItem(current).content}</div>
            </motion.div>

            {/* Next */}
            <motion.div
              key={`next-${current}`}
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block w-[260px] h-[320px] bg-red-600 rounded-[15px] flex items-center justify-center text-white text-2xl md:text-3xl shadow-lg cursor-pointer"
              onClick={() => {
                setDirection(1); // Geser ke kanan
                setCurrent((prev) => (prev + 1) % items.length); // Mengupdate item
              }}
            >
              <div className="flex justify-center items-center h-full w-full">
                {getItem(current + 1).content}
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-4 rounded-full text-white text-2xl"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-4 rounded-full text-white text-2xl"
          >
            ›
          </button>
        </div>
      )}

      {/* View All Button */}
      <button
        onClick={() => setViewAll((prev) => !prev)}
        className="mt-8 px-6 py-2 bg-white text-red-600 font-semibold rounded-full shadow hover:bg-red-100 transition"
      >
        {viewAll ? "Back to Carousel" : "View All"}
      </button>
    </div>
  );
}
