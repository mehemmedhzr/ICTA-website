import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../../context/DataContext";

const Mobil = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Telekommunikasiya",
      "Mobil"
    );
    if(result){
      setData({
        ...result,
        section: "Haqqımızda",
        sectionTitle: "Fəaliyyət",
        telecommunicationTitle: "Telekommunikasiya",
      })
    }
  }, [getSectionData]);

  if (!data) return <div>Loading...</div>;

  const telecoms = [
    { img: "/images/azercell.png", name: data.name3, desc: data.desc3 },
    { img: "/images/bakcell.png", name: data.name4, desc: data.desc4 },
    { img: "/images/nar.png", name: data.name5, desc: data.desc5 },
    { img: "/images/nax.png", name: data.name6, desc: data.desc6 },
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
        <span className="text-gray-500">{data.telecommunicationTitle}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-blue-700 font-medium">{data.title}</span>
      </div>
      <div>
        <div>
          <h1 className="text-[24px] font-medium pt-8 pb-3">{data.name1}</h1>
          <h1 className="text-[16px] font-medium pt-3 pb-6">{data.name2}</h1>
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
        <div>
          <h1 className="text-[24px] font-medium pt-8 pb-3">{data.name7}</h1>
          {data.desc2.map((el, index) => (
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
      {telecoms.map((item, index) => (
        <div key={index}>
          <div className="flex items-center gap-5">
            <img src={item.img} alt="" className="w-[40px] pt-4" />
            <h1 className="text-[24px] font-medium pt-8 pb-5">{item.name}</h1>
          </div>
          <p className="text-[#525865] mb-4">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Mobil;
