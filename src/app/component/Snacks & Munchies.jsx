"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import OfferCard_by_ten_percent from "../offer_cards/offer_Card_10%_";
import { Snacks_and_Munchies } from "../json/Product_json";
import ALL_Card_popup from "./All_Card_popup";
import { Skeleton } from "@/components/ui/skeleton";

function Sancks_Munchies() {
  const [isopen, setOpen] = useState(false);
  const OpenFunction = () => {
    setOpen(true);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <div className="relative w-[90%] mx-[100px] ">
      <div className="flex items-center">
        <h1 className="text-[25px] font-semibold py-10 whitespace-nowrap">
          Snacks & Munchies
        </h1>
        <span
          className="flex items-end ml-[72%] text-green-800 font-semibold text-[20px] cursor-pointer underline"
          onClick={OpenFunction}
        >
          See all
        </span>
      </div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={6}
        s
        navigation={{
          nextEl: "#bannerNext6",
          prevEl: "#bannerPrev6",
        }}
        pagination={{ clickable: false }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {Snacks_and_Munchies.map((product, index) => {
          const CardItem = Snacks_and_Munchies.filter(
            (valie_Id) => valie_Id.id === product.id
          );
          return (
            <SwiperSlide key={index}>
              <div className=" relative  rounded-xl border-2 w-[180px] h-[260px]  ">
                {isLoading ? (
                  <>
                    <div className="my-2">
                      <Skeleton className="h-[120px] w-[155px] mx-3" />
                      <Skeleton className="h-[30px] w-[130px] mx-3 mt-2" />
                      <Skeleton className="h-[20px] w-[70px] mx-3 mt-2" />
                      <Skeleton className="h-[20px] w-[100px] mx-3 mt-2" />
                    </div>
                  </>
                ) : (
                  <>
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
                      12min
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
                      <AddButton product={CardItem} increment={product.id} />
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          );
        })}
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
      {isopen && <ALL_Card_popup isopen={isopen} setOpen={setOpen} id={7} />}
    </div>
  );
}

export default Sancks_Munchies;
