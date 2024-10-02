import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { FaFlagUsa } from "react-icons/fa";

const Advertisement = () => {
  return (
    <div className="flex bg-black text-white items-center justify-center font-thin text-sm py-1 relative">
      <div className="flex items-center">
        <span>Get early access on launches and offers.</span>
        <span className="mx-2">
          <a href="#" className="font-thin underline">
            Sign Up For Texts
          </a>
        </span>
        <span>
          <a href="#" className="font-thin">
            <HiArrowRight />
          </a>
        </span>
      </div>
      <div className="flex items-center gap-2 right-[3rem] absolute">
        <span>
          <FaFlagUsa />
        </span>
        <span>India</span>
      </div>
    </div>
  );
};

export default Advertisement;