"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { useStore_Data } from "../store/zustand_data";
import SidePopProducItem from "../component/SidePopProductItem";

function ShopingButton() {
  const {
    Count_number,
    Item_Price,
    Single_Price,
    Single_number,
    DecrementNumber,
    Item_List,
    IncrementPriceSave,
    DecrementPriceSave,
  } = useStore_Data();

  const [isopen, setOpen] = useState(false);
  const multiplearray = Item_List.flat(Infinity);
  const totalDataPrice = multiplearray.reduce((a, b) => a + b.price, 0);

  const tottalSavePriceIncrement = IncrementPriceSave.flat(Infinity);

  // console.log("calculatord total tottalSavePriceIncrement::", tottalSavePriceIncrement);
  const totalPriceIncrement = tottalSavePriceIncrement.reduce(
    (a, b) => a + b.price,
    0
  );

  const tottalSavePriceDecrement = DecrementPriceSave.flat(Infinity);

  const tottalPriceDecrements = tottalSavePriceDecrement.reduce(
    (a, b) => a + b.price,
    0
  );

  // console.log("calculatord total increment::", totalPriceIncrement);
  // console.log("calculatord totolal decrement::", tottalPriceDecrements);
  // console.log("calculatord::", totalPriceIncrement - tottalPriceDecrements);
  const TotalValueOfProduct = totalPriceIncrement - tottalPriceDecrements

  const OpenFunction = () => {
    setOpen(true);
  };

  return (
    <div className="">
      <Button className="text-white  bg-green-700 w-[100px] h-[45px] hover:bg-green-700">
        <div className="gap-2 flex justify-around items-center">
          <FaShoppingCart className="w-[20px] h-[20px] " />

          {TotalValueOfProduct > 0 ? (
            <div
              className=" text-[15px] font-semibold text-start"
              onClick={OpenFunction}
            >
              <p>
                {tottalSavePriceIncrement.length -
                  tottalSavePriceDecrement.length}{" "}
                items
              </p>
              {/* <p>Count_Data({count}) items</p> */}
              <p className="flex justify-center items-center">
                <FaRupeeSign />
                {totalPriceIncrement - tottalPriceDecrements}
              </p>
            </div>
          ) : (
            <div className=" text-[15px] font-semibold text-start">My card</div>
          )}
        </div>
        {isopen && (
          <SidePopProducItem isopen={isopen} setOpen={setOpen} id={1} />
        )}
      </Button>
    </div>
  );
}

export default ShopingButton;
