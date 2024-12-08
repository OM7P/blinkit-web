import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useStore_Data } from '../store/zustand_data';

function AddButton({ product, increment }) {
  // Zustand store functions
  const { Single_Data, Count_Data } = useStore_Data();

  // Local state for count and "added" status
  const [count, setCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  // Memoized function to update Single_Data
  const updateSingleData = useCallback(() => {
    Single_Data(count);
  }, [Single_Data, count]);

  // Effect to call updateSingleData when dependencies change
  useEffect(() => {
    updateSingleData();
  }, [updateSingleData]);

  // Handle adding the product
  const handleAddClick = () => {
    setCount(1); // Initialize count to 1
    Count_Data(1); // Update global state
    setIsAdded(true); // Mark as added
  };

  // Handle incrementing the count
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    Count_Data(1); // Update global state
  };

  // Handle decrementing the count
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    } else {
      setCount(0);
      setIsAdded(false); // Reset added status
    }
    Count_Data(-1); // Update global state
  };

  return (
    <div>
      {isAdded ? (
        <div className="flex items-center">
          {/* Decrement button */}
          <Button
            className="w-[80px] bg-green-600 hover:bg-green-600 text-white"
            onClick={handleDecrement}
          >
            -
          </Button>
          {/* Current count */}
          <span className="mx-2">{count}</span>
          {/* Increment button */}
          <Button
            className="hover:bg-green-600 bg-green-600 text-white"
            onClick={handleIncrement}
          >
            +
          </Button>
        </div>
      ) : (
        // Add button
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
