import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useStore_Data } from '../store/zustand_data';

function AddButton({ product, increment }) {
  const { Single_Data, Count_Data } = useStore_Data();
  const [count, setCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const updateSingleData = useCallback(() => {
    Single_Data(count);
  }, [Single_Data, count]);

  useEffect(() => {
    updateSingleData();
  }, [updateSingleData]);

  const handleAddClick = () => {
    setCount(1);
    Count_Data(1);
    setIsAdded(true);
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    Count_Data(1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    } else {
      setCount(0);
      setIsAdded(false);
    }
    Count_Data(-1);
  };

  return (
    <div>
      {isAdded ? (
        <div className="flex items-center">
          <Button
            className="w-[80px] bg-green-600 hover:bg-green-600"
            onClick={handleDecrement}
          >
            -
          </Button>
          <span className="mx-2">{count}</span>
          <Button
            className="hover:bg-green-600 bg-green-600 text-white"
            onClick={handleIncrement}
          >
            +
          </Button>
        </div>
      ) : (
        <Button
          className="border-green-700 rounded-lg border-[1px] hover:bg-green-50 text-green-800 bg-green-50 w-[80px]"
          onClick={handleAddClick}
        >
          ADD
        </Button>
      )}
    </div>
  );
}

export default AddButton;
