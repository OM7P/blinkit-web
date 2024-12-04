"use client";

import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import AccountCard from "../component/Account_Card";
import { useStore_Data } from "../store/zustand_data";
import Otp_number from "../component_otp/Otp_number";

function MyAccount() {
  const [isopen, setOpen] = useState(false);
  const [isopenLgin, setisopenLgin] = useState(false);
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
    GetOTPNumber4Digit,
  } = useStore_Data();
  const UserOtpNumber = GetOTPNumber4Digit[3]
    ? "-======"
    : Number(GetOTPNumber4Digit[3]);

  // console.log(GetOtpNumber)

  const OpenFunction = () => {
    setOpen(true);
  };
  return (
    <div className="flex justify-center items-center gap-2 cursor-pointer">
      {UserOtpNumber.length > 0 ? (
        <div className="flex items-center" onClick={OpenFunction}>
          <span className="text-[18px]">Account</span>
          <BiSolidDownArrow className={`ml-1 transform transition-transform`} />
        </div>
      ) : (
        <div className="mx-[10px] text-[18px]" onClick={setisopenLgin}>
          Login
        </div>
      )}
      {isopen && <AccountCard isopen={isopen} setOpen={setOpen} />}
      {isopenLgin && <Otp_number setisopenLgin={setisopenLgin} />}
    </div>
  );
}

export default MyAccount;
