import React from "react";
import Outfits from "./Outfits";

const OutfitSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[6rem] container m-auto">
      <div className="flex gap-4">
        <Outfits
          imageLink="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ldyUyMGFycml2YWxzJTIwY2xvdGhlc3xlbnwwfDF8MHx8fDA%3D"
          headingName="New Arrivals"
          btnName="SHOP THE LATEST"
        />
        <Outfits
          imageLink="https://images.unsplash.com/photo-1609306515474-41187c86b38b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGJlc3QlMjBzZWxsZXJzJTIwY2xvdGhlc3xlbnwwfDF8MHx8fDA%3D"
          headingName="Best-Sellers"
          btnName="SHOP YOUR FAVORITES"
        />
        <Outfits
          imageLink="https://images.unsplash.com/photo-1638292858466-4b732d9aef2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhlJTIwSG9saWRheSUyME91dGZpdHxlbnwwfDF8MHx8fDA%3D"
          headingName="The Holiday Outfit"
          btnName="SHOP OCCASION"
        />
      </div>
    </div>
  );
};

export default OutfitSection;