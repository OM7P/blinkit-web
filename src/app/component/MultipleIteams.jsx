'use client'





import Image from "next/image";
import React from "react";

function MultipleIteams() {
  const Images_Data_List = [
    { image: "/images/paan-corner_web1.avif" },
    { image: "/images/2.avif" },
    { image: "/images/3.avif" },
    { image: "/images/4.avif" },
    { image: "/images/5.avif" },
    { image: "/images/6.avif" },
    { image: "/images/7.avif" },
    { image: "/images/8.avif" },
    { image: "/images/9.avif" },
    { image: "/images/10.avif" },
    { image: "/images/11.avif" },
    { image: "/images/12.avif" },
    { image: "/images/13.avif" },
    { image: "/images/14.avif" },
    { image: "/images/15.avif" },
    { image: "/images/16.avif" },
    { image: "/images/17.avif" },
    { image: "/images/18.avif" },
    { image: "/images/19.avif" },
    { image: "/images/Slice-20.avif" },
  ];
  return (
    <div className="grid grid-cols-10 px-16 cursor-pointer">
      {Images_Data_List.map((Data_image) => (
        <div key={Data_image.id}>
          <Image src={Data_image.image} alt="image" width={120} height={100} />
        </div>
      ))}
    </div>
  );
}

export default MultipleIteams;
