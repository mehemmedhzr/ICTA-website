import React, { useEffect } from "react";
import Activity from "./activity";
import News from "./news";
import Service from "./service";

const Home = () => {
  return (
    <div className="bg-[#f3f6fa]">
      <Activity />
      <Service />
      <News />
    </div>
  );
};

export default Home;
