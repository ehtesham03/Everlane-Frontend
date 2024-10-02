import "./App.css";
import Article from "./components/Article";
import EverlaneFavourites from "./components/EverlaneFavourites";
import Heading from "./components/Heading";
import Landing from "./components/Landing";
import OutfitSection from "./components/OutfitSection";
import PhotoGallery from "./components/PhotoGallery";
import ProgressReport from "./components/ProgressReport";
import Review from "./components/Review";
import ShopByCategory from "./components/ShopByCategory";

function App() {

  return (
    <>
      <Heading/>
      <Landing/>
      <ShopByCategory/>
      <OutfitSection/>
      <ProgressReport/>
      <EverlaneFavourites/>
      <Review/>
      <Article/>
      <PhotoGallery/>
      {/* hello */}
    </>
  );
}

export default App;