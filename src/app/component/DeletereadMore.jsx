'use client'


import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function DeletereadMore() {
    const [ReadMoreHidde, setReadMoreHidde] = useState("true");
    const [ReadMore, setReadMore] = useState("false");
    const [ShowDeleteDetails, setShowDeleteDetails] = useState("true");
    const [OrderDetails, setOrderDetails] = useState('true');


    const HiddeenReadMoreAndTilte = () => {
        setReadMoreHidde("false");
        setReadMore("false");
        setShowDeleteDetails("false");
        setOrderDetails('false');
      };

      const ReadMoreDetails = () => {
        setReadMoreHidde("false");
        setReadMore("true");
      };

  return (
    <div>
      <div>
            {OrderDetails === 'true' ? ( <div>
            <p className="text-[15px] font-semibold">Account privacy and policy</p>
            <p className="my-5 text-[12px]">
            We i.e. "Blink Commerce Private Limited", are committed to protecting
            the privacy and security of your personal information. Your privacy is
            important to us and maintaining your trust is paramount.
            </p>
             </div>) : (<></>)
             }

          {ReadMoreHidde === "true" ? (
            <div
              className="text-[13px] -my-[20px] flex items-center text-green-800 cursor-pointer "
              onClick={() => ReadMoreDetails()}
            >
              Read more <BiSolidDownArrow className="text-[10px]" />
            </div>
          ) : (
            <></>
          )}
          {ReadMore === "true" ? (
            <p className="-my-[10px] text-[12px]">
              This privacy policy explains how we collect, use, process and
              disclose information about you. By using our website/ app/
              platform and affiliated services, you consent to the terms of our
              privacy policy (“Privacy Policy”) in addition to our ‘Terms of
              Use.’ We encourage you to read this privacy policy to understand
              the collection, use, and disclosure of your information from time
              to time, to keep yourself updated with the changes and updates
              that we make to this policy. This privacy policy describes our
              privacy practices for all websites, products and services that are
              linked to it. However this policy does not apply to those
              affiliates and partners that have their own privacy policy. In
              such situations, we recommend that you read the privacy policy on
              the applicable site. Should you have any clarifications regarding
              this privacy policy, please write to us at info@blinkit.com
            </p>
          ) : (
              <></>
            )}
            {/* </p> */}
        {ShowDeleteDetails === "true" ? (
          <div
            className="flex my-[30px] items-center gap-[400px] w-[700px] h-[70px] border-2  border-gray-500 cursor-pointer rounded-2xl"
            onClick={() => HiddeenReadMoreAndTilte()}
          >
            <div className="flex mx-5 items-center gap-2 w-[200px] ">
              <p className="text-[25px]">
                <RiDeleteBin6Line />
              </p>
              <div className="">
                <p className="text-[14px] font-bold whitespace-nowrap">
                  Request to delete account
                </p>
                <p className="text-[10px] whitespace-nowrap">
                  Request to closure of your account
                </p>
              </div>
            </div>
            <div className="">
              <p className="text-[22px]">
                <IoIosArrowForward />
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="grid grid-cols-1">
              <spam className="font-bold text-[16px]">Delete my account</spam>
              <spam className=" text-[10px]">
                Why would you like to delete your account
              </spam>
            </div>
            <div className="my-5">
              <span className="flex items-center gap-[390px] text-gray-600 cursor-pointer my-4">
                <p className="mx-5 text-[14px] !font-medium">
                  I don't want to use Blinkit anymore
                </p>
                <p>
                  <IoIosArrowForward className=" text-[20px] text-black" />
                </p>
              </span>
              <p className="w-[700px] h-[1px] bg-gray-300"></p>
              <span className="flex items-center gap-[430px] text-gray-600 cursor-pointer my-4">
                <p className="mx-5 text-[14px] !font-medium">
                  I'm using a different account
                </p>
                <p>
                  <IoIosArrowForward className=" text-[20px] text-black" />
                </p>
              </span>
              <p className="w-[700px] h-[1px] bg-gray-300"></p>
              <span className="flex items-center gap-[430px] text-gray-600 cursor-pointer my-4">
                <p className="mx-5 text-[14px] !font-medium">
                  I'm worried about my privacy
                </p>
                <p>
                  <IoIosArrowForward className=" text-[20px] text-black" />
                </p>
              </span>
              <p className="w-[700px] h-[1px] bg-gray-300"></p>
              <span className="flex items-center gap-[300px] text-gray-600 cursor-pointer my-4">
                <p className="mx-5 text-[14px] whitespace-nowrap !font-medium">
                  You are sending me too many emails/notifications
                </p>
                <p>
                  <IoIosArrowForward className=" text-[20px] text-black" />
                </p>
              </span>
              <p className="w-[700px] h-[1px] bg-gray-300"></p>
              <span className="flex items-center gap-[410px] text-gray-600 cursor-pointer my-4">
                <p className="mx-5 text-[14px] !font-medium">
                  This app is not working properly
                </p>
                <p>
                  <IoIosArrowForward className=" text-[20px] text-black" />
                </p>
              </span>
              <p className="w-[700px] h-[1px] bg-gray-300 my-2"></p>
              <span className="mx-5 text-[16px] text-gray-600 cursor-pointer ">
                Other{" "}
              </span>
            </div>
          </div>
        )}

          </div>
    </div>
  );
}

export default DeletereadMore;
