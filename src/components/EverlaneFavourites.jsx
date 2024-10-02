import React, { useEffect, useState } from "react";
import EverlaneFavouritesImages from "./EverlaneFavouritesImages";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const EverlaneFavourites = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const images = [
    {
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      type: "The Waffle Long-Sleeve Crew",
      price: "$60",
      brand: "Bone",
    },
    {
      img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      type: "The Bomber Jacket | Uniform",
      price: "$143",
      brand: "Nike",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      type: "The Slim 4-Way Stretch Organic Jean | Uniform",
      price: "$69",
      brand: "Adidas",
    },
    {
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      type: "Jacket",
      price: "$136",
      brand: "Puma",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664202526475-8f43ee70166d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      type: "Sweater",
      price: "$76",
      brand: "Armani",
    },
    {
      img: "https://images.unsplash.com/photo-1541840031508-326b77c9a17e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      type: "The Waffle Long-Sleeve Crew",
      price: "$97",
      brand: "Levi",
    },
  ];

  const displayImages = () => {
    const first = (currentIndex - 2 + images.length) % images.length;
    const second = (currentIndex - 1 + images.length) % images.length;
    const next = (currentIndex + 1) % images.length;

    return [images[first], images[second], images[currentIndex], images[next]];
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className=" mx-auto relative flex flex-col items-center  justify-center h-screen">
      <h1 className="text-4xl font-display font-light  tracking-wide mb-[1rem]">
        Everlane Favorites
      </h1>
      <p className="mb-[2rem] text-l font-normal font-openSans tracking-wide">
        Beautifully Functional. Purposefully Designed. Consciously Crafted.
      </p>
      <div className=" flex items-center justify-center gap-2">
        <button className="mb-[5rem] mr-[2rem]" onClick={handlePrev}>
          <FaLessThan />
        </button>
        <div className="flex gap-2 items-center justify-center container">
          {displayImages().map((card, index) => (
            <EverlaneFavouritesImages key={index} img={card.img} index={index} price={card.price} brand={card.brand} type = {card.type}  />
          ))}
        </div>

        <button className="mb-[5rem] ml-[2rem]" onClick={handleNext}>
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
};

export default EverlaneFavourites;