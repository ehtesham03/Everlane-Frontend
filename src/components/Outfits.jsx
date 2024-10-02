import React from "react";

const Outfits = (props) => {
  return (
    <div className="relative">
      <img
        className=" w-[33rem] h-[40rem] object-cover brightness-75"
        src={props.imageLink}
        alt=""
      />
      <div className="absolute top-[17rem] left-[11rem] text-white flex flex-col justify-center items-center">
        <h1 className="font-display font-thin tracking-widest text-3xl">
          {props.headingName}
        </h1>
        <button className="bg-white text-black px-3 py-2 text-xs mt-4 font-display font-thin tracking-wider">
          {props.btnName}
        </button>
      </div>
    </div>
  );
};

export default Outfits;
