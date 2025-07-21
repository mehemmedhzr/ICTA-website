import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Struktur = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((data) => {
        const haqqimizda = data.navigation?.sections.find(
          (item) => item.title === "Haqqımızda"
        );

        const struktur = haqqimizda?.subsections?.find(
          (sub) => sub.title === "Struktur"
        );

        setData(
          struktur ? { ...struktur, sectionTitle: haqqimizda?.title, section: haqqimizda?.title } : null
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) {
    return <div className="text-center py-10">Yüklənir...</div>;
  }

  return (
    <div className="px-4 md:px-10">
      <h1 className="text-[32px] font-medium pt-8">{data.title}</h1>

      <div className="pb-8">
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

export default Struktur;
