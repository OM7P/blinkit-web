import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore_Data = create(
  persist(
    (set) => ({
      // Initial State
      Count_number: [],
      Single_number: 0,
      Item_Price: 0,
      Item_List: [],
      Single_Price: 0,
      Address_data: "Mulund Railway Station",
      DecrementNumber: 0,
      IncrementPriceSave: [],
      DecrementPriceSave: [],
      GetTotalPrice: 0,

      setDecrementNumbers: (payload) =>
        set(() => ({
          DecrementNumber: payload,
        })),

      setAddress_data: (Changevalue) =>
        set((state) => {
          console.log(Changevalue);
          return { Address_data: Changevalue };
        }),

      // Function to set count data
      Single_Data: (Count) => set(() => ({ Single_number: Count })),
      Count_Data: (payload) =>
        set((state) => ({ Count_number: [...state.Count_number, payload] })),

      Single_Items_Prices: (data) =>
        set(() => ({
          Single_Price: data[0]?.price || 0, // Ensure 0 is set if price is not available
        })),

      StorePriceValue: (payload) =>
        set((state) => ({
          Item_List: [...state.Item_List, payload],
        })),

      setIncrementPriceSave: (payload) =>
        set((state) => ({
          IncrementPriceSave: [...state.IncrementPriceSave, payload],
        })),

      setDecrementPriceSave: (payload) =>
        set((state) => ({
          DecrementPriceSave: [...state.DecrementPriceSave, payload],
        })),

      setGetTotalPrice: (payload) =>
        set(
          () => (
            console.log("Payload section data in total price::::", payload),
            {
              GetTotalPrice: payload,
            }
          )
        ),
      setLogout: () =>
        set(() => ({
          Count_number: [],
          Single_number: 0,
          Item_Price: 0,
          Item_List: [],
          Single_Price: 0,
          DecrementNumber: 0,
          IncrementPriceSave: [],
          DecrementPriceSave: [],
          GetTotalPrice: 0,
        })),
    }),

    {
      name: "auth_store", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
