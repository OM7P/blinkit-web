import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="">
      <Image
        src={"/images/blinkit-icon-small.png"}
        width={150}
        alt="image"
        height={10}
        className="p-2 w-[160px] h-[60px]  rounded-lg whitespace-nowrap  "
      />

      {/* <div className=" absolute bg-black w-[100px] h-full"></div> */}
    </div>
  );
}

export default Logo;
