import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../../context/DataContext";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const PoctRabiteLisenziyalari = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);
   const [searchTerm, setSearchTerm] = useState(""); // 🔍 axtarış üçün

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Poçt xidmətləri",
      "Poçt rabitəsi xidmətləri üzrə verilmiş lisenziyaların siyahısı"
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
  const allTableData = [data.tabledata1, data.tabledata2, data.tabledata3].filter(Boolean);

  const filteredData = allTableData.filter((row) => {
    return row[1]?.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
      <div className="mt-6 mb-4 flex justify-between items-center">
        <div>
          {data.desc1.map((el, index) => (
            <div key={index} className="flex gap-3 items-start">
              <FaCheck className="text-green-800 text-[18px] min-w-[20px] mt-1" />
              <p
                className="text-[#525865] mb-4"
                dangerouslySetInnerHTML={{ __html: el }}
              />
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Operator və ya provayder axtarın"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-3 w-full max-w-[295px] h-[50px] outline-none bg-[#f2f4f7] text-sm"
        />
      </div>
      <div className="overflow-auto w-full">
        <div
          className="
            grid border border-gray-300 text-xs
            [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]
            md:[grid-template-columns:repeat(var(--cols),minmax(120px,1fr))]
          "
          style={{
            "--cols": data.tablehead.length,
          }}
        >
          {data.tablehead.map((head, index) => (
            <div
              key={index}
              className="bg-[#498efb] text-white border border-gray-300 px-4 py-2 font-semibold"
              dangerouslySetInnerHTML={{ __html: head }}
            />
          ))}

          {filteredData.length === 0 ? (
            <div className="col-span-full py-4 text-gray-500 text-center border border-gray-300">
              Nəticə tapılmadı.
            </div>
          ) : (
            filteredData.map((row, rowIndex) =>
              row.map((cell, cellIndex) => (
                <div
                  key={`${rowIndex}-${cellIndex}`}
                  className="text-center bg-[#f2f4f7] border border-gray-300 px-4 py-2 break-words"
                >
                  {cell}
                </div>
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PoctRabiteLisenziyalari;
