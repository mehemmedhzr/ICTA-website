import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../../context/DataContext";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const İnternet = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Telekommunikasiya",
      "İnternet"
    );
    if (result) {
      setData({
        ...result,
        section: "Haqqımızda",
        sectionTitle: "Fəaliyyət",
        telecommunicationTitle: "Telekommunikasiya",
      });
    }
  }, [getSectionData]);

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
        <h1 className="text-[24px] font-medium pt-5 pb-4">{data.name1}</h1>
        {data.desc1.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
        <h1 className="text-[24px] font-medium pt-2 pb-4">{data.name2}</h1>
        <p className="text-[#525865] mb-5">{data.desc2}</p>
        {data.desc3.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <FaCheck className="text-green-800 text-[20px] min-w-[20px] mt-1.5" />
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
        <p className="text-[#525865] mb-5">{data.desc4}</p>
        <h1 className="text-[24px] font-medium pt-2 pb-4">{data.name3}</h1>
        {data.img && (
          <div className="pt-3">
            <img src={data.img} alt="İKTA Haqqında" />
          </div>
        )}
        <p className="text-[#525865] mb-5 pt-4">{data.desc5}</p>
        <p className="text-[#525865] mb-5">{data.desc6}</p>
        {data.desc7.map((el, index) => (
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

export default İnternet;
