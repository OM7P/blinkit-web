"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { React, useEffect } from "react";
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
import { useStore_Data } from "../store/zustand_data";
import { CloudFog } from "lucide-react";

function Daily_base() {
  const Daily_Base_Data = [
    {
      Product_name: "Amul Taaza Toned Fresh Milk",
      image: "/images/21.avif",
      price: "28",
      weight: "500 ml",
    },
    {
      Product_name: "Gokul Full Cream Fresh Milk",
      image: "/images/22.avif",
      price: "38",
      weight: "500 ml",
    },
    {
      Product_name: "Gokul Satvik Pasteurized Cow Fresh",
      image: "/images/23.avif",
      price: "28",
      weight: "500 ml",
    },
    {
      Product_name: "Amul Salted Butter",
      image: "/images/24.avif",
      price: "60",
      weight: "10 gm",
    },
    {
      Product_name: "Amul Masti Curd",
      image: "/images/25.avif",
      price: "23",
      weight: "200 gm",
    },
    {
      Product_name: "Britannia Vitarich Sandwich White Bread",
      image: "/images/26.avif",
      price: "65",
      weight: "500 gm",
    },
    {
      Product_name: "Mother Dairy Classic Curd",
      image: "/images/27.avif",
      price: "35",
      weight: "400 gm",
    },
    {
      Product_name: "Yojana Poultry Power White Eggs - 6 pcs",
      image: "/images/28.avif",
      price: "54",
      weight: "6 pieces",
    },
    {
      Product_name: "Amul Cheese Cubes",
      image: "/images/29.avif",
      price: "131",
      weight: "200 gm",
    },
    {
      Product_name: "Modern Sandwich Bread",
      image: "/images/23.avif",
      price: "50",
      weight: "400 gm",
    },
    {
      Product_name: "Amul Cheese Cubes",
      image: "/images/29.avif",
      price: "131",
      weight: "200 gm",
    },
  ];

  const {Items_Prices} = useStore_Data();

  
  useEffect(() => {
    if (Daily_Base_Data) {
      // Log all prices of the products
      Daily_Base_Data.forEach(product => {
        console.log(product.price);
      });

      // Call Items_Prices to update your Zustand store
      Items_Prices(Daily_Base_Data);
    }
  }, [Daily_Base_Data, Items_Prices]);  // Ensure dependencies are correct


  return (
    <div className="relative w-[90%] mx-[100px]">
      <h1 className="text-[25px] font-semibold py-10">Dairy, Bread & Eggs</h1>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10} // Adjust space between slides
        slidesPerView={6} // Number of slides visible
        // loop={true} // Enable continuous loop mode
        navigation={{
          nextEl: "#bannerNext11",
          prevEl: "#bannerPrev11",
        }}
        pagination={{ clickable: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Daily_Base_Data.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative  rounded-xl border-2 w-[180px] h-[260px]">
              <Image
                src={product.image}
                width={130}
                height={90}
                alt={product.Product_name}
                className="mx-8"
              />
              <p className="mx-5 flex justify-start items-center text-[10px] bg-slate-100 w-[42px] rounded-sm">
                <CiStopwatch />
                11min
              </p>
              <p className="mx-3 text-[15px]">
                {product.Product_name.slice(0, 15)}....
              </p>
              <p className="text-[12px] text-slate-600 py-[10px] mx-3">
                {product.weight}
              </p>
              <div className="flex justify-around items-center gap-8 text-[13px]">
                <p className="flex justify-center items-center">
                  <FaRupeeSign classNam="" />
                  {product.price || "N/A"}
                </p>
                <AddButton />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="md:block hidden">
        <Button
          id="bannerPrev11"
          className="bannerPrev11 absolute -left-5 border-ment-color  bg-slate-300 backdrop-blur-md border-[1px] top-[60%] translate-y-[-50%] h-[40px] px-3 z-20 !rounded-[200px] cursor-pointer !text-xl"
          type="secondary"
        >
          <IoIosArrowBack className="text-black" />
        </Button>
        <Button
          id="bannerNext11"
          className="bannerNext11 absolute right-5 border-ment-color bg-slate-300  border-[1px] backdrop-blur-md top-[60%] translate-y-[-50%] h-[40px] px-3 z-20 !rounded-[200px] cursor-pointer !text-xl"
          type="secondary"
        >
          <IoIosArrowForward className="text-white font-bold" />
        </Button>
      </div>
    </div>
  );
}

export default Daily_base;
