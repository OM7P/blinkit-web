import React from 'react'
import { BiSolidDownArrow } from "react-icons/bi";


function MyAccount() {
  return (
    <div className="flex justify-center items-center gap-2 ">
        <div className="text-[18px] font-semibold">
            Account
        </div>
        <div >
        <BiSolidDownArrow className=""/>

        </div>
    </div>
  )
}

export default MyAccount