// InputOTPDemo
"use client ";
import React, { useRef, useState } from "react";
import Otp_otp from "./Otp_veryfay";
import Otp_number from "./Otp_number";
import { useStore_Data } from "../store/zustand_data";

const InputOTPDemo = ({ onComplete }) => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const [isOpen, setisOpen] = useState(false);
  const [CloseOtpPage, setCloseOtpPage] = useState(false);
  const [CloseOtpLoder, setCloseOtpLoder] = useState(false);
  const [CloseOtpFunc, setCloseOtpFunc] = useState("");
  const inputRefs = useRef([]);

  const { setGetOtpNumber } = useStore_Data();

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

      // If OTP is complete, trigger onComplete callback
      if (newOTP.every((digit) => digit !== "")) {
        setisOpen(true);
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
  //   const newnumberdata = Number(CloseOtpFunc)
  //   console.log(newnumberdata)

  let result = Array.from(CloseOtpFunc).map((i) => Number(i));
console.log(result);
// setGetOtpNumber(result);


  return (
    <div className="flex gap-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          type="text"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength={1}
          s
          className="w-14 h-14 text-center border border-t-0 border-l-0 border-r-0 !text-black border-black  outline-none rounded-md bg-transparent"
        />
      ))}
      {CloseOtpLoder && <Otp_number setCloseOtpLoder={setCloseOtpLoder} />}
      {isOpen && <Otp_otp CloseOtpPage={CloseOtpPage} />}
    </div>
  );
};

export default InputOTPDemo;
