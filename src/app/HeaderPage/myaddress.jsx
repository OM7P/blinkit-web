import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import AddressCard from "../component/Address_Card";
import { useStore_Data } from "../store/zustand_data";

function MyAddress() {
  const [isopen, setOpen] = useState(false);
  const OpenFunction = () => {
    setOpen(true);
  };

  const {Count,Item_Price,Address_data} = useStore_Data();

  return (
    <div className="flex justify-start items-start flex-col my-3">
      <div className="flex justify-center items-center">
        <h1 className="text-[15px] font-semibold">Delivery in 14 minutes</h1>
      </div>
      <div
        className="flex justify-center items-center gap-2 "
        onClick={OpenFunction}
      >
        <div className=" flex text-[13px]">
          <p className="font-semibold">Home</p>-{Address_data.slice(0,22)}...
        </div>
        <div className="hover:rotate-180">
          <BiSolidDownArrow />
        </div>
      </div>

      {isopen && <AddressCard isopen={isopen} setOpen={setOpen} />}
    </div>
  );
}

export default MyAddress;
