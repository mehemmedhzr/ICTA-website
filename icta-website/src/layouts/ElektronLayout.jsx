import React, { useEffect, useState } from "react";
import SectionLayout from "../layouts/index";

const ElektronLayout = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then(res => res.json())
      .then(data => {
        const elektronXidmetlerSection = data.navigation.sections.find(
          (s) => s.title === "Elektron xidmətlər"
        );
        if (elektronXidmetlerSection) setMenu([elektronXidmetlerSection]);
      });
  }, []);

  return <SectionLayout menuData={menu} />;
};

export default ElektronLayout;
