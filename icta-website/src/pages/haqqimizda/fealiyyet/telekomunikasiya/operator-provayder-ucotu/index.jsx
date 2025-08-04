import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../../../context/DataContext";

const OperatorVeProviderlerinUcotu = () => {
  const { getSectionData } = useContext(DataContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const result = getSectionData(
      "Haqqımızda",
      "Fəaliyyət",
      "Telekommunikasiya",
      "Operator və provayderin uçotu"
    );
    setData(result);
     if (result) {
    setData({
      ...result,
      section: "Haqqımızda",
      subsection: "Fəaliyyət",
      telecommunicationTitle: "Telekommunikasiya",
    });
  }
  }, [getSectionData]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="px-2">
      <div>
        <h1 className="text-[32px] font-medium pt-2">{data.child || data.title}</h1>
        <div className="text-sm py-2 border-b pb-8">
          <Link to="/" className="text-gray-500 hover:underline">
            Əsas
          </Link>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-gray-500">{data.section}</span>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-gray-500">{data.subsection}</span>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-gray-500">{data.telecommunicationTitle}</span>
          <span className="mx-2 text-gray-500">›</span>
          <span className="text-blue-700 font-medium">{data.title}</span>
        </div>

        <div>
          <h1 className="text-[24px] font-medium pt-8 pb-3">{data.ucotname}</h1>
          <p className="text-[#525865]">{data.ucotdesc}</p>

          <h1 className="text-[24px] font-medium pt-8 pb-3">{data.ucotname2}</h1>
          {data.ucotdesc2?.map((el, index) => (
            <p className="text-[#525865] pb-2" key={index}>
              {el}
            </p>
          ))}

          <h1 className="text-[16px] font-medium pb-2 pt-3">{data.ucotinter}</h1>
        </div>
      </div>
    </div>
  );
};

export default OperatorVeProviderlerinUcotu;
