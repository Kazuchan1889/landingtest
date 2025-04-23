import { useState, useEffect } from "react";

import vision from "../assets/vision_frame.png";
import mission from "../assets/mission_logo.png";
import web3 from "../assets/web3.0.png";
import community from "../assets/community.png";
import globally from "../assets/globally.png";

export default function VisiMisi() {
  const items = [
    {
      id: "globally",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda asperiores nesciunt adipisci sint dicta ratione excepturi voluptas tempore sed? Tempore?",
      image: globally,
    },
    {
      id: "web3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda asperiores nesciunt adipisci sint dicta ratione excepturi voluptas tempore sed? Tempore?",
      image: web3,
    },
    {
      id: "community",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda asperiores nesciunt adipisci sint dicta ratione excepturi voluptas tempore sed? Tempore?",
      image: community,
    },
  ];

  const positions = [
    "translate-x-[40%] -translate-y-[75%]", // atas
    "translate-x-[25%] translate-y-[5%]", // tengah
    "translate-x-[40%] translate-y-[85%]", // bawah
  ];

  const [order, setOrder] = useState([0, 1, 2]); // urutan indeks item
  const [fade, setFade] = useState(false); // kontrol fade animasi

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // mulai fade-out

      setTimeout(() => {
        // setelah fade-out, ubah urutan dan fade-in
        setOrder((prev) => [prev[1], prev[2], prev[0]]);
        setFade(false); // aktifkan fade-in
      }, 500); // waktu fade-out (0.5 detik)
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col w-full min-h-screen">
      <div className="flex items-center w-full mt-44">
        {/* Vision Section */}
        <div className="relative w-1/2 h-[50vh] flex items-center justify-start">
          <img
            src={vision}
            alt="Vision"
            className="absolute left-0 w-[100%] z-0 -translate-x-[15%]"
          />
          <div className="absolute top-1/4 left-1/2 transform -translate-x-[95%] z-10 text-white text-center w-full">
            <h3 className="text-4xl font-bold mb-2">Vision</h3>
            <p className="text-xl w-[40%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* Title Section */}
        <div className="w-1/2 flex justify-end pr-10">
          <h3 className="text-white text-4xl font-semibold text-right">
            VISION & MISSION
          </h3>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full h-[50vh] mt-10 flex justify-center items-center">
        <div className="w-[20%]"></div>
        <div className="relative w-[80%] flex justify-center items-center">
          <div className="relative w-[50%] flex items-center justify-center">
            {order.map((itemIndex, posIndex) => {
              const item = items[itemIndex];
              const center = posIndex === 1;
              return (
                <div
                  key={item.id}
                  className={`
                    absolute w-[90%] flex flex-row items-center gap-4 text-white text-sm leading-relaxed z-10
                    transition-all duration-1000 ease-in-out
                    transform ${positions[posIndex]}
                    ${fade ? "opacity-0" : "opacity-100"}
                  `}
                >
                  <p
                    className={`w-2/3 transition-opacity duration-500 ${
                      center ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.text}
                  </p>
                  <img src={item.image} alt={item.id} className="w-1/3" />
                </div>
              );
            })}
          </div>
          <img
            src={mission}
            alt="mission"
            className="absolute translate-x-[40%] z-0"
          />
        </div>
      </div>
    </div>
  );
}
