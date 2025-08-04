import React, { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [activity, setActivity] = useState([]);
  const [services, setServices] = useState([]);
  const [news, setNews] = useState([]);
  const [useful, setUseful] = useState([]);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((data) => {
        const homePage = data.homePage || {};
        setActivity(homePage.activities || []);
        setServices(homePage.services || []);
        setNews(homePage.news || []);
        setUseful(data.usefulLinks || []);
        setJsonData(data.navigation?.sections || []);
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
      });
  }, []);

  const findDeepSubsection = (sections, titles) => {
    if (!sections || titles.length === 0) return null;
    const [currentTitle, ...restTitles] = titles;
    const currentSection = sections.find((item) => item.title === currentTitle);
    if (!currentSection) return null;
    if (restTitles.length === 0) {
      return currentSection;
    }

    return findDeepSubsection(currentSection.subsections, restTitles);
  };

  const getSectionData = (...titles) => {
    if (!jsonData) return null;
    return findDeepSubsection(jsonData, titles);
  };

  return (
    <DataContext.Provider
      value={{
        activity,
        services,
        news,
        useful,
        getSectionData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
export default DataProvider;
