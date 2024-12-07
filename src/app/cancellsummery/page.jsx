"use client";

import React, { useEffect, useState } from "react";
import Header from "../HeaderPage/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useStore_Data } from "../store/zustand_data";
import Loader from "../component/Loader";
import { useRouter } from "next/navigation";

function FinalSummery() {
  const { GetTotalPrice ,setLogout} = useStore_Data();
  // const GetTotalPrice =9
  const [isLoader, setLoader] = useState(true);
  // console.log('PayPal Client ID:', process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLogout()

      setLoader(false);

    }, 2000);
  },[]);


  const ContinueShopping = ()=>{
    router.push('/')
  }



  if (isLoader) {
    return <Loader />;
  } else {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="">
        <div className="flex flex-col justify-center items-center my-10">
            <Image src={"/images/red x circel image.jpg"} alt="images" width={120} height={100} />
          <p className="text-xl">
            CANCELLED
          </p>
          <p className="text-[50px] font-semibold">
            Arriving in 0 minutes
          </p>
          <p className="my-3">
            aanand nagar thane (east), room no.1140 sai krupa chawal, Shiv sena
            shakha Mulund Railway Station, Siddharth Nagar, Mulund West, Mumbai
          </p>
          <p className="">Total Amount ₹{GetTotalPrice}</p>
          <Button className="bg-white my-2 text-green-800 border-2 hover:bg-white border-slate-200" onClick={ContinueShopping}>
          Cantinue your shopping
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image src={"/images/sucessfooter.webp"} width={1300} alt="images" height={1500} />
          <div className="-my-[240px] ml-[700px] flex flex-col items-center">
            <p className="text-[45px] font-thin">track your order</p>

            <p className="text-[13.5px] font-medium">
              download ios or android app to track your order live
            </p>
            <div className="flex  gap-10">
              <Image src={"/images/a1.webp"} alt="images" width={130} height={50} />
              <Image src={"/images/a2.webp"} width={130} alt="images" height={50} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[500px]"></div>
    </div>
  );
}
}

export default FinalSummery;
