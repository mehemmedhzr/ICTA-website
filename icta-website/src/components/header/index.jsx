import React from "react";
import Navbar from "@/components/header/Navbar";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <div className="bg-blue-900 h-[200px] pt-[44px] w-full">
      <div className="flex justify-center px-4">
        <div className="bg-white w-full rounded-4xl flex justify-between items-center">
          <div>
            <img
              src={logo}
              alt="logo"
              className="ml-5 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto"
            />
          </div>
          <div>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
