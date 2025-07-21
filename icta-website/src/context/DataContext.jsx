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
        const homePage = data.homePage || {};

        setActivity(homePage.activities || []);
        setServices(homePage.services || []);
        setNews(homePage.news || []);
        
        setUseful(data.usefulLinks || []);
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
