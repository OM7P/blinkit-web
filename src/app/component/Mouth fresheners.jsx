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


function Mouth_Fresh() {
  const Daily_Base_Data = [
    {
      Product_name: "Chandan Jeera Goli Digestive Tablets",
      image: "/images/61.avif",
      price: "50",
      weight: "100 g",
    },
    {
      Product_name: "Center Fresh Sugar Free Mint Candy",
      image: "/images/62.avif",
      price: "35",
      weight: "100 ml",
    },
    {
      Product_name: "Chandan Star 5 in 1 Mouth Freshener",
      image: "/images/63.avif",
      price: "120",
      weight: "200 ml",
    },
    {
      Product_name: "Impact Sugar Free Mint Candy (Ice Mints)",
      image: "/images/64.avif",
      price: "147",
      weight: "14 gm",
    },
    {
      Product_name: "Chandan Elaichi Saunf Mouth Freshener",
      image: "/images/65.avif",
      price: "50",
      weight: "100 gm",
    },
    {
      Product_name: "Impact Sugar Free Mint Candy (Fresh Mints)",
      image: "/images/66.avif",
      price: "147",
      weight: "14 gm",
    },
    {
      Product_name: "Chandan Mint Saunf Mouth Freshener",
      image: "/images/67.avif",
      price: "50",
      weight: "100 gm",
    },
    {
      Product_name: "paper boat Aam Papad Fruit Bar",
      image: "/images/68.avif",
      price: "70",
      weight: "90g",
    },
    {
      Product_name: "Trident Tropical Twist Gum (Sugar Free)",
      image: "/images/69.avif",
      price: "180",
      weight: "1 pack (32 pieces)",
    },
    {
      Product_name: "Chandan Mitha Amla Candy",
      image: "/images/70.avif",
      price: "60",
      weight: "100 gm",
    },
  ];
  return (
    <div className="relative w-[90%] mx-[100px] ">
        <h1 className="text-[25px] font-semibold py-10">Mouth fresheners
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
              15min
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

export default Mouth_Fresh;
