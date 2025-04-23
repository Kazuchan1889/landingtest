import emblem from "../assets/logo-emblem.png";

export default function Quotes() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 py-12 text-white text-center md:text-left">
      <div className="flex flex-col justify-center max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
          WE EMPOWER THE COMMUNITY TO SUPPORT
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          FUNDING. CONNECTIONS. EXIST
        </h1>
        <p className="text-base sm:text-lg mb-2">
          HEXA LAB is open for everyone.
        </p>
        <p className="text-base sm:text-lg">
          Every contribution, big or small, fuels innovation and drives us
          forward.
        </p>
      </div>

      <img
        src={emblem}
        alt="emblem"
        className="w-40 sm:w-60 md:w-[30%] mb-8 md:mt-0 md:ms-10"
      />
    </div>
  );
}
