'use client'

import React, { useState } from 'react'
import { BiSolidDownArrow } from "react-icons/bi";
import AccountCard from '../component/Account_Card';


function MyAccount() {
  const [isopen,setOpen]=useState(false)

  const OpenFunction = () => {
    setOpen(true);
  };
  return (
    <div className="flex justify-center items-center gap-2 ">
        <div className="text-[18px]" onClick={OpenFunction}>
            Account
        </div>
        <div >
        <BiSolidDownArrow className=""/>

        </div>
        {isopen && <AccountCard isopen={isopen} setOpen={setOpen}/>}
    </div>
  )
}

export default MyAccount