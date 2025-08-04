import React, { useEffect, useState } from "react";
import SectionLayout from "../layouts/index";

const HaqqimizdaLayout = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then(res => res.json())
      .then(data => {
        const haqqimizdaSection = data.navigation.sections.find(
          (s) => s.title === "Haqqımızda"
        );
        if (haqqimizdaSection) setMenu([haqqimizdaSection]);
      });
  }, []);

  return <SectionLayout menuData={menu} />;
};

export default HaqqimizdaLayout;
