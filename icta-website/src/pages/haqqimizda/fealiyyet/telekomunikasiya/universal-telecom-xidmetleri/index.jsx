import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../../context/DataContext";

const UniversalTelecomXidmetleri = () => {
  const [data, setData] = useState(null);
  const { getSectionData } = useContext(DataContext);
  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Telekommunikasiya",
      "Universal telekom xidmətləri"
    );
    setData(result);
    if (result) {
      setData({
        ...result,
        section: "Haqqımzıda",
        sectionTitle: "Fəaliyyət",
        telecommunicationTitle: "Universal telekom xidmətləri",
      });
    }
  },[getSectionData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
        <h1 className="text-[24px] font-medium pt-8 pb-6">{data.title}</h1>
        {data.desc1.map((el) => (
          <p
            className="text-[#525865] mb-8"
            dangerouslySetInnerHTML={{ __html: el }}
          />
        ))}
      </div>
    </div>
  );
};

export default UniversalTelecomXidmetleri;
