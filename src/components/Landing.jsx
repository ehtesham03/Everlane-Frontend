import React from "react";
import Home from "../assets/Landing.png";

const Landing = () => {
  return (
    <div
      className="w-full bg-cover h-screen bg-no-repeat flex items-center"
      style={{ backgroundImage:` URL(${Home})` }}
    >
      <div className=' text-white flex flex-col items-center justify-center gap-3 ml-[20rem] mt-[5rem] font-display' >
            <h1 className='text-5xl text-center tracking-wider font-thin'>Your Cozy Era</h1>
            <p className='w-[20rem] text-center font-thin tracking-wider text-2xl leading-relaxed'>Get peak comfy-chic <br />
            with new winter essentials.</p>
            <button className="py-2 px-[6rem] text-black bg-white font-thin">SHOP NOW</button>
        </div>
    </div>
  );
};

export default Landing;