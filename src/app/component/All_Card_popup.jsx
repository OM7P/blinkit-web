"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { React, useEffect, useState } from "react";
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
import OfferCard from "../offer_cards/OfferCard";
import All_Card_popup from "./All_Card_popup";
import { Rolling_and_paper_and_tobacco } from "../json/Product_json";
import { Daily_Base_Data } from "../json/Product_json";
import { Candies_Gums_json_Data } from "../json/Product_json";
import { Hookah_data } from "../json/Product_json";
import { Cold_Drinks_and_Juices } from "../json/Product_json";
import { Mouth_and_fresheners } from "../json/Product_json";
import { Snacks_and_Munchies } from "../json/Product_json";

export default function ALL_Card_popup({ isopen, setOpen, id }) {
  let Change_Daily_base_data = [];
  let data_value = "Not present";

  if (id == 1) {
    Change_Daily_base_data.push(Daily_Base_Data);
  } else if (id == 2) {
    Change_Daily_base_data.push(Rolling_and_paper_and_tobacco);
  } else if (id == 3) {
    Change_Daily_base_data.push(Candies_Gums_json_Data);
  } else if (id == 4) {
    Change_Daily_base_data.push(Mouth_and_fresheners);
  } else if (id == 5) {
    Change_Daily_base_data.push(Cold_Drinks_and_Juices);
  } else if (id == 6) {
    Change_Daily_base_data.push(Hookah_data);
  } else if (id == 7) {
    Change_Daily_base_data.push(Snacks_and_Munchies);
  } else {
    console.log(data_value);
  }

  let New_Update_Data = Change_Daily_base_data[0];

  const toggleModal = () => {
    setOpen(false);
  };

  return (
    <>
      {isopen && (
        <div className="absolute inset-0 bottom-[150px] bg-opacity-75 flex justify-start px-[40px] items-start z-10">
          <div className="p-6 rounded-3xl  shadow-lg -mt-[25px] mr-[100%] w-[150%] h-[230%] bg-slate-100">
            <div>
              <Button
                className="ml-[1110px] -mt-[15px]  bg-red-700"
                onClick={toggleModal}
              >
                X
              </Button>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {New_Update_Data.map((product, index) => (
                <div
                  key={index}
                  className="relative  rounded-xl border-2 border-slate-200 bg-white w-[160px] h-[210px]"
                >
                  <Image
                    src={product.image}
                    width={90}
                    height={90}
                    alt={product.Product_name}
                     className="mx-8 border-none"
                  />
                  {product.offercard || null}
                  <p className="absolute top-[100px] mx-3 flex justify-start items-center text-[10px] bg-slate-100 w-[42px] rounded-sm">
                    <CiStopwatch />
                    11min
                  </p>
                  <p className="absolute top-[120px] mx-3 text-[15px] whitespace-nowrap	">
                    {product.Product_name.slice(0, 15)}....
                  </p>
                  <p className="absolute top-[135px] text-[12px] text-slate-600 py-[10px] mx-3">
                    {product.weight}
                  </p>
                  <div className="absolute top-[160px] left-[10px] flex justify-around items-center gap-7 text-[13px]">
                    <p className="flex justify-center items-center">
                      <FaRupeeSign classNam="" />
                      {product.price || "N/A"}
                    </p>
                    <AddButton />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
