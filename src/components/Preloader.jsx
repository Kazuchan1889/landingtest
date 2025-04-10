import React from "react";
import preloader from "../assets/preloader.png";
import "../../src/Preloader.css";

function Preloader() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src={preloader} alt="loading..." className="preload w-[10%]" />
    </div>
  );
}

export default Preloader;
