"use client";

import { React, useState,useEffect } from "react";
import Header from "../HeaderPage/header";
import Banner_first from "../banner_1/Banner_first";
import Banner_Second from "../banner_2/banner_Second";
import MultipleIteams from "../component/MultipleIteams";
import Daily_base from "../component/Daily_base";
import Rolling_Paper from "../component/Rolling_paper_bacco";
import Sancks_Munchies from "../component/Snacks & Munchies";
import Hookah from "../component/Hookah";
import Mouth_Fresh from "../component/Mouth fresheners";
import Cold_Drinks from "../component/Cold Drinks & Juices";
import Candies_Gums from "../component/Candies & Gums";
import LinkCategories from "../component/Limk_Categories";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
import Location_page from "../current_location/Location_page";


function Dashboard() {
  const [isLoader, setLoader] = useState(true);
  // console.log('PayPal Client ID:', process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);


  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  },[]);

  // if (isLoader) {
  //   return <Loader />;
  // } else {
    return (
      <div>
        <Header />
        <Banner_first />
        <Banner_Second />
        <MultipleIteams />
         <Daily_base />
        <Rolling_Paper />
        <Sancks_Munchies />
        <Hookah />
        <Mouth_Fresh />
        <Cold_Drinks />
        <Candies_Gums />
        <LinkCategories />
        <Footer />
      </div>
    );
  }
// }

export default Dashboard;
