'use client'

import Image from 'next/image'
import React from 'react'

function Banner_Second() {
    const banner_Images=[
        {Image1:"/images/pharmacy-WEB.avif"},
        {Image1:"/images/Pet-Care_WEB.avif"},
        {Image1:"/images/babycare-WEB.avif"},
        ,
    ]
    
  return (
    <div className="flex justify-center items-center">
        {banner_Images.map((data)=>
            <Image
           src={data.Image1}
           width={150}
           height={10}
           className="p-2 w-[25%] h-[235px]  rounded-lg "
         />

        )}
         {/* <Image
        src={banner_Images.Image2}
        width={150}
        height={10}
        className="p-2 w-[25%] h-[235px]  rounded-lg "
      />
         <Image
        src={banner_Images.Image3}
        width={150}
        height={10}
        className="p-2 w-[25%] h-[235px]  rounded-lg "
      /> */}
    </div>
  )
}

export default Banner_Second