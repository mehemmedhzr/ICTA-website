import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";

const SectionLayout = ({ menuData }) => {
  return (
    <div className="bg-[rgb(243,246,250)] min-h-screen">
      <div className="w-full">
        <img src="/images/AboutHead.png" alt="Header" className="w-full object-cover" />
      </div>

      <div className="flex justify-center py-10 px-4">
        <div className="w-full max-w-7xl flex gap-6">
          <aside className="w-[300px] shrink-0">
            <Sidebar menu={menuData} />
          </aside>

          {/* Sağ content sahəsi */}
          <section className="flex-1 bg-white p-6 rounded-lg shadow-sm">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
};

export default SectionLayout;
