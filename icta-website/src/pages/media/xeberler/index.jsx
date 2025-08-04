import React, { useContext, useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DataContext } from "../../../context/DataContext";
import { useNavigate } from "react-router-dom";

const breadcrumbItems = [
  { label: "Əsas Səhifə", href: "/" },
  { label: "Media", href: "/media" },
  { label: "Xəbərlər" }, // sonuncu səhifədir, linksizdir
];

export default function Xeberler() {
  const navigate = useNavigate();
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData("Media", "Xəbərlər");
    if (result) {
      setData(result);
    }
  }, [getSectionData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <Breadcrumbs items={breadcrumbItems} />
      
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-5">
        {data.news?.map((item) => (
          <div onClick={() => navigate(`/media/xeberler/${item.id}`)}  key={item.id} className="border overflow-hidden shadow-sm cursor-pointer">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{item.date} / {item.time}</p>
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
