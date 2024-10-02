import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Photos = (props) => {
  const { src } = props;
  console.log("--------", props);
  return (
    <div className="relative">
      <img
        className="w-[17rem] h-[20rem] object-cover  z-0"
        src={src}
        alt=""
      />
      <div className="text-2xl absolute bg-white rounded-full  border-1 p-1 top-3 right-3 cursor-pointer">
        <IoCartOutline />
      </div>
    </div>
  );
};

export default Photos;