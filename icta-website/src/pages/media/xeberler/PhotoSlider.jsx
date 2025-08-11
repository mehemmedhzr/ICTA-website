// GallerySlider.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = ["/images/img1.png", "/images/img2.png", "/images/img3.png", "/images/img1.png"];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Slider */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mb-4">
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[400px] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView="auto"
        watchSlidesProgress={true}
        className="">
        {images.map((src, index) => (
          <SwiperSlide key={index} style={{ width: "72px" }}>
            <img
              src={src}
              alt={`Thumb ${index + 1}`}
              className="h-18 w-18 object-cover  hover:opacity-50 transition cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
