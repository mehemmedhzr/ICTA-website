import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/DataContext";
import { Link } from "react-router-dom";

const UmumiMelumat = () => {
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
        sectionTitle: "Beynəlxalq fəaliyyət",
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
        <Link to="/" className="text-gray-500 hover:underline">Əsas</Link>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-500">{data.section}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-gray-500">{data.sectionTitle}</span>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-blue-700 font-medium">{data.spectrTitle}</span>
      </div>

      {data.img && (
        <div className="pt-10">
          <img src={data.img} alt="İKTA Haqqında" />
        </div>
      )}

      <h1 className="text-[20px] font-medium pt-5 mb-3">{data.title}</h1>
      {data.desc1?.map((el, index) => (
        <p
          key={index}
          className="text-[#525865] mb-4"
          dangerouslySetInnerHTML={{ __html: el }}
        />
      ))}

      {[
        { img: "itu.png", name: data.name2, desc: data.desc2 },
        { img: "poctbey.png", name: data.name3, desc: data.desc3 },
        { img: "international.png", name: data.name4, desc: data.desc4 },
        { img: "avroi.png", name: data.name5, desc: data.desc5 },
        { img: "serq.png", name: data.name6, desc: data.desc6 },
        { img: "dunyabank.png", name: data.name8, desc: data.desc8 },
      ].map((item, idx) => (
        <div key={idx}>
          <div className="flex items-center gap-5">
            <img src={`/images/${item.img}`} alt="" className="w-[40px] pt-4" />
            <h1 className="text-[20px] font-medium pt-8 pb-3">{item.name}</h1>
          </div>
          {item.desc?.map((el, index) => (
            <p
              key={index}
              className="text-[#525865] mb-4"
              dangerouslySetInnerHTML={{ __html: el }}
            />
          ))}
        </div>
      ))}

      {/* Special case for desc7 - string not array */}
      <div>
        <div className="flex items-center gap-5">
          <img src="/images/eu4.png" alt="" className="w-[40px] pt-4" />
          <h1 className="text-[20px] font-medium pt-8 pb-3">{data.name7}</h1>
        </div>
        <p
          className="text-[#525865] mb-4"
          dangerouslySetInnerHTML={{ __html: data.desc7 }}
        />
      </div>
    </div>
  );
};

export default UmumiMelumatBeynalxalq;
