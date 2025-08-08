import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { LucideExternalLink } from "lucide-react";

const NazirlerKabinetininQerarlari = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData("Hüquqi aktlar", "Nazirlər Kabinetinin qərarları");
    setData(result);
    if (result) {
      setData({
        ...result,
        section: "Hüquqi aktlar",
      });
    }
  }, [getSectionData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-2">
      <h1 className="text-[32px] font-medium pt-2 uppercase">{data.title}</h1>

      <div className="text-sm py-2 border-b pb-8">
        <Link to="/" className="text-gray-500 hover:underline">
          Əsas
        </Link>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-500">{data.section}</span>

        <span className="mx-2 text-gray-500">›</span>
        <span className="text-blue-700 font-medium">{data.title}</span>
      </div>

      <div>

        {data?.desc4?.length &&
          data?.desc6?.length &&
          data?.desc7?.length &&
          data.desc4.map((item, index) => (
            <div key={index} className="flex gap-30 border-b">
            <div  className="mb-4  pb-6 pt-6">
              <p className="text-[#525865] mb-5 text-md">{item}</p>
              <div className="flex gap-4 mt-5">
                <div className="bg-[#F2F4F7] p-3">
                  <p className="text-sm text-gray-600">{data.desc6[index]}</p>
                </div>
                <div className="bg-[#F2F4F7] p-3">
                  <p className="text-sm text-gray-600">{data.desc7[index]}</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <LucideExternalLink  className="text-[18px] text-[rgb(152,162,179)]" />
            </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NazirlerKabinetininQerarlari;
