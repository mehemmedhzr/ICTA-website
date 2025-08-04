import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../../context/DataContext";
import { Link } from "react-router-dom";

const RadioTezlikEhtiyyatlarininMuhafizesi = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Spektr idarəçiliyi",
      "Radiotezlik ehtiyatlarının mühafizəsi"
    );
    if (result) {
      setData({
        ...result,
        section: "Haqqımızda",
        sectionTitle: "Fəaliyyət",
        spectrTitle: "Spektr idarəçiliyi",
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
        <span className="text-gray-500">{data.spectrTitle}</span>
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
        <h1 className="text-[24px] font-medium pt-5 pb-4">{data.name2}</h1>
          {data.desc2.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
         <h1 className="text-[24px] font-medium pt-5 pb-4">{data.name3}</h1>
        <p className="text-[#525865] mb-5">{data.desc3}</p>
      
      </div>
    </div>
  );
};

export default RadioTezlikEhtiyyatlarininMuhafizesi;
