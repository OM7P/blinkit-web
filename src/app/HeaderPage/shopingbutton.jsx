"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState }  from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { useStore_Data } from "../store/zustand_data";
import SidePopProducItem from "../component/SidePopProductItem";

function ShopingButton() {
  const { Count_number, Item_Price,Single_Price } = useStore_Data();
  // console.log(Item_Price)
  // console.log(Single_Price)
  // const newstoreValue = Number(Item_Price)+Number(Single_Price)
  // console.log("multiple value add here :::",newstoreValue )
  const [isopen, setOpen] = useState(false);

  const OpenFunction = () => {
    setOpen(true);
  };

  return (
    <div className="">
      <Button className="text-white  bg-green-700 w-[100px] h-[45px] hover:bg-green-700">
        <div className="gap-2 flex justify-around items-center">
          <FaShoppingCart className="w-[20px] h-[20px] " />

          {Count_number > 0 ? (
            <div className=" text-[15px] font-semibold text-start"onClick={OpenFunction} >
              <p>{Count_number} items</p>
              {/* <p>Count_Data({count}) items</p> */}
              <p className="flex justify-center items-center">
                <FaRupeeSign />
                {Single_Price * Count_number}

              </p>
            </div>
          ) : (
            <div className=" text-[15px] font-semibold text-start">
             My card
            </div>
          )}
        </div>
        {isopen && <SidePopProducItem isopen={isopen} setOpen={setOpen} id={1} />}
      </Button>
    </div>
  );
}

export default ShopingButton;
