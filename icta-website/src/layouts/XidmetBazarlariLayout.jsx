import React, { useEffect, useState } from "react";
import SectionLayout from "../layouts/index";

const XidmetBazarlariLayout = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then(res => res.json())
      .then(data => {
        const xidmetBazarlariSection = data.navigation.sections.find(
          (s) => s.title === "Xidmət bazarları"
        );
        if (xidmetBazarlariSection) setMenu([xidmetBazarlariSection]);
      });
  }, []);

  return <SectionLayout menuData={menu} />;
};

export default XidmetBazarlariLayout;
