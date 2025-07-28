import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../../context/DataContext";
import { FaCheck } from "react-icons/fa";

const Lisenziya = () => {
  const [data, setData] = useState(null);
  const { getSectionData } = useContext(DataContext);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Telekommunikasiya",
      "Lisenziya"
    );
    if (result) {
      setData({
        ...result,
        section: "Haqqımızda",
        sectionTitle: "Fəaliyyət",
        telecommunicationTitle: "Telekommunikasiya",
      });
    }
  }, [getSectionData]);

  if (!data) return <div>Loading...</div>;
  const lisenziya = [
    { name: data.name1, desc: data.desc1 },
    { name: data.name2, desc: data.desc2 },
    { name: data.name3, desc: data.desc3 },
  ];

  return (
    <div className="pb-8">
      <h1 className="text-[32px] font-medium pt-">{data.title}</h1>

      <div className="text-sm py-2 border-b pb-8">
        <Link to="/" className="text-gray-500 hover:underline">
          Əsas
        </Link>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-500">{data.section}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-500">{data.sectionTitle}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-500">{data.telecommunicationTitle}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-blue-700 font-medium">{data.title}</span>
      </div>

      {lisenziya.map((item, index) => (
        <div key={index}>
          <div className="flex items-center gap-5">
            <h1 className="text-[24px] font-medium pt-8 pb-5">{item.name}</h1>
          </div>
          <p className="text-[#525865] mb-4">{item.desc}</p>
        </div>
      ))}

      <p className="text-[#525865] mt-6">{data.desc5}</p>

      <div className="max-w-6xl mx-auto py-8">
        <h2 className="text-xl font-semibold mb-5">{data.name4}</h2>

        <table className="min-w-full border border-gray-300 text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border font-none border-gray-300 px-4 py-2">
                {data.tabledesc}
              </th>
              <th className="border border-gray-300 px-4 py-2">
                {data.tabledesc}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">{data.desc1}</td>
              <td className="border border-gray-300 px-4 py-2">{data.desc1}</td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className="border border-gray-300 px-4 py-2 font-semibold text-center bg-gray-50"
              >
                {data.tablename}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 align-top">
                <ul className="list-none space-y-1">
                  {data.desc4Left.map((item, index) => (
                    <li key={index} className="flex gap-2 pt-2">
                      <FaCheck className="text-green-800 text-[16px] min-w-[20px] mt-1.5" />{" "}
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2 align-top">
                {data.desc4Right.map((item, index) => (
                  <div className="flex gap-2 pt-2">
                    <FaCheck className="text-green-800 text-[16px] min-w-[20px] mt-1.5" />
                    <p key={index}>{item}</p>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lisenziya;
