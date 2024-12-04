"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CiCircleCheck, CiSearch } from "react-icons/ci";
import { useStore_Data } from "../store/zustand_data";
import { RiLoader3Fill } from "react-icons/ri";

import { FaRupeeSign } from "react-icons/fa";
import { TbLoader3 } from "react-icons/tb";
import { useRouter } from "next/navigation";
import FinallPage from "../finallpage/page";

const AccordionDemo = () => {
  const router = useRouter();

  const [paybutton, setpaybutton] = useState(false);
  const [CircleLoader, setCircleLoader] = useState(true);
  const [PayNowCircleLoader, setPayNowCircleLoader] = useState(true);
  const {
    Count_Data,
    Single_Items_Prices,
    setDecrementNumbers,
    StorePriceValue,
    Item_Price,
    Item_List,
    Single_Data,
    setIncrementPriceSave,
    setDecrementPriceSave,
    GetLastProductData,
    GetOtpNumber
  } = useStore_Data();
  const box = useRef(null);

  const Functionpaybutton = () => {
    setpaybutton(true);
    setCircleLoader(false);
  };
  const WallertFunctionpaybutton = () => {
    setCircleLoader(false);
  };
  const [inputText, setInputText] = useState(""); // Track user input
  const [InputCardName, setInputCardName] = useState(""); // Track user input
  const [InputCardNumber, setInputCardNumber] = useState(""); // Track user input
  const [InputCardExpriy, setInputCardExpriy] = useState(""); // Track user input
  const [InputCardCVV, setInputCardCVV] = useState(""); // Track user input
  const [InputCardNickName, setInputCardNickName] = useState(""); // Track user input
  const [FinallpageCall, setFinallpageCall] = useState(false); // Track user input
  // const CheckValiedUpi =(inputText)=>{
  //   if(inputText === "")
  // }

  const StopTimerSpin = () => {
    setTimeout(() => {
      setCircleLoader(true);
      setpaybutton(true);
    }, 3000);
  };

  const PayNowTimerSpin = () => {
    setTimeout(() => {
      router.push("/finallpage");
      
    }, 3000);
  };

  const SuccessFullPage = () => {
    setTimeout(() => {
      setPayNowCircleLoader(false);
      setFinallpageCall(true);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "cardName":
        setInputCardName(value);
        break;
      case "cardNumber":
        setInputCardNumber(value);
        break;
      case "cardNickName":
        setInputCardNickName(value);
        break;
      case "cardCVV":
        setInputCardCVV(value);
        break;
      case "cardExpiry":
        setInputCardExpriy(value);
        break;
      case "UPIMail":
        setInputText(value);
        break;
      default:
        break;
    }
    // setInputText(e.target.value); // Update inputText state
  };

  const BrandImages = [
    {
      image: "/images/visa_v2.png",
    },
    {
      image: "/images/mastercard_v2.png",
    },
    {
      image: "/images/rupay_v2.avif",
    },
    {
      image: "/images/m-paymentgetway.webp",
    },
    {
      image: "/images/diner_club_v2.avif",
    },
    {
      image: "/images/card_v3.png",
    },
    {
      image: "/images/amex_v2.avif",
    },
    {
      image: "/images/a30393d22721bb8c560ffd8cc1d23d9b1694117849.webp",
    },
  ];
  const OnliePaymentGetWay = [
    {
      image: "/images/paytem.webp",
    },
    {
      image: "/images/bhim.avif",
    },
    {
      image: "/images/google pay.avif",
    },
    {
      image: "/images/phone pe.webp",
    },
  ];

  const Newbainking = [
    {
      images: "/images/a04b3632472aafbe683e6849b4b865b01662538671.png",
      name: "HDFC",
    },
    {
      images: "/images/4c57d25a9b0c6337c76f440257d3ad491662538687.png",
      name: "ICICI",
    },
    {
      images: "/images/ff4723ab4061e6d5fc8ef1c50b45b1dc1662538396.png",
      name: "Axis",
    },
    {
      images: "/images/27e22cdbca38bfae7196617bd1381e2b1662538850.png",
      name: "Kotak",
    },
    {
      images: "/images/f4ed6e6f3c46ab28118b2e07e6c277111662539004.png",
      name: "SBI",
    },
  ];
  // const onClick = () => {
  //   if (box.current) {
  //     // Change the style of the element referenced by box
  //     box.current.style.border = "2px solid amber"; // Example style change
  //     box.current.style.backgroundColor = "red"; // Example style change
  //   }
  // };

  const [isShowWallet, setisShowWallet] = useState("false");

  return (
    <div>
      <p className="absolute left-[350px] bottom-[650px] text-[30px] font-semibold">
        Select Payment Method
      </p>
      <div className="w-[600px] p-2 border-2 rounded-md mx-[350px] z-50  my-[100px]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger
              onClick={() => {
                setisShowWallet("false");
                setpaybutton(false);
              }}
            >
              <p className="text-[20px] no-underline">Wallets</p>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="w-[200px] h-[130px] bg-cyan-50   border-[1px] border-cyan-600  rounded-md cursor-pointer"
                onClick={() => {
                  setisShowWallet("true");
                }}
              >
                <div className="flex gap-[80px] mx-4 ">
                  <Image
                    src="/images/m-paymentgetway.webp"
                    width={50}
                    height={50}
                    className="my-2"
                  />
                  <p className="text-[30px] my-2 text-teal-700">
                    {" "}
                    <CiCircleCheck />
                  </p>
                </div>
                <div className="flex flex-col mx-4 my-4">
                  <span className="text-[18px] my-2">Mobikwik</span>
                  <span className="text-green-800 text-[15px]">LINK</span>
                </div>
              </div>
              {isShowWallet === "true" ? (
                <div className="my-2">
                  <p className="mx-5 text-gray-600">
                    Linking account is a one-time process. Next time, checkout
                    will be a breeze!
                  </p>
                  <div className="w-[500px] mx-5">
                    <Input
                      placeholder=" Email link with Mobilwik"
                      className="my-3  h-[50px]"
                      value={`${GetOtpNumber}@blinkit.com`}
                    />
                    {/*   */}
                    <Input
                      placeholder="Mobile number"
                      className=" h-[50px]"
                      value={`${GetOtpNumber}`}
                    />
                    <Button
                      className="bg-green-700 hover:none w-[500px] my-2  h-[50px]"
                      onClick={() => WallertFunctionpaybutton()}
                    >
                      {CircleLoader ? (
                        <>Continue</>
                      ) : (
                        <TbLoader3
                          className="animate-spin rotate-360 !text-[15px] w-[100px]  h-[30px] font-semibold"
                          onClick={StopTimerSpin()}
                        />
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger onClick={() => setpaybutton(false)}>
              <p className="text-[20px] no-underline">
                Add credit or debit cards
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-cyan-50 w-[560px] h-[510px]  border-2 rounded-md p-2">
                <p className="flex justify-start items-center gap-5 mx-4 ">
                  <CiCircleCheck className="text-cyan-600  text-[30px]" />
                  Add Debit / Credit / ATM Card
                </p>
                <div className="flex gap-2 mx-4 my-2">
                  {BrandImages.map((item) => (
                    <div className="flex">
                      <Image
                        // className="my-2 flex "
                        src={item.image}
                        width={30}
                        height={30}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <Input
                    name="cardName"
                    placeholder=" Name on Card"
                    className="my-3  h-[50px] 
                      w-[540px] bg-white"
                    value={InputCardName} // Controlled input to show user input
                    onChange={handleInputChange} // Handle text input change
                  />
                  <Input
                    name="cardNumber"
                    placeholder="Card Number"
                    className="my-3 w-[540px] bg-white h-[50px]"
                    value={InputCardNumber} // Controlled input to show user input
                    onChange={handleInputChange} // Handle text input change
                  />
                  <div className="flex gap-10">
                    <Input
                      name="cardExpiry"
                      placeholder=" Expriy date (YY/XX)"
                      className="my-3  h-[50px] bg-white w-[300px]"
                      value={InputCardExpriy} // Controlled input to show user input
                      onChange={handleInputChange} // Handle text input change
                    />
                    <Input
                      name="cardCVV"
                      placeholder="CVV"
                      className="my-3  h-[50px] w-[200px] bg-white "
                      value={InputCardCVV} // Controlled input to show user input
                      onChange={handleInputChange} // Handle text input change
                    />
                  </div>
                  <Input
                    name="cardNickName"
                    placeholder="NickName for card (optional)"
                    className="my-3  h-[50px] bg-white w-[540px]"
                    value={InputCardNickName} // Controlled input to show user input
                    onChange={handleInputChange} // Handle text input change
                  />
                  <Button
                    className="hover:bg-green-800 text-[16px] bg-green-700 hover:none w-[540px] my-2  h-[50px]"
                    onClick={() => WallertFunctionpaybutton()}
                  >
                    {CircleLoader ? (
                      <>Continue</>
                    ) : (
                      <TbLoader3
                        className="animate-spin rotate-360 !text-[15px] w-[100px]  h-[30px] font-semibold"
                        onClick={StopTimerSpin()}
                      />
                    )}
                  </Button>
                  <p className="text-[12px]">
                    We accept Credit and jhf dj Debit Cards from Visa,
                    Mastercard, American Express, Rupay, Pluxee & Diners.
                  </p>
                  <div className="flex my-3 gap-2">
                    <Image
                      // className="my-2 flex "
                      src="/images/0c22aba926507fa8aec8f4a148f6d4b51567413108.avif"
                      width={40}
                      height={40}
                    />
                    <Image
                      // className="my-2 flex "
                      src="/images/c041a394b4e52bead147ac9c933b0e031567413096.webp"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger onClick={() => setpaybutton(false)}>
              <p className="text-[20px] no-underline">Netbanking</p>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <div className="grid grid-cols-4 ">
                  {Newbainking.map((items) => (
                    <div
                      className="w-[100px] rounded-md h-[120px] my-2 cursor-pointer border-[1px] "
                      onClick={() => Functionpaybutton()}
                    >
                      <CiCircleCheck className="text-cyan-600 mx-[75px] text-[20px]" />
                      <Image
                        // className="my-2 flex "
                        src={items.images}
                        width={40}
                        height={40}
                        className="mx-8"
                      />
                      <p className="mx-8 my-5">{items.name}</p>
                    </div>
                  ))}
                </div>
                <div className="w-[500px] flex items-center text-[15px] text-slate-600">
                  <CiSearch className="text-[20px] absolute my-4 mx-2" />{" "}
                  <select className="w-[550px]  h-[50px] rounded-lg bg-white pl-8 border-2 ">
                    <option>All Bank</option>
                    <option>Axis</option>
                    <option>SBI</option>
                    <option>Kotak</option>
                    <option>ICICI</option>
                    <option>HDFC</option>
                  </select>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger onClick={() => setpaybutton(false)}>
              <p className="text-[20px] no-underline">Add New UPI ID</p>
            </AccordionTrigger>
            <AccordionContent>
              {/* <form> */}

              <div className="w-[550px] h-[180px] rounded-md border-[1px] border-cyan-700  bg-cyan-50">
                <p className="flex justify-start items-center gap-5 mx-4 ">
                  <CiCircleCheck className="text-cyan-600  text-[30px]" />
                  Add new UPI
                </p>
                <div className="flex gap-3   mx-8 my-2">
                  {OnliePaymentGetWay.map((item) => (
                    <div className="flex">
                      <Image
                        className=" h-[20px] "
                        src={item.image}
                        width={40}
                        height={150}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-5">
                  <Input
                    placeholder="example@upi"
                    className="my-3  h-[50px] mx-2 bg-white w-[370px]"
                    // value=""
                    rules={{
                      required: "First Name is required",
                      pattern: {
                        value: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
                        message: "First name is not valid",
                      },
                    }}
                    name="UPIMail"
                    type="email"
                    value={inputText} // Controlled input to show user input
                    onChange={handleInputChange} // Handle text input change
                  />
                  <Button
                    className="hover:bg-green-800 text-[16px] bg-green-700 hover:none w-[130px] my-2  h-[50px]"
                    // type="submit"
                    onClick={() => WallertFunctionpaybutton()}
                  >
                    {CircleLoader ? (
                      <>Checkout </>
                    ) : (
                      <TbLoader3
                        className="animate-spin rotate-360 !text-[15px] w-[100px]  h-[30px] font-semibold"
                        onClick={StopTimerSpin()}
                      />
                    )}
                  </Button>
                </div>
                <p className="mx-5 text-[12px] text-gray-500">
                  The UPI ID is in the format of name/phone number@bankname
                </p>
              </div>
              {/* </form> */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <p className="text-[20px] no-underline text-gray-400">Cash</p>
            </AccordionTrigger>
            <p className="text-gray-500">
              Cash on delivery is not applicable on orders with item total less
              than ₹50.
            </p>
            <AccordionContent>
              {/* Cash on delivery is not applicable on orders with item total less than ₹50. */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <p className="text-[20px] no-underline ">Pay Later</p>
            </AccordionTrigger>
            <AccordionContent>
              {/* Yes. It's animated by default, but you can disable it if you prefer. */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="absolute p-2    top-[90px] left-[65%] w-[290px] border-[1px] rounded-md">
        <p className="text-[22px] mx-5 text-slate-600 font">Delivery Address</p>

        <span className=" flex text-[10px] mx-5 text-slate-600">
          <p className="font-bold">Home:</p> Ganesh nagar delhi (west), flat
          no.110 ram krupa chawal,mukesh nagar Mulund Railway Station, Siddharth
          Nagar, Mulund West, Mumbai.
        </span>
        <div className="flex items-center justify-around font-sans w-[105%] -mx-[7px] h-[50px] bg-slate-50">
          <p>My Cart</p>
          <p>{GetLastProductData.length} items</p>
        </div>
        {GetLastProductData.map((val, id) => {
          return (
            <div key={id} className="p-2">
              <div className="text-black  flex items-center gap-3">
                <Image
                  className="rounded-sm"
                  src={val.image}
                  alt="product image"
                  width={60}
                  height={60}
                />
                <div className="text-start">
                  <p className="text-[12px] whitespace-nowrap">
                    {val.Product_name.slice(0, 25)}...
                  </p>
                  <p className="text-[12px]">{val.weight}</p>
                  <p className="flex justify-start items-center text-[12px]">
                    <FaRupeeSign className="text-[10px]" />
                    {val.price}
                  </p>
                </div>
              </div>
              <p className="absolute h-[1px] bg-gray-200 w-[99%] my-[5px] right-[2px]"></p>
            </div>
          );
        })}
        {paybutton ? (
          <Button
            className="bg-green-700 text-[20px] -mx-[25px] font-medium hover:none w-[320px] h-[60px]"
            onClick={() => SuccessFullPage()}
          >
            {PayNowCircleLoader ? (
              <> Pay Now </>
            ) : (
              <RiLoader3Fill
                className="animate-spin rotate-360 !text-[15px] w-[100px]  h-[30px] font-semibold"
                onClick={PayNowTimerSpin()}
              />
            )}
          </Button>
        ) : (
          <Button className="bg-gray-300  text-[20px] -right-[15px] absolute  font-medium hover:none w-[320px] h-[60px]">
            Pay Now
          </Button>
        )}
      </div>
      {FinallpageCall ? <FinallPage /> : ""}
    </div>
  );
};

export default AccordionDemo;
