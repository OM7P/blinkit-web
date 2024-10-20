"use click";

import { React, useState } from "react";
import { Button } from "@/components/ui/button";

function AddButton() {
  // State to track whether the button has been clicked
  const [count, setCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  // Function to handle button click
  const handleAddClick = () => {
    setIsAdded(true);
    setCount(1); // Initial count is set to 1 on first click
  };

  // Function to handle incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setIsAdded(false); // Reset to "ADD" when count reaches 0
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
          className=" border-green-700  rounded-sm border-2 hover:bg-green-50 text-green-800 bg-green-50 w-[80px]"
          onClick={handleAddClick}
        >
          ADD
        </Button>
      )}
    </div>
  );
}

export default AddButton
