import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/DataContext";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { RiFileDownloadFill } from "react-icons/ri";

const Terminologiya = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Beynəlxalq fəaliyyət",
      "Terminologiya"
    );
    if (result) {
      setData({
        ...result,
        section: "Haqqımızda",
        sectionTitle: "Fəaliyyət",
        spectrTitle: "Terminologiya",
      });
    }
  }, [getSectionData]);

  if (!data) {
    return <div>Loading...</div>;
  }
    const termo_resource = [
    { name: data.termoname1 },
    { name: data.termoname2 },
    { name: data.termoname3 },
    { name: data.termoname4 },
    { name: data.termoname5 },
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
        <span className="text-blue-700 font-medium">{data.title}</span>
      </div>

       {termo_resource.map((el, index) => (
              <div key={index} className="pt-5">
                <div className="flex justify-between gap-3 items-center  bg-[rgb(243,246,250)] p-5">
                  <div className="">
                    <h1 className="text-[16px] font-medium pt-2 mb-1">{el.name}</h1>
                  </div>
                  <div className="flex gap-5">
                    <IoEyeSharp className="text-[20px] text-[rgb(152,162,179)]" />
                    <RiFileDownloadFill className="text-[20px] text-[rgb(152,162,179)]" />
                  </div>
                </div>
              </div>
            ))}
    </div>
  );
};

export default Terminologiya;
