import React, { useEffect, useState } from "react";
import SectionLayout from "../layouts/index";

const BazarMelumatlariLayout = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then(res => res.json())
      .then(data => {
        const bazarMelumatlariSection = data.navigation.sections.find(
          (s) => s.title === "Bazar məlumatları"
        );
        if (bazarMelumatlariSection) setMenu([bazarMelumatlariSection]);
      });
  }, []);

  return <SectionLayout menuData={menu} />;
};

export default BazarMelumatlariLayout;
