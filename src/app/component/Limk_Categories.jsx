import Link from "next/link";
import React from "react";

const fields = [
  "About",
  "Careers",
  "Blog",
  "Press",
  "Lead",
  "Value",
  "Privacy",
  "Terms",
  "FAQs",
  "Security",
  "Mobile",
  "Contact",
  "Partner",
  "Franchise",
  "Seller",
  "Warehouse",
  "Deliver",
  "Resources",
];
const categories = [
  "Vegetables & Fruits",
  "Dairy & Breakfast",
  "Munchies",
  "Cold Drinks & Juices",
  "Instant & Frozen Food",
  "Tea, Coffee & Health Drinks",
  "Bakery & Biscuits",
  "Sweet Tooth",
  "Atta, Rice & Dal",
  "Dry Fruits, Masala & Oil",
  "Sauces & Spreads",
  "Chicken, Meat & Fish",
  "Paan Corner",
  "Organic & Premium",
  "Baby Care",
  "Pharma & Wellness",
  "Cleaning Essentials",
  "Home & Office",
  "Ice Creams & Frozen Desserts",
  "Personal Care",
  "Pet Care",
  "Beauty & Cosmetics",
  "Books",
  "Toys & Games",
  "Print Store",
  "Navratri Specials",
];

function LinkCategories() {
  return (
    <div className="flex justify-start mx-[100px] gap-10 px-10 my-10">
      <div className>
        <p className="text-[20px] font-medium  ">Useful Links</p>
        <div className="grid grid-cols-3 font-lg gap-3 mx-10 w-[500px] text-gray-500">
          {fields.map((field, index) => (
            <div key={index} className="text-[15px]">
              <Link href="/">{field}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="-mx-10">
        <p className=" text-[20px] font-lg -mx-[80px]">Categories</p>
        <div className="grid grid-cols-3 font-lg gap-5 w-[700px] text-[15px] text-gray-500">
          {categories.map((field, index) => (
            <div key={index} className="">
              <Link href="/">{field}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinkCategories;
