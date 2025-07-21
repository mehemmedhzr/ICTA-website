import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";

const HaqqimizdaLayout = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((data) => {
        const haqqimizdaSection = data.navigation.sections.find(
          (s) => s.title === "Haqqımızda"
        );
        if (haqqimizdaSection) setMenu([haqqimizdaSection]);
      });
  }, []);

  return (
    <div className="bg-[rgb(243,246,250)]">
      <div>
        <img src={"/images/AboutHead.png"} alt="" />
      </div>

    <div className="min-h-screen flex items-start justify-center py-10 px-10">
      <div className="container max-w-7xl flex gap-6">
        {/* Sol: Sidebar */}
        <Sidebar menu={menu} />

        {/* Sağ: Content */}
        <div className="flex-1 bg-white p-6 min-h-[calc(100vh-80px)] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HaqqimizdaLayout;
