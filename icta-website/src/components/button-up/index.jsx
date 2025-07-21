import React, { useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Up_Button = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-end mx-3 pb-5">
      <button
        onClick={handleScrollTop}
        className="bg-[#2D8CFF] w-[48px] h-[48px] cursor-pointer"
      >
        <MdKeyboardArrowUp className="text-white text-2xl mx-3" />
      </button>
    </div>
  );
};

export default Up_Button;
