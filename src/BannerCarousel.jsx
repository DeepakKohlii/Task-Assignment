import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannersData from "./banners.json";

const BannerCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
    >
      {bannersData.map((banner) => (
        <div
          key={banner.id}
          className="relative h-64 md:h-80 flex justify-center items-center bg-blue-500"
        >
          <img
            src={`/images/flower${banner.id_no}.jpg`}
            alt={`Banner ${banner.id_no}`}
            className="object-cover h-full w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black flex flex-col justify-center items-center text-white p-4">
            <p className="text-lg md:text-2xl font-bold mb-4">
              {banner.text}
            </p>
            {banner.button && banner.btn_typ === "redirect" && (
              <a
                href={banner.link}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:opacity-75 relative overflow-hidden transition-all duration-300"
              >
                {banner.btn_name}
                <span className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-white via-white to-transparent opacity-10 blur-xl transform scale-150 rotate-45"></span>
              </a>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
