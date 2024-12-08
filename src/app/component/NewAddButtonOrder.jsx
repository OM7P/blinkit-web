"use click";

import { React, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useStore_Data } from "../store/zustand_data";
import ShopingButton from "../HeaderPage/shopingbutton";

function AddButtonOrder({ product, increment }) {
  const [count, setCount] = useState(0);
  const [Price_count, setPriceCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const {
    Count_Data,
    Single_Items_Prices,
    setDecrementNumbers,
    StorePriceValue,
    Item_Price,
    Item_List,
    setSingle_Data,
    setIncrementPriceSave,
    setDecrementPriceSave,
  } = useStore_Data();
  const storeprice = [];

  const tottalSavePriceIncrement = IncrementPriceSave.flat(Infinity);

  const totalPriceIncrement = tottalSavePriceIncrement.reduce(
    (a, b) => a + b.price,
    0
  );

  const tottalSavePriceDecrement = DecrementPriceSave.flat(Infinity);

  const tottalPriceDecrements = tottalSavePriceDecrement.reduce(
    (a, b) => a + b.price,
    0
  );

  console.log("calculatord total increment::", totalPriceIncrement);
  console.log("calculatord totolal decrement::", tottalPriceDecrements);
  console.log("calculatord::", totalPriceIncrement - tottalPriceDecrements);

  // console.log("Product list data from store:", Item_List);
  // console.log("store values::",Item_Price)

  // Update the count on mount
  useEffect(() => {
    // handleIncrement()
    setSingle_Data(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const DataTranfer = (data) => {
    // console.log("increment valuer are here ::::", increment, data);
  };

  // Function to handle button click
  const handleAddClick = () => {
    const item = product.filter((val) => val.id === increment);
    setPriceCount(item);
    Single_Items_Prices(item);
    StorePriceValue(item);
    setIsAdded(true);
    Count_Data(1);
    DataTranfer(1);
    setCount(1); // Initial count is set to 1 on first click
    // const item = product.filter((val) => val.id === increment);
    setIncrementPriceSave(item);
    // console.log("ADD valuer are here ::::", item);
  };

  // console.log("store number and is value here:::",storeprice)

  // Function to handle incrementing the count
  const handleIncrement = () => {
    Count_Data(1);
    setCount(count + 1);
    DataTranfer(2);
    const item = product.filter((val) => val.id === increment);
    // console.log("increment valuer are here ::::", item);
    setIncrementPriceSave(item);
    // console.log("item id::::::", item);
    // setPriceCount(item);00
    // Single_Items_Prices(item)
  };

  // console.log("price count error inifinte loopo:::",Price_count)

  // Function to handle decrementing the count
  const handleDecrement = () => {
    if (count === 1) {
      setCount(0); // Set count to 0 when it reaches 1

      DataTranfer(3);
      setIsAdded(false); // Reset to "ADD" when count reaches 0
      const item = product.filter((val) => val.id === increment);
      setDecrementPriceSave(item);
      // Item_List.find((val) => val.id === id);
    } else if (count > 1) {
      setCount(count - 1); // Decrease count if it's greater than 1
      DataTranfer(4);
      const item = product.filter((val) => val.id === increment);
      setDecrementPriceSave(item);
    }
  };

  return (
    <div>
      {isAdded ? (
        <div className="flex items-center">
          <Button className="w-[80px] bg-green-600 hover:bg-green-600">
            <Button
              className=" bg-green-600 hover:bg-green-600	border-none text-white h-[10px] w-[10px]"
              onClick={handleDecrement}
            >
              -
            </Button>
            <span className="">{count}</span>
            {/* {Count_Data(1)} */}
            <Button
              className="hover:bg-green-600 bg-green-600 text-white h-[10px] w-[10px]"
              onClick={handleIncrement}
            >
              +
            </Button>
          </Button>
        </div>
      ) : (
        <Button
          className=" border-green-700  rounded-lg border-[1px] hover:bg-green-50 text-green-800 bg-green-50 w-[80px]"
          onClick={handleAddClick}
        >
          ADD
        </Button>
      )}
    </div>
  );
}

export default AddButtonOrder;
