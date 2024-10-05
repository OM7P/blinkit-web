"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

function ShopingButton() {
  return (
    <div className="">
      <Button className="text-white  bg-green-700 w-[120px] h-[50px] hover:bg-green-500">
        <div className="gap-4 flex justify-around items-center">
          <FaShoppingCart className="w-[20px] h-[20px] " />
          <div className=" text-[19px] font-semibold text-start">
            <p>5 items</p>
            <p className="flex justify-center items-center">
              <FaRupeeSign />
              987
            </p>
          </div>
        </div>
      </Button>
    </div>
  );
}

export default ShopingButton;
