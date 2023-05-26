import React from "react";
import '../../index.css'

const Navbar = () => {
    const onContentIndexClick = (value) => {
      const element = document.getElementById(`content${value}`);
      element.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <div className="flex justify-between bg-blur items-center p-4 fixed left-0 right-0 top-0">
        <div className="lg:w-[22.5%]">
          <h2 className="text-[#434242] font-Poppins text-sm lg:text-base font-semibold ms-5">Alza Hendrian</h2>
        </div>
        <div className="hidden md:block py-1 font-Poppins font-semibold text-2xl">
          MY PROTOFOLIO
        </div>
        <ul className="flex justify-between w-[45%] lg:w-[20%] font-Poppins me-5 cursor-pointer">
          <li onClick={() => onContentIndexClick(1)} className="text-sm lg:text-base">
            Home
          </li>
          <li onClick={() => onContentIndexClick(2)} className="text-sm lg:text-base">
            Project
          </li>
          <li onClick={() => onContentIndexClick(3)} className="text-sm lg:text-base">Contact</li>
        </ul>
      </div>
    );
  };

export default Navbar;
