"use client";

// components/Modal.js
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useStore_Data } from "../store/zustand_data";
import { Button } from "@/components/ui/button";
import { FcHome } from "react-icons/fc";
import { HiOutlinePencil } from "react-icons/hi2";
import Image from "next/image";
import { GiStopwatch } from "react-icons/gi";
import { FaBook, FaRupeeSign } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { GrCircleInformation } from "react-icons/gr";
import { ImSpinner2 } from "react-icons/im";
import { ImSpinner8 } from "react-icons/im";
import { CgSpinner } from "react-icons/cg";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineElectricBike,
} from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { FaIndianRupeeSign } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import PayPalButton from "../paypalpage/page";
import { useRouter } from "next/navigation";
import RadioButtonComponent from "./RadioButton";
// import AboutPage from "@/app/about/page";

export default function SidePopProducItem({ isopen, setOpen }) {
  const [Changevalue, setChangevalue] = useState("");
  //   const { setAddress_data, Item_List } = useStore_Data();
  const {
    Count_number,
    Item_Price,
    IncrementPriceSave,
    DecrementPriceSave,
    Single_Price,
    Single_number,
    Item_List,
    setGetTotalPrice,
  } = useStore_Data();

  const [iscount, setiscount] = useState(0);
  const [isSpinner, setSpinner] = useState(false);
  const [isPaypalclickRadio, setPaypalClickRadio] = useState("");
  const [isPaypalGetData, setPaypalGetData] = useState([]);

  const newItem_List_Data = Item_List.flat(Infinity);
  const multiplearray = Item_List.flat(Infinity);
  // console.log(multiplearray);
  const totalDataPrice = multiplearray.reduce((a, b) => a + b.price, 0);
  const tottalSavePriceIncrement = IncrementPriceSave.flat(Infinity);

  const totalPriceIncrement = tottalSavePriceIncrement.reduce(
    (a, b) => a + b.price,
    0
  );

  const tottalSavePriceDecrement = DecrementPriceSave.flat(Infinity);

  const tottalPriceDecrements = tottalSavePriceDecrement.reduce(
    (a, b) => a + b.price,
    0
  );

  const handling_bag = [];
  if (totalPriceIncrement - tottalPriceDecrements < 200) {
    handling_bag.push(2);
  } else if (totalPriceIncrement - tottalPriceDecrements < 400) {
    handling_bag.push(4);
  } else if (totalPriceIncrement - tottalPriceDecrements <= 500) {
    handling_bag.push(6);
  } else if (totalPriceIncrement - tottalPriceDecrements > 800) {
    handling_bag.push(10);
  }
  // console.log(handling_bag);
  const Address_Sendd__zus = () => {
    // useEffect(() => {
    setAddress_data(Changevalue);
    setOpen(false);

    // }, [Changevalue]);
  };

  const router = useRouter();

  const SpinnerFunction = () => {
    setTimeout(() => {
      setSpinner(false);
      // setPaypalClick(true);
      setPaypalClickRadio(selectedOption);
      setPaypalGetData(
        totalPriceIncrement - tottalPriceDecrements + handling_bag[0]
      );
      setGetTotalPrice( totalPriceIncrement - tottalPriceDecrements + handling_bag[0])
      handleSubmit();
    }, 3000);
  };

  const toggleModal = () => {
    setOpen(false);
  };
  const [selectedOption, setSelectedOption] = useState("");
  const [isPaypalclick, setPaypalClick] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    // event.preventDefault();
    console.log(`You have selected: ${selectedOption}`);
    if (selectedOption === "PayPal") {
      router.push('/paypalpage')
      setPaypalClick(true);
      setPaypalGetData(isPaypalGetData); // Set the transaction amount

    }
  };
  return (
    <>
      {/* Button to open modal */}

      {/* Modal */}
      {isopen && (
        <div className="absolute inset-0  bg-opacity-75 flex  justify-start px-[100px] items-start z-40 bg-slate-900">
          <div className="absolute p-6 rounded-lg text-black  shadow-lg mt-[1px] ml-[65.4%] w-[28%] h-[100%] bg-slate-200">
            {/* <h2 className="text-xl font-bold mb-4">Modal Title</h2> */}
            <div className="-my-2 flex justify-start items-center">
              <span className="text-[16px] text-black font-semibold">
                My order
              </span>
              <Button
                className=" bg-red-700 left-[360px] absolute top-[3px]"
                onClick={toggleModal}
              >
                X
              </Button>
            </div>
            {/* {Item_List} */}

            <div className="scroll-m-2 no-scrollbar my-[20px] max-h-[264px]  w-[400px] -ml-2 overflow-y-auto bg-white rounded-md border-[1px] border-slate-400">
              <div className="flex items-center justify-around  border-[1px] border-slate-500   gap-10 bg-white rounded-lg h-[50px] w-[300px]  mx-2 my-2">
                <GiStopwatch className="text-[30px]" />
                <div className="text-start text-gray-800 ">
                  <span>Delivery in 16 minutes</span>
                  <p>
                    Shipment of{" "}
                    {tottalSavePriceIncrement.length -
                      tottalSavePriceDecrement.length}{" "}
                    items
                  </p>
                </div>
              </div>
              {newItem_List_Data.map((val, id) => {
                return (
                  <div key={id} className="p-2">
                    <div className="text-black  flex items-center gap-3">
                      <Image
                        className="border-4 rounded-sm"
                        src={val.image}
                        alt="product image"
                        width={80}
                        height={80}
                      />
                      <div className="text-start">
                        <p className="text-[14px]">{val.Product_name}...</p>
                        <p>{val.weight}</p>
                        <p className="flex justify-start items-center text-[15px]">
                          <FaRupeeSign className="text-[12px]" />
                          {val.price}
                        </p>
                      </div>
                      {/* <div className="flex text-start items-center ml-10">
                        <Button className="w-[80px] bg-green-600 hover:bg-green-600">
                          <Button
                            className=" bg-green-600 hover:bg-green-600	border-none text-white h-[10px] w-[10px]"
                            // onClick={handleDecrement}
                          >
                            -
                          </Button>
                          <span className="">{1}</span>
                          {/* {Count_Data(1)} */}
                      {/* <Button */}
                      {/* className="hover:bg-green-600 bg-green-600 text-white h-[10px] w-[10px]" */}
                      {/* // onClick={handleIncrement} */}
                      {/* > */}
                      {/* + */}
                      {/* </Button> */}
                      {/* </Button> */}
                      {/* </div>} */}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="text-start bg-white rounded-md -my-[10px]  w-[400px] border-[1px] -ml-2 border-slate-400">
                <p className="py-2 mx-2 text-[16px] font-semibold">
                  Bill details
                </p>
                <div>
                  <div className="flex justify-between w-[350px] ml-5">
                    <p className="flex items-center gap-2 p-1 text-[13px]">
                      <FaBook />
                      items total
                    </p>
                    <div className="flex items-center">
                      {" "}
                      <FaIndianRupeeSign classNam="" />
                      {totalPriceIncrement - tottalPriceDecrements}
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 w-[350px] ml-5">
                    <p className="flex items-center gap-2 p-1 text-[13px] ">
                      <MdOutlineElectricBike />
                      Delivery charge
                      <GrCircleInformation />
                    </p>
                    <div>
                      {totalDataPrice > 99
                        ? "FREE"
                        : totalDataPrice < 25
                        ? "$25"
                        : "$25"}
                    </div>
                  </div>
                  <div className="flex justify-between w-[350px] ml-5">
                    <p className="flex items-center gap-2 p-1  text-[13px]">
                      <IoBagHandleOutline />
                      Handling charge
                      <GrCircleInformation />
                    </p>
                    <div className="flex items-center">
                      {" "}
                      <FaIndianRupeeSign />
                      {handling_bag}
                    </div>
                  </div>
                </div>
                <div className="flex justify-around text-[16px] gap-[200px]  ">
                  <p className="text-[16px] -ml-4 font-semibold">Grand total</p>
                  <div className="flex items-center">
                    <FaIndianRupeeSign classNam="" />
                    {totalPriceIncrement -
                      tottalPriceDecrements +
                      handling_bag[0]}
                  </div>
                </div>
              </div>

              <div className="w-[390px] text-start my-[15px]  text-[18px] bg-white rounded-md border-[1px] border-slate-400 -ml-2">
                <p className="ml-2 my-[2px] font-semibold">
                  Cancellation Policy
                </p>
                <p className="text-[13px] ml-2 bg-white  text-gray-700 rounded-md py-1 text-start !w-[370px] whitespace-normal !h-[50px]">
                  Orders cannot be cancelled once packed for delivery. In case
                  of unexpected delays, a refund will be provided, if
                  applicable.
                </p>
              </div>
              <div className="text-start bg-white ">
                <span className="text-[18px] text-black ">Payment Option</span>
                <form onSubmit={handleSubmit}>
                  <p className="my-2 flex justify-start  items-center gap-5 text-[15px]">
                    <div>
                      <label>
                        <input
                          type="radio"
                          value="PayPal"
                          className="text-4xl"
                          checked={selectedOption === "PayPal"}
                          onChange={handleOptionChange}
                        />
                        PayPal
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value="Stripe"
                          checked={selectedOption === "Stripe"}
                          onChange={handleOptionChange}
                        />
                        Stripe
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value="Google pay"
                          checked={selectedOption === "Google pay"}
                          onChange={handleOptionChange}
                        />
                        Google pay
                      </label>
                    </div>
                  </p>
                </form>
              </div>
              <div
                className="absolute -bottom-[30px] right-[10px] bg-green-700 w-[95%] rounded-md text-white h-[60px] my-[50px] flex justify-around gap-[130px] items-center"
                onClick={() => setSpinner(true)}
              >
                <div>
                  {isSpinner ? (
                    <CgSpinner
                      className="animate-spin rotate-360 !text-[15px] w-[100px]  h-[30px] font-semibold"
                      onClick={SpinnerFunction()}
                    />
                  ) : (
                    <div className="flex justify-around items-center gap-[160px]">
                      <div className="grid grid-cols-1   font-semibold">
                        <p className="flex items-center">
                          <FaIndianRupeeSign classNam="text-[18px]" />
                          {totalPriceIncrement -
                            tottalPriceDecrements +
                            handling_bag[0]}
                        </p>
                        <p className="ml-1">TOTAL</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-[18px] font-semibold">
                          Proceed To Pay
                        </span>
                        <MdKeyboardArrowRight className="text-[18px] !-ml-[10px] w-[50px]  h-[30px] font-semibold" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {isPaypalclick && <PayPalButton isPaypalGetData={isPaypalGetData} />}
          {/* {isPaypalclick && <AboutPage isPaypalGetData={isPaypalGetData} />} */}
        </div>
      )}
    </>
  );
}
