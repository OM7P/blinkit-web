'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function FinallPage() {
  const router= useRouter();

  const ConfirmPage = ()=>{
    router.push('/ordersummery')
  }
  const CancellPage = ()=>{
    router.push('/')
  }
  return (
    <div className="">
      <div className="absolute inset-0  bg-opacity-75 left-[30%] top-[50px] w-[35%] h-[500px] bg-green-50 rounded-md z-50 border-gray-100 border-2">
        <span className="mx-5 text-[20px] font-semibold" >Confirm your payment</span>
        <Image
          className="mx-[130px] rounded-md my-10"
          width={250}
          height={50}
          src="/images/3d-rendering-woman-supermarket_23-2151838158.jpg"
        />
        <div className="mx-[80px] gap-4 flex text-[100px] " >
          <Button className="bg-red-800 h-[50px] hover:bg-red-600 w-[200px]" onClick={()=>{CancellPage()}}>Back to Shopping</Button>
          <Button className="bg-green-800  hover:bg-green-600 h-[50px] w-[200px]" onClick={()=>{ConfirmPage()}}>Confirm Payment</Button>
        </div>
      </div>
    </div>
  );
}

export default FinallPage;
