import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../../context/DataContext";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const Tarifler = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Telekommunikasiya",
      "Tariflər"
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
    <div className="px-2">
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
        <p className="text-[#525865] mb-5">{data.desc1}</p>

        <h1 className="text-[24px] font-medium pt-5 pb-4">{data.name2}</h1>
        <h1 className="text-[16px] font-medium pt-5 pb-4">{data.name3}</h1>

        {data.desc2?.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <FaCheck className="text-green-800 text-[16px] min-w-[20px] mt-1.5" />
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}

        <p className="text-[#525865] mb-5">{data.desc3}</p>

        <h1 className="text-[16px] font-medium pt-5 pb-7">{data.name4}</h1>
        <h1 className="text-[24px] font-medium pt-5 pb-4">{data.name5}</h1>

        {data?.desc4?.length &&
          data?.desc6?.length &&
          data?.desc7?.length &&
          data.desc4.map((item, index) => (
            <div key={index} className="mb-4 border-b pb-4">
               <p className="text-[#525865] mb-5">{item}</p>
              <div className="flex gap-4 mt-5">
                <div className="bg-[#F2F4F7] p-3">
                  <p className="text-sm text-gray-600">{data.desc6[index]}</p>
                </div>
                <div className="bg-[#F2F4F7] p-3">
                  <p className="text-sm text-gray-600">{data.desc7[index]}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tarifler;
