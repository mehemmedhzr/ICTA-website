import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { RiFileDownloadFill } from "react-icons/ri";
import { DataContext } from "../../../context/DataContext";
import { LucideExternalLink } from "lucide-react";

const  Konstusiya =() => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

   useEffect(() => {
      const result = getSectionData("Hüquqi aktlar", "Konstitusiya");
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
    <div>
      <h1 className="text-[32px] font-medium pt-2">{data.title}</h1>

      <div className="text-sm py-2 border-b pb-8">
        <Link to="/" className="text-gray-500 hover:underline">
          Əsas
        </Link>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-500">{data.section}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-blue-700 font-medium">{data.title}</span>
      </div>

          <div className="flex justify-between gap-3 items-center mt-6 bg-[rgb(243,246,250)] p-5">
            <div className="flex items-center gap-5">
              <img src={data.img} alt="" className="size-20" />
              <h1 className="text-[18px] font-medium pt-2">{data.name}</h1>
            </div>
            <div className="flex gap-5">
              <LucideExternalLink  className="text-[20px] text-[rgb(152,162,179)]" />
            </div>
          </div>
        </div>
  );
}

export default Konstusiya;