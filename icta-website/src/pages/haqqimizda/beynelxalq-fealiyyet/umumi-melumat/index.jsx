import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/DataContext";
import { Link } from "react-router-dom";

const UmumiMelumatBeynalxalq = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Beynəlxalq fəaliyyət",
      "Ümumi məlumat"
    );
    if (result) {
      setData({
        ...result,
        section: "Haqqımızda",
        sectionTitle: "Fəaliyyət",
        spectrTitle: "Ümumi məlumat",
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
        <span className="text-gray-500">{data.sectionTitle}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-blue-700 font-medium">{data.title}</span>
      </div>
      {data.img && (
        <div className="pt-10">
          <img src={data.img} alt="İKTA Haqqında" />
        </div>
      )}
      <h1 className="text-[20px] font-medium pt-5 mb-3">{data.title}</h1>
      {data.desc1.map((el, index) => (
        <div key={index} className="flex gap-3 items-start">
          <p
            className="text-[#525865] mb-4"
            dangerouslySetInnerHTML={{ __html: el }}
          />
        </div>
      ))}
      <div>
        <div className="flex items-center gap-5">
          <img
            src={"/images/itu.png"}
            alt=""
            className="w-[40px] pt-4"
          />
          <h1 className="text-[20px] font-medium pt-8 pb-3">{data.name2}</h1>
        </div>
        {data.desc2.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-5">
          <img
            src={"/images/poctbey.png"}
            alt=""
            className="w-[40px] pt-4"
          />
          <h1 className="text-[20px] font-medium pt-8 pb-3">{data.name3}</h1>
        </div>
        {data.desc3.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-5">
          <img
            src={"/images/international.png"}
            alt=""
            className="w-[40px] pt-4"
          />
          <h1 className="text-[20px] font-medium pt-8 pb-3">{data.name4}</h1>
        </div>
        {data.desc4.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-5">
          <img
            src={"/images/avroi.png"}
            alt=""
            className="w-[40px] pt-4"
          />
          <h1 className="text-[20px] font-medium pt-8 pb-3">{data.name5}</h1>
        </div>
        {data.desc5.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-5">
          <img
            src={"/images/serq.png"}
            alt=""
            className="w-[40px] pt-4"
          />
          <h1 className="text-[20px] font-medium pt-8 pb-3">{data.name6}</h1>
        </div>
        {data.desc6.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-5">
          <img
            src={"/images/eu4.png"}
            alt=""
            className="w-[40px] pt-4"
          />
          <h1 className="text-[20px] font-medium pt-8 pb-3">{data.name7}</h1>
        </div>

        <p
          className="text-[#525865] mb-4"
          dangerouslySetInnerHTML={{ __html: data.desc7 }}
        />
      </div>
      <div>
        <div className="flex items-center gap-5">
          <img
            src={"/images/dunyabank.png"}
            alt=""
            className="w-[40px] pt-4"
          />
          <h1 className="text-[20px] font-medium pt-8 pb-3">{data.name8}</h1>
        </div>
        {data.desc8.map((el, index) => (
          <div key={index} className="flex gap-3 items-start">
            <p
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UmumiMelumatBeynalxalq;
