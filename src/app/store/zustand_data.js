import { create } from 'zustand';

export const useStore_Data = create((set) => ({
  // Initial State
  Count: 0,
  Item_Price: 0,

  // Function to set count data
  Count_Data: (Count) => set(() => ({ Count })),

  // Function to set item price
  Items_Prices: (data) => {
    const totalPrice = data.reduce((sum, product) => sum + Number(product.price), 0);
    set((state) => {
      console.log(totalPrice);
      const newPrice = totalPrice; // Get the new price from the incoming data
      if (state.Item_Price !== newPrice) {
        console.log(newPrice); // Log the new price for debugging
        return { Item_Price: newPrice }; // Update state only if the price has changed
      }
      return state; // Return current state if no change
    })
  },
}));
