// components/Modal.js
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useStore_Data } from "../store/zustand_data";
import { Button } from "@/components/ui/button";
import { FcHome } from "react-icons/fc";
import { HiOutlinePencil } from "react-icons/hi2";

export default function SidePopProducItem({ isopen, setOpen }) {
  const [Changevalue, setChangevalue] = useState("");
  const { setAddress_data,Item_List } = useStore_Data();


  const Address_Sendd__zus = () => {
    // useEffect(() => {
    setAddress_data(Changevalue);
    setOpen(false);

    // }, [Changevalue]);
  };

  console.log("on chnage data pass:", Item_List);

  const ChangeFunction = (event) => {
    setChangevalue(event.target.value);
  };

  const toggleModal = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Button to open modal */}

      {/* Modal */}
      {isopen && (
        <div className="absolute inset-0  bg-opacity-75 flex  justify-start px-[100px] items-start z-40 bg-slate-900">
          <div className="absolute p-6 rounded-lg  shadow-lg mt-[70px] ml-[70%] w-[100%] h-[80%] bg-slate-600">
            {/* <h2 className="text-xl font-bold mb-4">Modal Title</h2> */}
            <div>
              <Button
                className=" -ml-[900px] bg-red-700"
                onClick={toggleModal}
              >
                X
              </Button>
            </div>
            {Item_List.map((val)=>{
                return(<>
                {val}
                </>)
            })}
          </div>
        </div>
      )}
    </>
  );
}
