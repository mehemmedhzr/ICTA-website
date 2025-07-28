import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { DataContext } from "../../../../../context/DataContext";

const Sertifikatlasdirma = () => {
  const [data, setData] = useState(null);
  const { getSectionData } = useContext(DataContext);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Telekommunikasiya",
      "Sertifikatlaşdırma"
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
  }, [getSectionData]);

  if (!data) return <div>Loading...</div>;
  return (
    <div className="mx-4">
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
        <h1 className="text-[24px] font-medium pt-8 pb-3">{data.name1}</h1>
        {data.desc1.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <FaCheck className="text-green-800 text-[20px] min-w-[20px] mt-1.5" />
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sertifikatlasdirma;
