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
  "Resources"
];

function LinkCategories() {
  return (
    <div className="flex flex-wrap gap-4">
      {fields.map((field, index) => (
        <div key={index} className="border p-2 text-center bg-gray-100">
          {field}
        </div>
      ))}
    </div>
  );
}

export default LinkCategories;
