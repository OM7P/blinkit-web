'use client'




import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className="grid grid-row">
      <div className="flex justify-center items-center cursor-pointer">
        <div className="w-[70%] h-[70px] bg-slate-50 rounded-md flex justify-around items-center">
          <p className="text-gray-600 text-[12px]">
            © Blink Commerce Private Limited, 2016-2024
          </p>
          <div className="flex justify-end items-center gap-2">
            <p className="text-gray-700 font-semibold">Download App</p>
            <Image src={"/images/a1.webp"} alt="image" width={120} height={100} />
            <Image src={"/images/a2.webp"} alt="image" width={120} height={100} />
            <FaFacebook className="w-[35px] h-[35px]" />
            <AiFillInstagram className="w-[35px] h-[35px]" />
            <AiFillTwitterCircle className="w-[35px] h-[35px]" />
            <FaLinkedin className="w-[35px] h-[35px]" />
            <FaSquareWhatsapp className="w-[35px] h-[35px]" />
          </div>
        </div>
      </div>
      <div className="text-gray-400 w-[72%] mx-[240px] text-[15px] ">
        &quot;Blinkit&quot; is owned &amp; managed by &quot;Blink Commerce Private Limited&quot; and is
        not related, linked or interconnected in whatsoever manner or nature, to
        &quot;GROFFR.COM&quot; which is a real estate services business operated by
        &quot;Redstone Consultancy Services Private Limited&quot;.
      </div>
    </div>
  );
}

export default Footer;
