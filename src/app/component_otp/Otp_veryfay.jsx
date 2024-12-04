"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function Otp_otp() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  useEffect(() => {
    // Show the popup immediately and set a timeout to close it after 3 seconds
    const timer = setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // If popup is not visible, return null to render nothing
  if (!isPopupVisible) return "";

  return (
    <div className="absolute inset-0 bg-opacity-75 flex justify-start px-[530px] py-[150px] items-start z-40 bg-slate-700">
      <div className="!w-[500px] !h-[250px] -mx-[50px] my-[60px] bg-white border-2 rounded-xl border-gray-200">
        <div className="flex justify-center items-center flex-col my-[30px]">
          <Image src="/images/successIcon.webp" width={90} height={100} />
          <div className="my-[30px] mx-[150px] flex justify-center items-center flex-col">
            <p className="text-green-700 font-serif">Successfully Logged In!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp_otp;
