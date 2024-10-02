import React from "react";

const HeaderCateory = () => {
  return (
    <>
      <div className="flex items-center justify-center my-2 container mx-auto text-sm font-extralight">
        <ul className="li mx-3 my-2">
          <a href="">Holiday Gifting</a>
        </ul>
        <ul className="li mx-3 my-2">
          <a href="">New Arrivals</a>
        </ul>
        <ul className="li mx-3 my-2">
          <a href="">Best-Sellers</a>
        </ul>
        <ul className="li mx-3 my-2">
          <a href="">Clothing</a>
        </ul>
        <ul className="li mx-3 my-2">
          <a href="">Pants & Jeans</a>
        </ul>
        <ul className="li mx-3 my-2">
          <a href="">Tops & Sweaters</a>
        </ul>
        <ul className="li mx-3 my-2">
          <a href="">Outerwear</a>
        </ul>
        <ul className="li mx-3">
          <a href="">Shoes & Bags</a>
        </ul>
        <ul className="li mx-3 text-red-600">
          <a href="">Sale</a>
        </ul>
      </div>
      <hr className="bg-gray-200 "/>
    </>
  );
};

export default HeaderCateory;