import React from "react";
import Logo from "./logo";
import MyAddress from "./myaddress";
import SearchInput from "./searchInput";
import MyAccount from "./myaccount";
import ShopingButton from "./shopingbutton";

function Header() {
  return (
    <div className=" h-[80px] flex items-center border-b-yellow-300 border-10 cursor-pointer  justify-between">
      <div className=" flex justify-center items-center gap-3">
        <Logo />
        <div className="w-[1px] bg-gray-200 h-[11vh] "></div>
        <MyAddress />
      </div>

      {/* Center the SearchInput */}
      <div className="flex-1 flex justify-center  left-[500px]">
        <SearchInput />
      </div>

      <div className="flex items-center mx-6 gap-[15px]">
        <MyAccount />
        <ShopingButton />
      </div>

      <div className="absolute bg-gray-200 h-[1px] w-full top-[80px]"></div>
    </div>
  );
}

export default Header;
