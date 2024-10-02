import React, { useState } from "react";
import Photos from "./Photos";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    "https://images.unsplash.com/photo-1527718641255-324f8e2d0421?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VEVFU3xlbnwwfDF8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1512168029465-4efe057c7b9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRFRVN8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1527181467037-80564ba4ac51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFRFRVN8ZW58MHwxfDB8fHww",
    "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1552168212-9ceb61083ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vZGVsJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1564628175829-afb5078c0779?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1vZGVsJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxtb2RlbCUyMG1lbnN8ZW58MHx8MHx8fDA%3D",
  ];

  const handleNext = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % photos.length);
    console.log("clicked");
  };

  const handlePrev = () => {
    setCurrentIndex(
      (previousIndex) => (previousIndex - 1 + photos.length) % photos.length
    );
    console.log("clicked");
  };

  const displayPhotos = () => {
    const secondPhoto = (currentIndex + 1) % photos.length;
    const thirdPhoto = (currentIndex + 2) % photos.length;
    const fourthPhoto = (currentIndex + 3) % photos.length;
    const fifthPhoto = (currentIndex + 4) % photos.length;

    return [
      photos[currentIndex],
      photos[secondPhoto],
      photos[thirdPhoto],
      photos[fourthPhoto],
      photos[fifthPhoto],
    ];
  };

  return (
    <div>
      <div className="mt-[6rem] container mx-auto flex flex-col items-center justify-center">
        <p className="text-3xl font-light font-display mb-4 tracking-wide">
          Everlane On You
        </p>
        <p className="font-openSans font-thin tracking-wider mb-2">
          Share your latest look with #EverlaneOnYou for a chance to be
          featured.
        </p>
        <p className="underline underline-offset-2 font-openSans font-thin tracking-wider mb-4">
          Add Your Photo
        </p>
        <div className="container mx-auto flex items-center justify-center gap-4">
          <button onClick={handlePrev}>
            <FaLessThan />
          </button>
          {displayPhotos().map((photo, index) => (
            <Photos key={index} src={photo} />
          ))}

          <button onClick={handleNext}>
            <FaGreaterThan />
          </button>
        </div>
      </div>
      <hr class="container mx-auto h-px bg-gray-800 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default PhotoGallery;