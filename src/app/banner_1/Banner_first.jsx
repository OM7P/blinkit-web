
"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
// import { Button } from "your-button-component"; // Make sure to import the Button component if it's custom

function Banner_first() {
  const banner_Images = [
    { image: "/images/Second_Group-33704.webp" },
    { image: "/images/banner_90.webp" },
    { image: "/images/First_Group-33704.webp" },
    { image: "/images/Screenshot 2024-10-04 182050.png" },
  ];

  return (
    <div className="relative top-[4px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: "#bannerNext22",
          prevEl: "#bannerPrev22",
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {banner_Images.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <Image
                className="w-[75%] cursor-pointer rounded-x"
                src={slide.image}
                alt={`Banner ${index}`}
                width={11000}
                height={1000}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="md:block hidden">
        <Button
          id="bannerPrev22"
          className="bannerPrev22 absolute left-20 border-ment-color bg-[#00251F33] backdrop-blur-md border-[1px] top-[50%] translate-y-[-50%] h-[150px] px-3 z-20 cursor-pointer !text-xl"
          type="secondary"
        >
          <IoIosArrowBack className="text-white" />
        </Button>
        <Button
          id="bannerNext22"
          className="bannerNext22  absolute right-20 border-ment-color bg-[#00251F33] border-[1px] backdrop-blur-md top-[50%] translate-y-[-50%] h-[150px] px-3 z-20 cursor-pointer !text-xl"
          type="secondary"
        >
          <IoIosArrowForward className="text-white font-bold" />
        </Button>
      </div>

      {/* Pagination styling */}
      <div className="swiper-pagination absolute pb-20"></div>
    </div>
  );
}

export default Banner_first;
