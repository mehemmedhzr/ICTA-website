import React, { useEffect, useState } from "react";
import SectionLayout from "../layouts/index";

const MediaLayout = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then(res => res.json())
      .then(data => {
        const mediaSection = data.navigation.sections.find(
          (s) => s.title === "Media"
        );
        if (mediaSection) setMenu([mediaSection]);
      });
  }, []);

  return <SectionLayout menuData={menu} />;
};

export default MediaLayout;
