"use client";

import React from "react";
import Header from "../HeaderPage/header";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useStore_Data } from "../store/zustand_data";
import { useRouter } from "next/navigation";

function FinalSummery() {
  const { GetTotalPrice } = useStore_Data();
  // const GetTotalPrice =9
  const router = useRouter();

  const CancellOrder=()=>{
    // console.log("canccell order function rendum")
    router.push('/cancellsummery')
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="">
        <div className="flex flex-col justify-center items-center my-10">
          {GetTotalPrice === 0 ? (
            <Image src={"/images/red x circel image.jpg"} alt="images" width={120} height={100} />
          ) : (
            <Image src={"/images/successIcon.webp"} width={100} alt="images" height={100} />
          )}
          <p className="text-xl">
            {GetTotalPrice === 0 ? "CANCELLED" : "SUCCESS"}
          </p>
          <p className="text-[50px] font-semibold">
            Arriving in {GetTotalPrice === 0 ? "0" : "16"} minutes
          </p>
          <p className="my-3">  
            aanand nagar thane (east), room no.1140 sai krupa chawal, Shiv sena
            shakha Mulund Railway Station, Siddharth Nagar, Mulund West, Mumbai
          </p>
          <p className="">Total Amount ₹{GetTotalPrice === 0 ? "0" : GetTotalPrice}</p>
          <Button className="bg-white my-2 text-green-800 border-2 hover:bg-white border-slate-200">
            View Order details
          </Button>
          <p>OR</p>
          <Button className="bg-white my-2 text-green-800 border-2 hover:bg-white border-slate-200" onClick={CancellOrder}>
           Canceel your Order
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image src={"/images/sucessfooter.webp"} width={1300} height={1500} alt="images" />
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

export default FinalSummery;
