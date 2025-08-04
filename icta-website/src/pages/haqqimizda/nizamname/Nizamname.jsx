import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../../context/DataContext";

const Nizamname = () => {
  const [data, setData] = useState(null);
   const { getSectionData } = useDataContext();

  useEffect(() => {
      const result = getSectionData("Haqqımızda", "Nizamnamə");
      setData(result);
      if(result){
        setData({
          ...result,
          section: "Haqqımızda"
        })
      }
    }, [getSectionData]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="px-2"> 
      <h1 className="text-[32px] font-medium pt-3">NİZAMNAMƏ</h1>

      <div className="text-sm text-gray-500 border-b pb-8 pt-2">
        <Link to="/" className="hover:underline">
          Əsas
        </Link>
        <span className="mx-2">›</span>
        <span>{data.section}</span>
        <span className="mx-2">›</span>
        <span className="text-blue-700 font-medium">{data.title}</span>
      </div>

      <div className="pt-8">
        <h2 className="text-[24px] font-medium pb-6">{data.name}</h2>
        {data.img && (
          <img src={data.img} alt={data.title} className="max-w-full" />
        )}
      </div>

      <div className="flex flex-col gap-4 pt-6">
        <h3 className="text-[20px] font-medium">{data.chartername}</h3>
        {data.charterAbout?.map((text, i) => (
          <p key={i} className="text-[#525865]">
            {text}
          </p>
        ))}
      </div>

      {data.legcharter && data.charterlog && (
        <div className="flex flex-col gap-6 pt-10 pb-16">
          <h2 className="text-[24px] font-medium">{data.legcharter}</h2>
          <h3 className="text-[20px] font-medium">{data.title}</h3>
          {Array(7)
            .fill(data.charterlog)
            .map((text, i) => (
              <p
                key={i}
                className="font-medium border-b border-gray-300 pb-4 text-[#333]"
              >
                {text}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default Nizamname;
