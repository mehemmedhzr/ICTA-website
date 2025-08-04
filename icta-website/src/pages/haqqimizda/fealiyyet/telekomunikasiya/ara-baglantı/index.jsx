import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../../../../context/DataContext";

const Arabaglanti = () => {
  const { getSectionData } = useDataContext();
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const result = getSectionData(
        "Haqqımızda",
        "Fəaliyyət",
        "Telekommunikasiya",
        "Ara bağlantı"
      );
      setData(result);
      if(result){
        setData({
          ...result,
          section : "Haqqımızda",
          sectionTitle: "Fəaliyyət",
          telecommunicationTitle: "Telekommunikasiya"
        })
      }
    }, [getSectionData]);
  
    if (!data) return <div>Loading...</div>;


  return (
    <div className="pb-8 px-2">
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
        <h1 className="text-[24px] font-medium pt-8 pb-3">{data.title}</h1>
        {data.desc1.map((el) => (
          <p
            className="text-[#525865] mb-4"
            dangerouslySetInnerHTML={{ __html: el }}
          />
        ))}
        <h1 className="text-[24px] font-medium pt-8">{data.name1}</h1>
        <p
          className="text-[#525865] mb-4"
          dangerouslySetInnerHTML={{ __html: data.desc2 }}
        ></p>
        <h1 className="text-[24px] font-medium pt-8">{data.name2}</h1>
        <p className="text-[#525865] mb-4">{data.desc3}</p>
        <h1 className="text-[24px] font-medium pt-8">{data.name3}</h1>
        {data.desc4.map((el) => (
          <p
            className="text-[#525865] mb-4"
            dangerouslySetInnerHTML={{ __html: el }}
          />
        ))}
      </div>
    </div>
  );
};

export default Arabaglanti;
