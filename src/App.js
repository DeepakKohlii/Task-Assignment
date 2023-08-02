import React from "react";
import BannerCarousel from "./BannerCarousel";
import bannersData from "./banners.json";

const App = () => {
  return (
    <div>
      <h1>My Website</h1>
      <BannerCarousel banners={bannersData} />
    </div>
  );
};

export default App;
