import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../../context/DataContext";

const IktaStartegiya = () => {
  const [data, setData] = useState(null);
  const { getSectionData } = useDataContext();

  useEffect(() => {
    const result = getSectionData("Haqqımızda", "İKTA strategiya");
    setData(result);
    if (result) {
      setData({
        ...result,
        section: "Haqqımızda",
      });
    }
  }, [getSectionData]);

  if (!data) return <div>Loading...</div>;

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

      <div className="pt-10 pb-10">
        {data.img && (
          <img
            src={data.img}
            alt={data.title}
            className="max-w-full mx-auto rounded-md shadow"
          />
        )}
      </div>
    </div>
  );
};

export default IktaStartegiya;
