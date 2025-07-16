import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [activity, setActivity] = useState([]);
  const [services, setServices] = useState([]);
  const [news, setNews] = useState([]);
  const [useful, setUseful] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((data) => {
        const home = data.home || [];
        
        setActivity(
          home.find((item) => item.type === "activity")?.data || []
        );
        setServices(
          home.find((item) => item.type === "services")?.data || []
        );
        setNews(
          home.find((item) => item.type === "news")?.data || []
        );
        
        setUseful(data.useful || []);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ activity, services, news, useful }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
