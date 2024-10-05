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


function Rolling_Paper() {
  const Daily_Base_Data = [
    {
      Product_name: "Perfect Rolled Cones (Natural) - Bongchie",
      image: "/images/31.avif",
      price: "45",
      weight: "6 pack",
    },
    {
      Product_name: "Brown Rolling Paper Cones - Stash Pro",
      image: "/images/32.avif",
      price: "90",
      weight: "6 pieces",
    },
    {
      Product_name: "Brown Rolling Paper (King Size) - Stash Pro",
      image: "/images/33.avif",
      price: "50",
      weight: "1 unit (32 pieces)",
    },
    {
      Product_name: "Ultimate Rolling Paper with Filter Tips &",
      image: "/images/34.avif",
      price: "90",
      weight: "1 unit (32 pieces)",
    },
    {
      Product_name: "Colour Roach - Stash Pro",
      image: "/images/35.avif",
      price: "50",
      weight: "32 sheets",
    },
    {
      Product_name: "Ultimate Rolling Paper with Filter Tips &",
      image: "/images/36.avif",
      price: "59",
      weight: "32 sheets",
    },
    {
      Product_name: "Perfect Rolled Cones (White) - Bongchie",
      image: "/images/37.avif",
      price: "45",
      weight: "3 pack",
    },
    {
      Product_name: "White Rolling Paper Cones - Stash Pro",
      image: "/images/38.avif",
      price: "54",
      weight: "6 pieces",
    },
    {
      Product_name: "Brown Rolling Paper + Roach with Crushing",
      image: "/images/39.avif",
      price: "222",
      weight: "1 pack",
    },
    {
      Product_name: "Thins Pre-Rolled Rolling Paper By LIT",
      image: "/images/40.avif",
      price: "326",
      weight: "1 pack",
    },
  ];
  return (
    <div className="relative w-[90%] mx-[100px] ">
        <h1 className="text-[25px] font-semibold py-10">Rolling paper & tobacco</h1>
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
              10min
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

export default Rolling_Paper;
