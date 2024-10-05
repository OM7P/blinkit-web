import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";

function MyAddress() {
  return (
    <div className="flex justify-start items-start flex-col my-3">
      <div className="flex justify-center items-center">
        <h1 className="text-[15px] font-semibold">Delivery in 14 minutes</h1>
      </div>
      <div className="flex justify-center items-center gap-2 ">
        <div className=" flex text-[13px]"><p className="font-semibold">Home</p>-Mulund Railway Stati...</div>
        <div className="hover:rotate-180">
          <BiSolidDownArrow />
        </div>
      </div>
    </div>
  );
}
 
export default MyAddress;
