import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center my-1 container m-auto font-extralight text-sm">
        <div>
          <ul className="flex">
            <li className="m-2 hover:underline hover:underline-offset-8">
              <a href="#">Women</a>
            </li>
            <li className="m-2 hover:underline hover:underline-offset-8">
              <a href="#">Men</a>
            </li>
            <li className="m-2 hover:underline hover:underline-offset-8">
              <a href="#">About</a>
            </li>
            <li className="m-2 hover:underline hover:underline-offset-8">
              <a href="#">Everworld Stories</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-xl tracking-widest mr-[6rem]">EVERLANE</h1>
        </div>
        <div>
          <ul className="flex">
            <li className="m-2">
              <a href="#">
                <HiMagnifyingGlass />
              </a>
            </li>
            <li className="m-2">
              <a href="#">
                <CiUser />
              </a>
            </li>
            <li className="m-2">
              <a href="#">
                <PiShoppingCartSimple />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="bg-gray-200 " />
    </div>
  );
};

export default Navbar;