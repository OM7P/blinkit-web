// components/Modal
"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useStore_Data } from "../store/zustand_data";
import { Button } from "@/components/ui/button";
import { FcHome } from "react-icons/fc";
import { HiOutlinePencil } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import Header from "../HeaderPage/header";
import { RiUserLocationLine } from "react-icons/ri";
import { FaBookReader, FaRupeeSign } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { GiStopwatch } from "react-icons/gi";
import Image from "next/image";
import { BiSolidDownArrow } from "react-icons/bi";
// import { useStore_Data } from "../store/zustand_data";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import DeletereadMore from "../component/DeletereadMore";

export default function OrderHistory({ isOpen, setIsopen }) {
  const [Changevalue, setChangevalue] = useState("");
  const {
    setAddress_data,
    GetLastProductData,
    IncrementPriceSave,
    DecrementPriceSave,
    GetOtpNumber,
    GetTotalPrice,
  } = useStore_Data();
  const router = useRouter();
  const TranferNavigat = () => {
    router.push("/");
  };

  const toggleModal = () => {
    setIsopen(false);
  };

  //   console.log("order history data product::::", GetLastProductData);
  //   console.log("GetTotalPrice in order history:", GetTotalPrice);
  const [orderShow, setOrderShow] = useState(false);
  const [OrderID, setOrderID] = useState(false);
  const [OrderPrice, setOrderPrice] = useState(false);
  const [OrderDetails, setOrderDetails] = useState(false);

  // console.log("Frist:::", ReadMoreHidde);
  // console.log("second:::", ReadMore);

  const SelectItemType = (selecttype) => {
    // My Address
    if ("a" === selecttype) {
      //   console.log("first");
      setOrderDetails(false);
      setOrderID(false);
      setOrderPrice(false);
      setOrderShow(true);
      // setReadMoreHidde("true");
      // setReadMore("false");
      // setShowDeleteDetails("true");
    } else if ("b" === selecttype) {
      //   console.log("b");
      // My order
      setOrderDetails(false);
      setOrderID(true);
      setOrderPrice(false);
      setOrderShow(false);
      // setReadMoreHidde("true");
      // setReadMore("false");
      // setShowDeleteDetails("true");
    } else if ("c" === selecttype) {
      //   console.log("first");
      setOrderDetails(true);
      setOrderID(false);
      setOrderPrice(false);
      setOrderShow(false);
      // setReadMoreHidde("true");
      // setReadMore("false");
      // setShowDeleteDetails("true");
    } else if ("d" === selecttype) {
      //   console.log("first");
      setOrderDetails(false);
      setOrderID(false);
      setOrderPrice(true);
      setOrderShow(false);
      // setReadMore(false);
      // setReadMoreHidde("true");
      // setReadMore("false");
      // setShowDeleteDetails("true");
    }

  };
  useEffect(() => {
    setOrderShow(true)
    }, []);

  const Address_Sendd__zus = () => {
    setAddress_data(Changevalue);

  };

  //   console.log("on chnage data pass:", Changevalue);

  const ChangeFunction = (event) => {
    setChangevalue(event.target.value);
  };
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

  return (
    <>
      <Header />
      {/* Button to open modal */}
      <div className="absolute inset-0  bg-opacity-75 flex justify-start items-start z-50 ">
        <div className="p-6 rounded-lg ml-[180px]  mt-[100px] shadow-lg w-[70%] h-[80%] border-[0.1px] border-slate-200">
          <div className="flex">
            <div className=" absolute w-[1px] h-[80%] bg-slate-200 ml-[200px] -mt-[23px] "></div>
            <div className=" mt-[40px] text-[20px]">
              <p
                className="absolute top-[125px] flex gap-1 text-[13px] mx-10 text-black justify-start items-center"
              >
                +91{GetOtpNumber}
              </p>

              <div className="  w-[150%] h-[1px] -ml-6 bg-slate-200 "></div>
              <p
                onClick={() => SelectItemType("a")}
                className="cursor-pointer flex gap-1 text-[13px] mx-7 my-5 text-black justify-start items-center"
              >
                <FaBookReader />
                My Address
              </p>
              <div className="  w-[150%] h-[1px] -ml-6 bg-slate-200 "></div>
              <p
                onClick={() => SelectItemType("b")}
                className="cursor-pointer flex gap-1 text-[13px] mx-5 my-5 text-black justify-start items-center"
              >
                <RiUserLocationLine />
                My Order
              </p>
              <div className="  w-[150%] h-[0.5px] -ml-6 bg-slate-200 "></div>
              <p
                onClick={() => SelectItemType("c")}
                className="cursor-pointer flex gap-1 text-[13px] mx-5 my-5 text-black justify-start items-center"
              >
                <FaUserLock />
                Account Privacy
              </p>
              <div className="  w-[150%] h-[0.5px] -ml-6 bg-slate-200 "></div>
              <p
                onClick={() => SelectItemType("d")}
                className="cursor-pointer flex gap-1 text-[13px] mx-5 my-5 text-black justify-start items-center"
              >
                <CiUser />
                Order Price
              </p>
              <div className="  w-[150%] h-[0.5px] -ml-6 bg-slate-200 "></div>
              <p
                onClick={() => TranferNavigat()}
                className="cursor-pointer flex gap-1 text-[13px] mx-10 my-5 text-black items-center"
              >
                Logout
              </p>
              <div className="  w-[150%] h-[0.5px] -ml-6 bg-slate-200 "></div>
            </div>
          </div>
          <div className="  relative bottom-[330px] left-[250px] w-[70%]  h-[500px]">
            {/* fisrt My address */}
            <div>
              {orderShow && (
                <div>
                  <p className="mx-5">My Address</p>
                  <div className="w-[100%] h-[160px] bg-gray-100 rounded-xl p-[10px] text-[10px] my-10">
                    <div className="flex justify-start items-center gap-2">
                      <p className="w-[30px] h-[30px] bg-amber-300 rounded-2xl flex justify-center items-center">
                        <FcHome className="w-[20px] h-[20px]" />
                      </p>
                      <p className="text-[18px] font-mono font-semibold">
                        Home
                      </p>
                    </div>
                    <div className="mx-[40px] my-5 text-[13px]">
                      <p>
                        Ganesh nagar delhi (west), flat no.110 ram krupa
                        chawal,mukesh nagar Mulund Railway Station, Siddharth
                        Nagar, Mulund West, Mumbai
                      </p>
                      <p className="bg-slate-300 w-[25px] h-[25px]  rounded-2xl mx-2 cursor-pointer flex justify-center items-center my-5">
                        <HiOutlinePencil className=" w-[20px] h-[20px]" />
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* second my order */}
            <div>
              {OrderID && (
                <div>
                  My Order
                  <div className="scroll-m-2 no-scrollbar my-[20px] max-h-[264px]  w-[450px] ml-10 overflow-y-auto bg-white rounded-md  border-slate-400">
                    <div className="flex items-center justify-around  border-slate-500   gap-10 bg-white rounded-lg h-[50px] w-[300px]  mx-16 my-2">
                      <GiStopwatch className="text-[30px] text-green-500" />
                      <div className="text-start text-gray-800 ">
                        <span className="font-semibold text-[16px]">
                          Delivery in 16 minutes
                        </span>
                        <p>
                          Shipment of{" "}
                          {tottalSavePriceIncrement.length -
                            tottalSavePriceDecrement.length}{" "}
                          items
                        </p>
                      </div>
                    </div>
                    {GetLastProductData.map((val, id) => {
                      return (
                        <div key={id} className="p-2">
                          <div className="text-black  flex items-center gap-3">
                            <Image
                              className="rounded-sm"
                              src={val.image}
                              alt="product image"
                              width={80}
                              height={80}
                            />
                            <div className="text-start">
                              <p className="text-[14px]">
                                {val.Product_name}...
                              </p>
                              <p>{val.weight}</p>
                              <p className="flex justify-start items-center text-[15px]">
                                <FaRupeeSign className="text-[12px]" />
                                {val.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="my-5">order id : HD6GE54GD63</p>
                  <p className="flex justify-start items-center">
                    Total price:
                    <FaRupeeSign className="text-[12px]" />
                    {GetTotalPrice}
                  </p>
                  <p className="my-5">Order Type : Success</p>
                </div>
              )}
            </div>
            {/* third section order history */}
            <div>
              {OrderDetails && (
                <div>
                  <DeletereadMore />
                </div>
              )}
            </div>

            <div>
              {OrderPrice && (
                <div className="flex justify-center items-center h-[400px] flex-col">
                  {/* Order Proce */}
                  <Image
                    src="/images/order Details image.webp"
                    width={300}
                    height={100}
                  />
                  <div className="">
                    <p className="text-[15px] my-2 mx-12 font-semibold">
                      You have no saved addresses
                    </p>
                    <p className="text-[14px my-2">
                      {" "}
                      Tell us where you want your orders delivered
                    </p>
                  </div>
                  <Button className="bg-green-700 p-6 "  onClick={() => SelectItemType("a")}>Add New Address</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
