// components/Modal.js
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useStore_Data } from "../store/zustand_data";
import { Button } from "@/components/ui/button";
import { FcHome } from "react-icons/fc";
import { HiOutlinePencil } from "react-icons/hi2";

export default function AddressCard({ isopen, setOpen }) {
  const [Changevalue, setChangevalue] = useState("");
  const { setAddress_data } = useStore_Data();

  const Address_Sendd__zus = () => {
    // useEffect(() => {
    setAddress_data(Changevalue);
    setOpen(false);

    // }, [Changevalue]);
  };

  console.log("on chnage data pass:", Changevalue);

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
        <div className="absolute inset-0  bg-opacity-75 flex justify-start px-[100px] items-start z-40 bg-slate-900">
          <div className="p-6 rounded-lg  shadow-lg mt-[100px] ml-[100px] w-[40%] bg-slate-200">
            {/* <h2 className="text-xl font-bold mb-4">Modal Title</h2> */}
            <div>
              <Button
                className="ml-[450px] -mt-[15px] bg-red-700"
                onClick={toggleModal}
              >
                X
              </Button>
              <p className="mb-4">Change Location</p>
              <div className="flex justify-center items-center gap-1">
                <Button className="bg-green-700" onClick={Address_Sendd__zus}>
                  Delete my location
                </Button>
                <div className="relative w-[150px] flex justify-between items-center my-6 ">
                  <span className="w-[30%] h-[0.5px] bg-[#B0AAAA]"></span>
                  {/* OR TEXT */}
                  <span className="bg-slate-400 w-[30px] h-[30px] text-[12px] rounded-3xl flex justify-center items-center">
                    OR
                  </span>

                  <span className="w-[30%] h-[0.5px] bg-[#B0AAAA]"></span>
                  <span></span>
                </div>

                <Input
                  type="text"
                  onChange={ChangeFunction}
                  value={Changevalue}
                  placeholder="new address add here."
                  className="bg-white"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-[10px]">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                onClick={Address_Sendd__zus}
              >
                Confirm
              </button>
            </div>
            Your saved addresses
            <div className="w-[100%] h-[130px] bg-gray-100 rounded-xl p-[10px] text-[10px] my-5">
              <div className="flex justify-start items-center gap-2">
                <p className="w-[30px] h-[30px] bg-amber-300 rounded-2xl flex justify-center items-center">
                  <FcHome className="w-[20px] h-[20px]" />
                </p>
                <p className="text-[18px] font-mono font-semibold">Home</p>
              </div>
              <div className="mx-[40px] text-[12px]">
                <p>
                  Ganesh nagar delhi (west), flat no.110 ram krupa chawal,mukesh
                  nagar Mulund Railway Station, Siddharth Nagar, Mulund West,
                  Mumbai
                </p>
                <p className="bg-slate-300 w-[20px] h-[20px] rounded-2xl mx-2 cursor-pointer flex justify-center items-center my-2">
                  <HiOutlinePencil className=" w-[15px] h-[15px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
