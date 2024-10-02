import React from "react";
import CategoryImages from "./CategoryImages";

const ShopByCategory = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-[6rem] container mx-auto">
      <h1 className="text-2xl font-thin font-display">Shop by Category</h1>
      <div className="flex gap-4 mt-6">
        <CategoryImages
          img="https://plus.unsplash.com/premium_photo-1683140435505-afb6f1738d11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8fDA%3D"
          category="SHIRTS"
        />
        <CategoryImages
          img="https://images.unsplash.com/photo-1596633298581-75b50adead0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxkZW5pbSUyMGplYW5zJTIwbWVuc3xlbnwwfDF8MHx8fDA%3D"
          category="DENIM"
        />
        <CategoryImages
          img="https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRFRVN8ZW58MHwxfDB8fHww"
          category="TEES"
        />
        <CategoryImages
          img="https://plus.unsplash.com/premium_photo-1689371953070-10782471db47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fFBBTlRTJTIwc2hvcHBpbmclMjB3ZWJzaXRlfGVufDB8MXwwfHx8MA%3D%3D"
          category="PANTS"
        />
        <CategoryImages
          img="https://images.unsplash.com/photo-1660645073790-ea1903b79a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFNXRUFURVJTfGVufDB8MXwwfHx8MA%3D%3D"
          category="SWEATERS"
        />
        <CategoryImages
          img="https://plus.unsplash.com/premium_photo-1681433594554-f30dcc3d5335?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8T1VURVJXRUFSfGVufDB8MXwwfHx8MA%3D%3D"
          category="OUTERWEAR"
        />
      </div>
    </div>
  );
};

export default ShopByCategory;