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
import { Navigation, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button_In_de from "./Button_In_de";
import AddButton from "./Button_In_de";
import { FaRupeeSign } from "react-icons/fa";


function Sancks_Munchies() {
  const Daily_Base_Data = [
    {
      Product_name: "Cheetos Cheez Puffs",
      image: "/images/41.avif",
      price: "10",
      weight: "20 gm",
    },
    {
      Product_name: "Kettle Studio Potato Chips - Rock Sea Salt &",
      image: "/images/44.avif",
      price: "99",
      weight: "212 gm",
    },
    {
      Product_name: "Dobra Thin & Crsipy Tapioca Chips",
      image: "/images/50.avif",
      price: "60",
      weight: "60 gm",
    },
    {
      Product_name: "Orion Turtle Sour Cream & Onion Corn Chips -",
      image: "/images/49.avif",
      price: "245",
      weight: "3 X 115 g",
    },
    {
      Product_name: "Cheetos Flamin hot Crunchy Puffs",
      image: "/images/42.avif",
      price: "254",
      weight: "116.d g",
    },
    {
      Product_name: "Britannia Vitarich Sandwich White Bread",
      image: "/images/43.avif",
      price: "99",
      weight: "116 gm",
    },
    {
      Product_name: "Kettle Studio Potato Chips - Sharp Jalapeno",
      image: "/images/45.avif",
      price: "47",
      weight: "57 g",
    },
    {
      Product_name: "Kettle Studio Potato Chips - Sweet Chilli With",
      image: "/images/46.avif",
      price: "99",
      weight: "45 g",
    },
    {
      Product_name: "Orion K Snack Kimchi Onion Rings",
      image: "/images/47.avif",
      price: "45",
      weight: "70 g",
    },
    {
      Product_name: "Orion Turtle Spicy Devil Corn Chips",
      image: "/images/48.avif",
      price: "99",
      weight: "115 g",
    },
  ];
  return (
    <div className="relative w-[90%] mx-[100px] ">
        <h1 className="text-[25px] font-semibold py-10">Snacks & Munchies
        </h1>
    <Swiper
      modules={[Navigation,  A11y]}
      spaceBetween={10}
      slidesPerView={6}s
      navigation={{
        nextEl: "#bannerNext6",
        prevEl: "#bannerPrev6",
      }}
      pagination={{ clickable: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Daily_Base_Data.map((product, index) => (
        <SwiperSlide key={index}>
         <div className=" relative  rounded-xl border-2 w-[180px] h-[260px] shadow-md shadow-slate-900/50	">
            <Image
              src={product.image}
              width={130}
              height={100}
              alt={product.Product_name}
              className="mx-8"


            />
            <p className="mx-5 flex justify-start items-center text-[10px] bg-slate-100 w-[42px] rounded-sm">
              <CiStopwatch />
              12min
            </p>
            <p className="mx-3 text-[15px]">{product.Product_name.slice(0, 15)}....</p>
            <p className="text-[12px] text-slate-600 py-[10px] mx-3">
              {product.weight}
            </p>
            <div className="flex justify-around items-center gap-8">
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
        id="bannerPrev6"
        className="bannerPrev6 absolute -left-5 border-ment-color  bg-slate-300 backdrop-blur-md border-[1px] top-[60%] translate-y-[-50%] h-[40px] px-3 z-20 !rounded-[200px] cursor-pointer !text-xl"
        type="secondary"
      >
        <IoIosArrowBack className="text-black" />
      </Button>
      <Button
        id="bannerNext6"
        className="bannerNext6 absolute right-5 border-ment-color bg-slate-300  border-[1px] backdrop-blur-md top-[60%] translate-y-[-50%] h-[40px] px-3 z-20 !rounded-[200px] cursor-pointer !text-xl"
        type="secondary"
      >
        <IoIosArrowForward className="text-white font-bold" />
      </Button>
    </div>
  </div>
  
  );
}

export default Sancks_Munchies;
