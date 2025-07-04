import React from "react";
import Navbar from "@/components/header/Navbar";
import logo from "../../../public/logo.svg";

const Header = () => {
  return (
    <div className="bg-blue-800 h-[200px] pt-[44px]">
      <div className=" flex justify-around items-center container mx-auto">
        <div className="">
          <img src={logo} alt="logo" />
        </div>

        <div className="">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
