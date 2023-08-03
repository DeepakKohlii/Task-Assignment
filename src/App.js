import React from "react";
import BannerCarousel from "./BannerCarousel";
import bannersData from "./banners.json";
import SectionsContainer from './SectionsContainer';



const App = () => {
  return (
    <div className="bg-[#121317]">
       <header class="bg-gradient-to-r from-blue-900 to-purple-700 text-white text-center py-8">
        <h1 class="text-4xl font-thin uppercase tracking-wider font-custom ">
          Dashboard
        </h1>
    </header>
      <BannerCarousel banners={bannersData} />
      <SectionsContainer />
    </div>
  );
};

export default App;
