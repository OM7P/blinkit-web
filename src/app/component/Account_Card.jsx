"use client ";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStore_Data } from "../store/zustand_data";
import { useEffect } from "react";

export default function AccountCard({ isopen, setOpen }) {
  const {
    Count_Data,
    Single_Items_Prices,
    setDecrementNumbers,
    StorePriceValue,
    Item_Price,
    Item_List,
    Single_Data,
    setIncrementPriceSave,
    setDecrementPriceSave,
    GetLastProductData,
    GetOtpNumber,
    setLogout,
  } = useStore_Data();
  const router = useRouter();
  const toggleModal = () => {
    setOpen(false);
  };

  const OrderHistory = () => {
    router.push("/orderhistory");
  };

  // useEffect(() => {
    const SetLogoutFunction = () => {
      setLogout()
    };
  // },[]);

  return (
    <>
      {/* Button to open modal */}

      {/* Modal */}
      {isopen && (
        <div className="absolute inset-0  bg-opacity-75 flex justify-start px-[100px] items-start z-40">
          <div className="p-6 rounded-3xl  shadow-lg mt-[70px] ml-[75%] w-[20%] bg-white ">
            {/* <h2 className="text-xl font-bold mb-4">Modal Title</h2> */}
            <div>
              <Button
                className="ml-[190px] -mt-[15px]  bg-red-700"
                onClick={toggleModal}
              >
                X
              </Button>
            </div>
            <div className="grid grid-cols-1 justify-start gap-5">
              <span className="text-[20px] font-semibold">
                My Account
                <p className="text-[14px]">{GetOtpNumber}</p>
              </span>
              <span
                className="text-[15px] font-thin text-gray-500 cursor-pointer"
                onClick={() => OrderHistory()}
              >
                My Orders
              </span>
              <span className="text-[15px] font-thin text-gray-500 cursor-pointer">
                Saved Address
              </span>
              <span className="text-[15px] font-thin text-gray-500 cursor-pointer">
                FAQ&apos;s
              </span>
              <span className="text-[15px] font-thin text-gray-500 cursor-pointer">
                Account Privacy
              </span>
              <span
                className="text-[15px] font-thin text-gray-500 cursor-pointer"
                onClick={SetLogoutFunction}
              >
                Logout
              </span>
            </div>
            <div className="flex ">
              <div className="my-[10px] mb-10">
                <Image
                  src={"/images/sample-qr-code-icon-png.webp"}
                  width={200}
                  alt="image"
                  height={80}
                  className="w-[110px]"
                />
              </div>
              <div className="flex flex-col justify-start items-center">
                <span className="font-semibold  text-[14px] mt-2  text-slate-400 w-[100px]">
                  Simple way to get groceries{" "}
                  <p className="text-blue-500">in minutes</p>
                </span>
                <p className="text-[12px] w-[120px] ml-3">
                  Scan the QR code and download blinkit app
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
