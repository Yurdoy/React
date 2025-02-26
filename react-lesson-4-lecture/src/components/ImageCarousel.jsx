import React, { useState } from "react";

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = [
    "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206233_68-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-69.jpg",
    "https://vip-1gl.ru/vipberrrt/10423beautiful_scenery_wallpaper.jpg",
    "https://www.superiorwallpapers.com/water/wonderful-landscape-nature-mountain-river_5120x3200.jpg",
  ];

  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        src={imageUrls[currentImageIndex]}
        alt="Carousel"
        style={{ width: "800px", height: "800px" }}
      />
      <button
        onClick={handleClick}
        style={{
          border: "1px solid green",
          borderRadius: "10px",
          height: "70px",
          width: "200px",
        }}
      >
        Next Image
      </button>
    </div>
  );
};

export default ImageCarousel;
