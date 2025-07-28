import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../../context/DataContext";
import { IoEyeSharp } from "react-icons/io5";
import { RiFileDownloadFill } from "react-icons/ri";

const IllikHesabatlar = () => {
  const [data, setData] = useState(null);
  const { getSectionData } = useDataContext();

  useEffect(() => {
    const result = getSectionData("Haqqımızda", "İllik hesabatlar");
    setData(result);
    if (result) {
      setData({ ...result, section: "Haqqımızda" });
    }
  }, [getSectionData]);

  if (!data) return <div>Loading...</div>;

  const poct_resource = [
    { name: data.reponame1, kb: data.repokb1, date: data.repodate1 },
    { name: data.reponame2, kb: data.repokb2, date: data.repodate2 },
    { name: data.reponame3, kb: data.repokb3, date: data.repodate3 },
    { name: data.reponame4, kb: data.repokb4, date: data.repodate4 },
  ];

  return (
    <div className="px-2">
      <h1 className="text-[32px] font-medium pt-2">{data.title}</h1>
      <div className="pb-8 border-b">
        <div className="text-sm py-2">
          <Link to="/" className="text-gray-500 hover:underline">
            Əsas
          </Link>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-gray-500">{data.section}</span>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-blue-700 font-medium">{data.title}</span>
        </div>
      </div>
      {poct_resource.map((el, index) => (
        <div key={index} className="pt-5">
          <div className="flex justify-between gap-3 items-center bg-[rgb(243,246,250)] p-5">
            <div>
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

export default IllikHesabatlar;
