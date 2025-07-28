import React, { useEffect, useState } from "react";
import SectionLayout from "../layouts/index";

const IstehlakciLayout = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then(res => res.json())
      .then(data => {
        const istehlakciSection = data.navigation.sections.find(
          (s) => s.title === "İstehlakçı"
        );
        if (istehlakciSection) setMenu([istehlakciSection]);
      });
  }, []);

  return <SectionLayout menuData={menu} />;
};

export default IstehlakciLayout;
