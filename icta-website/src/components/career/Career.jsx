import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CareerComponent = () => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.data?.find((item) => item.section === "Karyera");
        setCareerData(found);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <div>
      {careerData.image && (
        <div
          className="bg-cover bg-center p-6 h-[200px] flex justify-start items-end"
          style={{ backgroundImage: `url(${careerData.image})` }}
        >
          <h1 className="text-[50px] font-semibold mb-2 text-white">
            {careerData.section}
          </h1>
        </div>
      )}

      {careerData.career_section?.map((section) => (
        <div key={section.id} className="mt-5 pt-5">
          <h3 className="text-[30px] font-semibold mb-2 text-center">
            <span className="text-[#498efb]">{section.title.split(" ")[0]}</span>{" "}
            {section.title.split(" ").slice(1).join(" ")}
          </h3>

          {Array.isArray(section.careersection_inside) &&
            section.careersection_inside.length > 0 && (
              <div className="flex justify-between flex-wrap">
                {section.careersection_inside.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col border-2 items-center text-center mx-auto rounded-xl my-6 hover:border-[#2d8cff] hover:scale-95 transition-all duration-300  "
                  >
                    <div className="flex flex-col w-[390px] h-[380px] justify-center items-center gap-4 p-5">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="object-contain mt-1  w-[72px]"
                      />

                      <p className="text-[22px] text-[#498efb] font-medium">{item.title}</p>
                      {item.desc && (
                        <p className="text-[16px] text-gray-600">{item.desc}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      ))}
      <div className="flex justify-center items-center mx-5 my-4">
        <div type="text" className="w-[1153px] h-[45px] outline-0 border border-red-500 bg-gray-400" />
        <button className="w-[96px] h-[45px] border border-red-500 bg-amber-400"><HiOutlineArrowNarrowRight /></button>
      </div>
    </div>
  );
};

export default CareerComponent;
