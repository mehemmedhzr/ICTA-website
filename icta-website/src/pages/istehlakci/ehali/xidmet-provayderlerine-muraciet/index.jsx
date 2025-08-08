import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/DataContext";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { ExternalLink, LucideExternalLink } from "lucide-react";

const XidmetProviderlerineMuraciet = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData(
      "İstehlakçı",
      "Əhali",
      "Xidmət provayderinə müraciət et"
    );
    if (result) {
      setData({
        ...result,
        section: "İstehlakçı",
        sectionTitle: "Əhali",
        telecommunicationTitle: "Xidmət provayderinə müraciət et",
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
        <span className="text-blue-700 font-medium">{data.title}</span>
      </div>

      <div>
        <h1 className="text-[20px] font-medium pt-5 pb-4">{data.name1}</h1>

        {data.desc1?.map((el, index) => (
          <div key={index} className="flex pt-2 gap-3 items-start">
            <FaCheck className="text-green-800 text-[16px] min-w-[20px] mt-1.5" />
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}

        <h1 className="text-[20px] font-medium pt-10 pb-7">{data.name2}</h1>
        <h1 className="text-[24px] font-medium pt-5 pb-4">{data.name5}</h1>

        <div className="flex flex-col bg-[#498efb] w-[290px] h-[225px] justify-between items-center p-6">
          <div className="flex justify-between w-[250px]">
            <div className="bg-[#345b986f] flex justify-center items-center rounded-xl">
              <img src={data.icon} alt="" className="size-11 p-3" />
            </div>
            <div>
              <ExternalLink className="w-5 h-5 text-white mt-2" />
            </div>
          </div>
          <div>
            <h1 className="text-[18px] font-medium pt-2 text-white">{data.desc2}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XidmetProviderlerineMuraciet;
