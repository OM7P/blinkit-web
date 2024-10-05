"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button_In_de from "./Button_In_de";
import AddButton from "./Button_In_de";
import { FaRupeeSign } from "react-icons/fa";


function Hookah() {
  const Daily_Base_Data = [
    {
      Product_name: "Premium Magic Coal By Stash Pro",
      image: "/images/51.avif",
      price: "80",
      weight: "145 g",
    },
    {
      Product_name: "Flat Coconut Hookah Coal Cubes by Stash",
      image: "/images/52.avif",
      price: "125",
      weight: "250 g(30 pieces)",
    },
    {
      Product_name: "Paan Raas Herbal Hookah Flavor",
      image: "/images/53.avif",
      price: "100",
      weight: "50 g",
    },
    {
      Product_name: "Pumpkin Hookah / Sheesha by Rhythm",
      image: "/images/54.avif",
      price: "500",
      weight: "50 gm",
    },
    {
      Product_name: "Brain Freeze Up Herbal Hookah Flavor",
      image: "/images/111.avif",
      price: "100",
      weight: "20 g",
    },
    {
      Product_name: "HLT Hookah (Assorted) by Alayra",
      image: "/images/56.avif",
      price: "1065",
      weight: "i unit",
    },
    {
      Product_name: "Hookah Premium Plastic Filters by Rhythm",
      image: "/images/57.avif",
      price: "150",
      weight: "1 pack(30 pieces)",
    },
    {
      Product_name: "Kiwi Herbal Hookah Flavor (Tobacco Free)",
      image: "/images/58.avif",
      price: "100",
      weight: "60 g",
    },
    {
      Product_name: "Watermelon Herbal Hookah Flavor",
      image: "/images/59.avif",
      price: "131",
      weight: "200 gm",
    },
    {
      Product_name: "Bombay Paan Masala Herbal Hookah Flavor",
      image: "/images/480930a.avif",
      price: "500",
      weight: "400 gm",
    },
  ];
  return (
    <div className="relative w-[90%] mx-[100px] ">
        <h1 className="text-[25px] font-semibold py-10">Hookah
        </h1>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={6}
      navigation={{
        nextEl: "#bannerNext",
        prevEl: "#bannerPrev",
      }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Daily_Base_Data.map((product, index) => (
        <SwiperSlide key={index}>
          <div className=" relative bottom-[1px]   rounded-xl border-2 w-[200px] h-[280px] shadow-md shadow-slate-900/50	">
              <Image
                src={product.image}
                width={130}
                height={100}
                alt={product.Product_name}
                  className="mx-8"
              />
            <p className="mx-5 flex justify-start items-center text-[10px] bg-slate-100 w-[42px] rounded-sm">
              <CiStopwatch />
              14min
            </p>
            <p className="mx-3 text-[15px]">{product.Product_name.slice(0, 20)}....</p>
            <p className="text-[12px] text-slate-600 py-[10px] mx-3">
              {product.weight}
            </p>
            <div className="flex justify-around items-center gap-12">
              <p className="flex justify-center items-center"><FaRupeeSign />
              {product.price || "N/A"}</p>
            
              {/* <Button className="border-green-600 bg-green-600 text-white">ADD</Button>
               */}
               <AddButton/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  
    <div className="md:block hidden">
      <Button
        id="bannerPrev"
        className="bannerPrev absolute -left-5 border-ment-color  bg-slate-300 backdrop-blur-md border-[1px] top-[60%] translate-y-[-50%] h-[40px] px-3 z-20 !rounded-[200px] cursor-pointer !text-xl"
        type="secondary"
      >
        <IoIosArrowBack className="text-black" />
      </Button>
      <Button
        id="bannerNext"
        className="bannerNext absolute right-1 border-ment-color bg-slate-300  border-[1px] backdrop-blur-md top-[60%] translate-y-[-50%] h-[40px] px-3 z-20 !rounded-[200px] cursor-pointer !text-xl"
        type="secondary"
      >
        <IoIosArrowForward className="text-white font-bold" />
      </Button>
    </div>
  </div>
  
  );
}

export default Hookah;
