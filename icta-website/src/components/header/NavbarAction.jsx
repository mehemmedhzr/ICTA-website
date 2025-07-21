import React, { useState } from "react";
import { Search, X } from "lucide-react";

const NavbarActions = ({ isMobile = false }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className={`flex ${isMobile ? "flex-col gap-3" : "items-center gap-4 relative"}`}>
        <button
          onClick={() => setIsSearchOpen((prev) => !prev)}
          className="text-[#2D8CFF] text-lg border border-[#2D8CFF] rounded-full h-8 w-8 flex items-center justify-center relative z-20 cursor-pointer"
          aria-label="Toggle Search">
          {isSearchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
        </button>

        <button
          className={`cursor-pointer font-medium text-[#2D8CFF] text-xs border border-[#2D8CFF] rounded-full h-8 ${
            isMobile ? "w-12" : "w-8"
          } flex items-center justify-center`}>
          EN
        </button>

        <button
          type="button"
          className={`bg-[#2D8CFF] w-[200px] text-white font-medium text-[12px] py-5 rounded-full tracking-wider border border-[#2D8CFF] cursor-pointer ${
            isMobile ? "w-full" : ""
          }`}>
          ELEKTRON XİDMƏTLƏR
        </button>
       
      </div>

      {isSearchOpen && !isMobile && (
        <div
          className="fixed top-8  left-30 z-30 w-[65%]  rounded-lg  bg-white  flex items-center justify-center px-4 shadow-md"
          onClick={() => setIsSearchOpen(false)}>
          <input
            autoFocus
            type="text"
            placeholder="Axtar..."
            onClick={(e) => e.stopPropagation()}
            className=" px-4 py-4 text-gray-800 outline-none w-full"
          />
        </div>
      )}

      {isSearchOpen && isMobile && (
        <input
          autoFocus
          type="text"
          placeholder="Axtar..."
          className="mt-2 w-full border border-[#2D8CFF] rounded-full px-4 py-1 text-gray-800 outline-none"
        />
      )}
    </>
  );
};

export default NavbarActions;
