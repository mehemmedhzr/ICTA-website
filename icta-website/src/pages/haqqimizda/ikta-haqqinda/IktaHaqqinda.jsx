import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const IktaAbout = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((data) => {
        const haqqimizda = data.navigation.sections.find(
          (item) => item.title === "Haqqımızda"
        );

        const iktaHaqqinda = haqqimizda?.subsections?.find(
          (sub) => sub.title === "İKTA haqqında"
        );

        setData(
          iktaHaqqinda
            ? { ...iktaHaqqinda, section: haqqimizda?.title }
            : null
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const renderList = (items) =>
    items?.map((text, idx) => (
      <div key={idx} className="flex items-start gap-2">
        <TbRosetteDiscountCheckFilled className="text-[#308928] mt-1" />
        <p>{text}</p>
      </div>
    ));

  return (
    <div>
      <h1 className="text-[32px] font-medium pt-3">İKTA HAQQINDA</h1>

      <div className="border-b pb-8">
        {data && (
          <div className="text-sm py-2">
            <Link to="/" className="text-gray-500 hover:underline">Əsas</Link>
            <span className="mx-2 text-gray-500">›</span>
            <span className="text-gray-500">{data.section}</span>
            <span className="mx-2 text-gray-500">›</span>
            <span className="text-blue-700 font-medium">{data.title}</span>
          </div>
        )}
      </div>

      <div className="pt-10">
        {data?.img && <img src={data.img} alt="İKTA Haqqında" />}
      </div>

      <div className="flex flex-col gap-5 pt-5 pb-10">
        <h2 className="text-[24px] font-medium">Agentlik haqqında</h2>
        {data?.aboutText?.map((text, idx) => (
          <p className="text-[#525865]" key={idx}>{text}</p>
        ))}
      </div>

      <div className="flex flex-wrap gap-10 pb-10">
        <div>
          <h2 className="text-[24px] font-medium">Agentliyin fəaliyyət istiqamətləri</h2>
          <div className="flex flex-col gap-2 py-3 text-[#525865]">
            {renderList(data?.activities)}
          </div>
        </div>

        <div>
          <h2 className="text-[24px] font-medium">Agentliyin fəaliyyət sahələri</h2>
          <div className="flex flex-col gap-2 py-3 text-[#525865]">
            {renderList(data?.fields)}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 py-6">
        {data?.agencyMiss?.map((miss, idx) => (
          <div
            key={idx}
            className="w-[380px] h-[296px] bg-[#f3f6fa] px-8 py-6 flex flex-col justify-center gap-3"
          >
            {miss.icon && <img src={miss.icon} alt="" className="w-[40px]" />}
            <h3 className="text-[24px] font-medium">{miss.name}</h3>
            <p className="text-[#525865]">{miss.desc}</p>
          </div>
        ))}
      </div>

      <div className="pb-10">
        <h2 className="text-[24px] font-medium">Hesabatlılığımız</h2>
        <div className="flex flex-col gap-2 py-3 text-[#525865]">
          {renderList(data?.accountability)}
        </div>
      </div>
    </div>
  );
};

export default IktaAbout;
