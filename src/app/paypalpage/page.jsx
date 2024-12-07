
'use client'
import React from "react";
import { useStore_Data } from "../store/zustand_data";
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PayPalButton() {
  const { GetTotalPrice } = useStore_Data();
  
  const paypalRef = useRef(); // Reference to PayPal button container
  const router = useRouter(); // For redirecting upon transaction completion
  const [isTransactionComplete, setIsTransactionComplete] = useState(false);
  
  // Function to handle post-transaction logic
  const handleTransactionComplete = (payerName) => {
    toast.success(`Transaction completed by ${payerName}`);

    setIsTransactionComplete(true);
    // alert(`Transaction completed by ${payerName}`);
  };

  useEffect(() => {
    // Only render PayPal buttons if there's valid data for the amount
    if (!GetTotalPrice) return;

    const renderPayPalButtons = () => {
      if (!paypalRef.current) {
        console.error('PayPal container element is not available');
        return;
      }

      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: GetTotalPrice, // Pass dynamic transaction amount
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            handleTransactionComplete(details.payer.name.given_name);
          });
        },
        onError: (err) => {
          console.error('PayPal Checkout onError:', err);
          alert('There was an issue with the PayPal transaction. Please try again.');
        },
      }).render(paypalRef.current);
    };

    // Ensure PayPal script is available before rendering
    if (window.paypal) {
      renderPayPalButtons();
    } else {
      console.error('PayPal script not available');
    }

    return () => {
      if (paypalRef.current && paypalRef.current.innerHTML) {
        paypalRef.current.innerHTML = ''; // Clean up PayPal button
      }
    };
  }, [GetTotalPrice]);

  // Redirect after successful transaction
  useEffect(() => {
    if (isTransactionComplete) {
    setTimeout(() => {
      
    }, 1000);
      router.push('/ordersummery'); // Redirect to home page
    }
  }, [isTransactionComplete, router]);

  
  return (
    <div className=" w-[500px] mx-[30%] my-[10px]">
      <ToastContainer />
      <div  ref={paypalRef}></div>
    </div>
  );
}

export default PayPalButton;