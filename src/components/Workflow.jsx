import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import video1 from '../assets/video1.mp4';

const CustomComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.6 } // Play jika 60% terlihat
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="flex flex-row gap-6 p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Bagian kiri: Persegi panjang */}
      <div className="flex-1 flex items-center">
        <motion.div
          className="w-full h-[250px] relative rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F00001] to-[#4E0102] opacity-[60%] rounded-lg"></div>
          <div className="relative z-10 p-6 text-white">
            <h2 className="text-xl font-semibold mb-2">Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut orci nec arcu consequat luctus. Proin vulputate mollis urna non tincidunt.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bagian kanan: Video autoplay tanpa kontrol */}
      <motion.div
        className="w-[512px] h-[512px] rounded-lg overflow-hidden bg-black"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={video1}
          muted
          loop
          playsInline
        />
      </motion.div>
    </motion.div>
  );
};

export default CustomComponent;
