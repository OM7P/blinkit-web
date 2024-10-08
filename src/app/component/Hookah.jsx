"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
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
import OfferCard from "../offer_cards/OfferCard";
import { Hookah_data } from "../json/Product_json";
import ALL_Card_popup from "./All_Card_popup";
function Hookah() {
  const [isopen, setOpen] = useState(false);
  const OpenFunction = () => {
    setOpen(true);
  };
  return (
    <div className="relative w-[90%] mx-[100px] ">
      <div className="flex items-center">
        <h1 className="text-[25px] font-semibold py-10">Hookah</h1>
        <span
          className="flex items-end ml-[82%] text-green-800 font-semibold text-[20px] cursor-pointer underline"
          onClick={OpenFunction}
        >
          See all
        </span>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={6}
        navigation={{
          nextEl: "#bannerNext3",
          prevEl: "#bannerPrev3",
        }}
        pagination={{ clickable: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Hookah_data.map((product, index) => (
          <SwiperSlide key={index}>
            <div className=" relative bottom-[1px]   rounded-xl border-2 w-[180px] h-[260px]  ">
              <Image
                src={product.image}
                width={130}
                height={100}
                alt={product.Product_name}
                 className="mx-8 border-none"
              />
              {product.offercard || null}

              <p className="mx-5 flex justify-start items-center text-[10px] bg-slate-100 w-[42px] rounded-sm">
                <CiStopwatch />
                14min
              </p>
              <p className="mx-3 text-[15px]">
                {product.Product_name.slice(0, 15)}....
              </p>
              <p className="text-[12px] text-slate-600 py-[10px] mx-3">
                {product.weight}
              </p>
              <div className="flex justify-around items-center gap-8 text-[13px]">
                <p className="flex justify-center items-center">
                  <FaRupeeSign />
                  {product.price || "N/A"}
                </p>

                {/* <Button className="border-green-600 bg-green-600 text-white">ADD</Button>
                 */}
                <AddButton />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md:block hidden">
        <Button
          id="bannerPrev3"
          className="bannerPrev3 absolute -left-5 border-ment-color  bg-slate-300 backdrop-blur-md border-[1px] top-[60%] translate-y-[-50%] h-[40px] px-3 z-20 !rounded-[200px] cursor-pointer !text-xl"
          type="secondary"
        >
          <IoIosArrowBack className="text-black" />
        </Button>
        <Button
          id="bannerNext3"
          className="bannerNext3 absolute right-5 border-ment-color bg-slate-300  border-[1px] backdrop-blur-md top-[60%] translate-y-[-50%] h-[40px] px-3 z-20 !rounded-[200px] cursor-pointer !text-xl"
          type="secondary"
        >
          <IoIosArrowForward className="text-white font-bold" />
        </Button>
      </div>
      {isopen && <ALL_Card_popup isopen={isopen} setOpen={setOpen} id={6} />}
    </div>
  );
}

export default Hookah;
