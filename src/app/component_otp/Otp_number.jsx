"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import InputOTPDemo from "./Input_box_otp";
import Circle_Loader from "../component/Circle_loder";
import Otp_otp from "./Otp_veryfay";
import BallCircle_Loader from "../component/threCirecle_loder";
import { useStore_Data } from "../store/zustand_data";
// import { InputOTPDemo } from "./Input_box_otp";

function Otp_number({ onComplete, setisopenLgin }) {
  const [isopen, setIsOpen] = useState(true);
  const [Succespage, setSuccespage] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [BgColorChange, setBgColorChange] = useState(true);
  const [OtpOutPut, setOtpOutPut] = useState(false);
  const [circleloder, setcircleloder] = useState(false);

  const [otp, setOTP] = useState(["", "", "", ""]);
  const [isOpen, setisOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [CloseOtpPage, setCloseOtpPage] = useState(false);
  const [CloseOtpLoder, setCloseOtpLoder] = useState(false);
  //   const [BallCircle_loder, setBallCircle_loder] = useState(true);
  const [CloseOtpFunc, setCloseOtpFunc] = useState("");
  const inputRefs = useRef([]);
  //   const [InputValue, setInputValue] = useState("");
  const [BallCircle_loder, setBallCircle_loder] = useState(false);
  //   const [OtpOutPut, setOtpOutPut] = useState(false);
  // const { setGetOtpNumber } = useStore_Data();
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
    setGetOtpNumber,
    GetOtpNumber,
    setGetOTPNumber4Digit,
    GetOTPNumber4Digit,
    setGetUserOtpNumber,
    GetUserOtpNumber,
  } = useStore_Data();

  const UserOtpNumber = GetOTPNumber4Digit[3]
    ? Number(GetOTPNumber4Digit[3])
    : "null";

  const handleChange = (index, value) => {
    if (/^\d{0,1}$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      setCloseOtpFunc(newOTP);

      // Move to the next input field automatically
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }

      const loderCircle = () => {
        setTimeout(() => {
          setIsLoading(false);
          setIsOpen(false);

          // Ensure `GetUserOtpNumber` is a valid number
          const UserOtpNumbers = Number(newOTP.join(""));
          if (!isNaN(GetUserOtpNumber) && GetUserOtpNumber === UserOtpNumbers) {
            setSuccespage(true);
            // console.log("OTP matches!", GetUserOtpNumber, UserOtpNumbers);
          } else {
            // setSuccespage(false);
            setIsOpen(true);
            alert(
              "Please try again this is not valied OTP Enter correct OTP!!"
            );
            // console.log(
            //   "OTP does not match.",
            //   GetUserOtpNumber,
            //   UserOtpNumbers
            // );
          }
        }, 5000);
      };

      let result = Array.from(otp).map((i) => Number(i));
      const gscuydsyu = newOTP.join("");
      // console.log("done otp:", gscuydsyu);
      setGetOTPNumber4Digit(gscuydsyu);

      // If OTP is complete, trigger onComplete callback
      if (newOTP.every((digit) => digit !== "")) {
        setisOpen(true);
        setIsLoading(true);
        loderCircle();
        setCloseOtpPage(true);
        setCloseOtpLoder(true);
        onComplete(newOTP.join(""));
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  // const newnumberdata = Number(CloseOtpFunc)
  // console.log("otp number::",CloseOtpFunc)

  useEffect(() => {
    if (GetOtpNumber.length === 10) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, []);

  setTimeout(() => {
    setcircleloder(false);
  }, 4000);

  const OnchnageFunction = (e) => {
    setInputValue(e.target.value);
    const { name, value } = e.target;
    if (value.length === 10) {
      setBgColorChange(false);
    } else {
      setBgColorChange(true);
    }
  };

  function generateOtp() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  const Userotp = generateOtp();
  // console.log("Your OTP is:", Userotp);

  const CheckFunctionOutPut = () => {
    if (InputValue.length === 10) {
      setBallCircle_loder(true); // Show loader
      setTimeout(() => {
        setBallCircle_loder(false); // Hide loader after 3 seconds
        alert(Userotp);
        setGetUserOtpNumber(Userotp);
        setGetOtpNumber(InputValue); // Save OTP number or other action
        setOtpOutPut(true); // Set output for OTP verification screen
      }, 3000);
    } else {
      // console.log("Invalid input length.");
    }
  };

  return (
    <div className="bg-green-100">
      {isopen ? (
        <div>
          <div className="absolute inset-0 bg-opacity-75 flex justify-start px-[530px] py-[150px] items-start z-40 bg-slate-700">
            {OtpOutPut ? (
              <div className="!w-[600px]  !h-[350px] -mx-[100px] bg-white border-2 rounded-xl border-gray-200">
                <IoIosArrowRoundBack
                  onClick={() => setIsOpen(false)}
                  className="text-[40px] cursor-pointer"
                />
                <div className="flex justify-center items-center flex-col -my-[14px]">
                  <p className=" text-[25px]">OTP verification</p>

                  <div className=" my-[30px]  mx-[150px] flex justify-center items-center flex-col ">
                    <p className=" text-[16px]">
                      We have sent to verification code to{" "}
                    </p>
                    <p className=" text-[15px] mx-[100px]">
                      +91-{GetOtpNumber}
                    </p>

                    <div className="flex my-[20px] mx-[60px] gap-2 ">
                      {/* <InputOTPDemo /> */}
                      <div className="flex gap-2">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            type="text"
                            value={digit}
                            onChange={(e) =>
                              handleChange(index, e.target.value)
                            }
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            maxLength={1}
                            s
                            className="w-14 h-14 text-center !text-black border-black border rounded-md bg-transparent"
                          />
                        ))}
                        {/* {CloseOtpLoder && (
                          <Otp_number setCloseOtpLoder={setCloseOtpLoder} />
                        )}
                        {isOpen && <Otp_otp CloseOtpPage={CloseOtpPage} />} */}
                      </div>
                    </div>
                    {isLoading ? (
                      <Circle_Loader className="!my-[10px]" />
                    ) : (
                      <p className="text-green-700 underline whitespace-nowrap mx-[140px]">
                        Resend Code
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="!w-[600px]  !h-[350px] -mx-[100px] bg-white border-2 rounded-xl border-gray-200">
                <IoIosArrowRoundBack
                  onClick={() => setIsOpen(false)}
                  className="text-[40px] cursor-pointer"
                />
                <div className="flex justify-center items-center flex-col -my-[14px]">
                  <Image
                    src="/images/blinkt images.webp"
                    width={150}
                    height={50}
                    className=""
                  />
                  <p className="font-bold text-[25px]">
                    India's last minute app
                  </p>
                  <p>Log in or Sign up</p>
                  <Input
                    className="w-[300px] h-[50px] rounded-xl pl-12 text-[16px] font-semibold"
                    placeholder="Enter mobile number"
                    value={InputValue}
                    onChange={OnchnageFunction}
                    maxlength="10"
                  />
                  <p className="absolute top-[337px] right-[920px] font-semibold">
                    +91
                  </p>
                  <Button
                    className={`my-[20px] w-[300px] h-[50px] rounded-xl  font-semibold tetx-[30px] ${
                      BgColorChange ? `bg-gray-500` : `bg-green-900`
                    }`}
                    onClick={() => CheckFunctionOutPut()}
                  >
                    {BallCircle_loder ? <BallCircle_Loader /> : "Continue"}
                  </Button>
                  <div className="flex justify-center items-center  text-[12px] whitespace-nowrap">
                    <span className="-my-[5px]  text-[12px] flex">
                      By continuing, you agree to our{" "}
                      <p className="underline decoration-dotted">
                        Terms of service
                      </p>{" "}
                      &{" "}
                      <span className="underline decoration-dotted">
                        Privacy policy
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {Succespage && <Otp_otp />}
    </div>
  );
}

export default Otp_number;
