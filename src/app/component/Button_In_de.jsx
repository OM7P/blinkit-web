"use click";

import { React, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useStore_Data } from "../store/zustand_data";

function AddButton({ product, increment }) {
  // console.log("product in button filter data::", product, increment);
  // State to track whether the button has been clicked
  const [count, setCount] = useState(0);
  const [Price_count, setPriceCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const { Count_Data, Single_Items_Prices,StorePriceValue,Item_Price,Item_List } = useStore_Data();
  const storeprice = []
  // console.log("store values::",Item_Price)

  // Update the count on mount
  useEffect(() => {
    // handleIncrement()
    Count_Data(count); // Update the count in Zustand
    // setPriceCount(item)
  }, [Count_Data, count]);

  // useEffect(() => {
  //   if (Price_count) {
  //     // Single_Items_Prices(Price_count);
  //     setPriceCount();
  //   } else {
  //     setPriceCount(0);
  //     // alert("cdnj")
  //   }
  // }, [Single_Items_Prices, Price_count]);

  // Function to handle button click
  const handleAddClick = () => {
    const item = product.filter((val) => val.id === increment);
    // console.log("increment valuer are here ::::",increment)
    setPriceCount(item);
    Single_Items_Prices(item)
    // StorePriceValue(item) 
    setIsAdded(true);
    setCount(1); // Initial count is set to 1 on first click
  };

  // console.log("store number and is value here:::",storeprice)

  // Function to handle incrementing the count
  const handleIncrement = () => {
    // const item = product.filter((val) => val.id === increment);
    setCount(count + 1);
    // console.log("item id::::::", item);
    // setPriceCount(item);
    // Single_Items_Prices(item)
  };

  // console.log("price count error inifinte loopo:::",Price_count)

  // Function to handle decrementing the count
  const handleDecrement = () => {
    if (count === 1) {
      setCount(0); // Set count to 0 when it reaches 1
      // setPriceCount(0)
      // Single_Items_Prices(Price_count)
      setIsAdded(false); // Reset to "ADD" when count reaches 0
    } else if (count > 1) {
      setCount(count - 1); // Decrease count if it's greater than 1


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

export default AddButton;
