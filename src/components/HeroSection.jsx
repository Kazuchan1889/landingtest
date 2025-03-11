import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">

      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover blur-md -z-10"
      >
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        We Never Stop Making
        <span className="bg-gradient-to-r from-red-700 to-indigo-400 text-transparent bg-clip-text px-4 py-1 border-2 border-transparent">
          Cool Things
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Shaping the future of technology and Web3 innovation, 
      we are on a mission to break boundaries and create limitless possibilities. 
      With a vision of global expansion, we harness the power of blockchain to build cutting-edge solutions, 
      secure funding, and unlock new revenue models. Our commitment to innovation goes beyond technology—we empower communities, 
      drive engagement through NFTs and the $HEXA token, and redefine the way the world interacts with Web3. 
      The future is here, and we’re building it together.
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
      <div className="flex mt-10 justify-center" id="Doc">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-orange-400 mx-2 my-4"
          
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
