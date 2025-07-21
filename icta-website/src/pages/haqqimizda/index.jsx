import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const HaqqimizdaLayout = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((data) => {
        const haqqimizdaSection = data.navigation.sections.find((s) => s.title === "Haqqımızda");
        if (haqqimizdaSection) setMenu([haqqimizdaSection]);
      });
  }, []);

  return (
    <div className="container bg-red-300 flex gap-6 py-6">
      {/* Sol tərəf: Sidebar */}
      <Sidebar menu={menu} />

      {/* Sağ tərəf: Content */}
      <div className="flex-1 bg-white rounded-lg shadow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default HaqqimizdaLayout;
