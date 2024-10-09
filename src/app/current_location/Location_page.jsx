"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbLocation } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";


function Location_page() {
  const Geo_Loaction_Api_Key = "d9cb14def5ba4d47a07a4dcab66e0ebc";
  const [Datavalue, setDataValue] = useState("");

  useEffect(() => {
    GeolocationFun();
  }, []);

  const GeolocationFun = async () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const { latitude, longitude } = position.coords;
      try {
        const Url_Data = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${Geo_Loaction_Api_Key}`;

        console.log(Url_Data);

        const response = await axios.get(Url_Data);
        const data = response.data;
        setDataValue(data.results[0]);
      } catch (error) {
        console.log("error::", error);
      }
    });
  };


  return (
    <div className="flex justify-center items-center mr-[10px]">
      {/* <fiLocationPin  className="text-[25px] bounce text-green-600" /> */}
      {/* <TbLocation className="text-[25px] bounce text-green-600" /> */}
      <TfiLocationPin  className="text-[20px] bounce text-green-600" />

      {/* <span className="text-[15px]">{Datavalue.address_line1}</span>, */}
      <span className="text-[15px]">{Datavalue.city}</span>,
      <span className="text-[15px]">{Datavalue.state}</span>
    </div>
  );
}

export default Location_page;
