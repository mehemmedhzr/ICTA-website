import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../../../../context/DataContext";

const NomreResusu = () => {
  const [data, setData] = useState(null);
  const { getSectionData } = useDataContext();

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Telekommunikasiya",
      "Nömrə resursu"
    );

    setData(result);

    if (result) {
      setData({
        ...result,
        section: "Haqqımızda",
        sectionTitle: "Fəaliyyət",
        telecommunicationTitle: "Telekommunikasiya",
      });
    }
  },[getSectionData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const number_resource = [
    { name: data.name1, desc: data.desc1 },
    { name: data.name2, desc: data.desc2 },
    { name: data.name3, desc: data.desc3 },
    { name: data.name4, desc: data.desc4 },
    { name: data.name5, desc: data.desc5 },
  ];

  return (
    <div className="pb-8">
      <h1 className="text-[32px] font-medium pt-2">{data.title}</h1>
      <div className="text-sm py-2 border-b pb-8">
        <Link to="/" className="text-gray-500 hover:underline">
          Əsas
        </Link>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-500">{data.section}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-500">{data.sectionTitle}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-500">{data.telecommunicationTitle}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-blue-700 font-medium">{data.title}</span>
      </div>
      <div>
        {number_resource.map((item, index) => (
          <div key={index}>
            <h1 className="text-[24px] font-medium pt-8 pb-5">{item.name}</h1>
            <p className="text-[#525865] mb-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NomreResusu;
