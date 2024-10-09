"use client";

import { Button } from "@/components/ui/button";
import React  from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { useStore_Data } from "../store/zustand_data";

function ShopingButton() {
  const { Count, Item_Price } = useStore_Data();

  return (
    <div className="">
      <Button className="text-white  bg-green-700 w-[100px] h-[45px] hover:bg-green-700">
        <div className="gap-2 flex justify-around items-center">
          <FaShoppingCart className="w-[20px] h-[20px] " />

          {Count > 0 ? (
            <div className=" text-[15px] font-semibold text-start">
              <p>{Count} items</p>
              {/* <p>Count_Data({count}) items</p> */}
              <p className="flex justify-center items-center">
                <FaRupeeSign />
                {Item_Price * Count}
              </p>
            </div>
          ) : (
            <div className=" text-[15px] font-semibold text-start">
             My card
            </div>
          )}
        </div>
      </Button>
    </div>
  );
}

export default ShopingButton;
