import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../../context/DataContext";
import { Link } from "react-router-dom";

const RadioSpektrResuslarininTenzimlenmesi = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Spektr idarəçiliyi",
      "Radiospektr resurslarından istifadənin tənzimlənməsi"
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
   const spectr_resource = [
    { name: data.name3, desc: data.desc3 },
    { name: data.name4, desc: data.desc4 },
    { name: data.name5, desc: data.desc5 },
    { name: data.name6, desc: data.desc6 },
    { name: data.name7, desc: data.desc7 }
  ];

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
        <h1 className="text-[24px] font-medium pt-4 pb-4">{data.name1}</h1>
        {data.desc1.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
           <h1 className="text-[24px] font-medium pt-4 pb-4">{data.name2}</h1>
        {data.desc2.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
         {spectr_resource.map((item, index) => (
          <div key={index}>
            <h1 className="text-[24px] font-medium pt-8 pb-5">{item.name}</h1>
            <p className="text-[#525865] mb-4">{item.desc}</p>
          </div>
        ))}
        <h1 className="text-[24px] font-medium pt-4 pb-4">{data.name8}</h1>
        {data.desc8.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
        <h1 className="text-[24px] font-medium pt-4 pb-4">{data.name9}</h1>
        {data.desc9.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
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

export default RadioSpektrResuslarininTenzimlenmesi;
