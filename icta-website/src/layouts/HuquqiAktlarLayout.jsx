import React, { useEffect, useState } from "react";
import SectionLayout from "../layouts/index";

const HuquqiAktlarLayout = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then(res => res.json())
      .then(data => {
        const huquqiAktlarSection = data.navigation.sections.find(
          (s) => s.title === "Hüquqi aktlar"
        );
        if (huquqiAktlarSection) setMenu([huquqiAktlarSection]);
      });
  }, []);

  return <SectionLayout menuData={menu} />;
};

export default HuquqiAktlarLayout;
