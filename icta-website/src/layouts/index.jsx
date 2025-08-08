import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "@/components/sidebar";

const SectionLayout = ({ menuData }) => {
  const location = useLocation();
  const mainPath = "/" + location.pathname.split("/")[1];

  let imageSrc = "";
  if (mainPath === "/haqqimizda") {
    imageSrc = "/images/AboutHead.png";
  } else if (mainPath === "/huquqi-aktlar") {
    imageSrc = "/images/huquq.png";
  } else if (mainPath === "/istehlakci") {
    imageSrc = "/images/istehlakci.png";
  }else if (mainPath === "/media") {
    imageSrc = "/images/media.png";
  }else if(mainPath === "/elektron-xidmetler"){
    imageSrc = "/images/elektron.png";
  }

  return (
    <div>

      {imageSrc && (
        <div className="w-full">
          <img
            src={imageSrc}
            alt="Section Header"
            className="w-full object-cover max-h-[300px]"
          />
        </div>
      )}

    <div className="min-h-screen bg-[#f3f6fa]">

      <div className="flex justify-center py-10">
        <div className="w-full max-w-[1200px] flex flex-col xl:flex-row gap-6">
          <div className="w-[300px] shrink-0 hidden xl:block">
            <Sidebar menu={menuData} />
          </div>

          <div className="flex-1 w-full min-h-[300px] max-w-[900px] bg-white xl:p-6 p-3 rounded-lg shadow-sm">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SectionLayout;
