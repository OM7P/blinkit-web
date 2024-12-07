"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbLocation } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Location_page() {
  const Geo_Loaction_Api_Key = "d9cb14def5ba4d47a07a4dcab66e0ebc";
  const [Datavalue, setDataValue] = useState("");

  const notify = () => toast.error("Please allow location access in your browser settings.");
  
  useEffect(() => {
    GeolocationFun();
  }, [GeolocationFun]);

  const GeolocationFun = async () => {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
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
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          //   alert(`Please allow location access in your browser settings.`);
          notify();
        } else {
            console.error("errorororoorooroor");
        }
    }
);
  };
  console.log(Datavalue)

  return (
    <div className="flex justify-center items-center mr-[10px]">
<ToastContainer />
      <TfiLocationPin className="text-[20px] bounce text-green-600" />
      {Datavalue ? (
        <>
          <span className="text-[15px]">{Datavalue.city}</span>,
          <span className="text-[15px]">{Datavalue.state}</span>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Location_page;
