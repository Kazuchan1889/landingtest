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
        VirtualR build tools
        <span className="bg-gradient-to-r from-red-700 to-indigo-400 text-transparent bg-clip-text px-4 py-1 border-2 border-transparent">
          for Tunners
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
