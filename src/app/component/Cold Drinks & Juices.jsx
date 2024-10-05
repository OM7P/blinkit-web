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


function Cold_Drinks() {
  const Daily_Base_Data = [
    {
      Product_name: "Bisleri Packaged Water",
      image: "/images/71.avif",
      price: "78",
      weight: "5 L",
    },
    {
      Product_name: "Thums Up Soft Drink (750 ml)",
      image: "/images/72.avif",
      price: "45",
      weight: "750 ml",
    },
    {
      Product_name: "Coca-Cola Diet Coke Soft Drink - Pack of 6",
      image: "/images/73.avif",
      price: "234",
      weight: "6 X 300 ml",
    },
    {
      Product_name: "Red Bull Energy Drink (4 x 250 ml)",
      image: "/images/74.avif",
      price: "449",
      weight: "4 X 250 ml",
    },
    {
      Product_name: "Amul Probiotic Tadka Salted Buttermilk",
      image: "/images/75.avif",
      price: "10",
      weight: "170 ml",
    },
    {
      Product_name: "Bisleri Packaged Water (1 l)",
      image: "/images/76.avif",
      price: "20",
      weight: "1 L",
    },
    {
      Product_name: "Sprite Lime Flavored Soft Drink 750 ml",
      image: "/images/77.avif",
      price: "48",
      weight: "150 ml",
    },
    {
      Product_name: "Thums Up Soft Drink (300 ml)",
      image: "/images/78.avif",
      price: "40",
      weight: "250 ml",
    },
    {
      Product_name: "Sting Energy Drink 250 ml",
      image: "/images/79.avif",
      price: "20",
      weight: "250 ml",
    },
    {
      Product_name: "Thums Up Soft Drink (2.25 l)",
      image: "/images/80.avif",
      price: "95",
      weight: "2.25 ml",
    },
  ];
  return (
    <div className="relative w-[90%] mx-[100px] ">
        <h1 className="text-[25px] font-semibold py-10">Cold Drinks & Juices
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
              width={150}
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

export default Cold_Drinks;
