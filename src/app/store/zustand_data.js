import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore_Data = create(
  persist(
    (set) => ({
      // Initial State
      Count_number: 0,
      Item_Price: 0,
      Item_List: [],
      Single_Price: 0,
      Address_data: "Mulund Railway Station",

      setAddress_data: (Changevalue) =>
        set((state) => {
          console.log(Changevalue);
          return { Address_data: Changevalue };
        }),

      // Function to set count data
      Count_Data: (Count) => set(() => ({ Count_number: Count })),

      // Function to set item price
      // Items_Prices: (data) => {
      //   set((state) => {
      //     console.log(totalPrice);
      //     const newPrice = totalPrice; // Get the new price from the incoming data
      //     if (state.Item_Price !== newPrice) {
      //       console.log(newPrice); // Log the new price for debugging
      //       return { Item_Price: newPrice }; // Update state only if the price has changed
      //     }
      //     return state; // Return current state if no change
      //   });
      // },
      Single_Items_Prices: (data) =>
        set(() => ({
          Single_Price: data[0]?.price || 0, // Ensure 0 is set if price is not available
        })),

        StorePriceValue: (item) => set(() => ({
           Item_List : item // Declare storevalue here
      })),
      

  
    }),
    
    {
      name: "auth_store", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);