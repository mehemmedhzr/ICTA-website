import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../../context/DataContext";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { RiFileDownloadFill } from "react-icons/ri";

const PoctFealiyyetiHaqqindaHesabatlar = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Poçt xidmətləri",
      "Poçt fəaliyyəti barədə hesabatlar"
    );
    if (result) {
      setData({
        ...result,
        section: "Haqqımızda",
        sectionTitle: "Fəaliyyət",
        spectrTitle: "Poçt xidmətləri",
      });
    }
  }, [getSectionData]);

  if (!data) {
    return <div>Loading...</div>;
  }
  const poct_resource = [
    { name: data.reponame1, kb: data.repokb1, date: data.repodate1 },
    { name: data.reponame2, kb: data.repokb2, date: data.repodate2 },
    { name: data.reponame3, kb: data.repokb3, date: data.repodate3 },
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

      {poct_resource.map((el, index) => (
        <div key={index} className="pt-5">
          <div className="flex justify-between gap-3 items-center  bg-[rgb(243,246,250)] p-5">

          <div className="">
            <h1 className="text-[20px] font-medium pt-2 mb-1">{el.name}</h1>
            <p className="text-[rgb(152,162,179)] mb-3">{el.kb}</p>
             <p className="text-[#525865] mb-3">{el.date}</p>
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

export default PoctFealiyyetiHaqqindaHesabatlar;
