import vision from "../assets/vision_frame.png";
import mission from "../assets/mission_logo.png";
import web3 from "../assets/web3.0.png";
import community from "../assets/community.png";
import globally from "../assets/globally.png";

export default function VisiMisi() {
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
      <div className="relative flex flex-row items-center justify-end w-full h-[130vh] mt-24">
        {/* Right side: mission image */}
        <div className="relative w-[100%] h-[100%]">
          {/* Left side: 3 icons vertical */}
          <div className="flex flex-col justify-center gap-6 z-10">
            <img src={globally} alt="globally" className="w-36" />
            <img src={web3} alt="web3" className="w-36" />
            <img src={community} alt="community" className="w-36" />
          </div>
          <img
            src={mission}
            alt="mission"
            className="absolute right-0 top-0 w-full h-full object-cover translate-x-[35%]"
          />
        </div>
      </div>
    </div>
  );
}
