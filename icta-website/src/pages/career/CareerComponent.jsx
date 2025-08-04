import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CareerComponent = () => {
  const [careerData, setCareerData] = useState(null);

  useEffect(() => {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.navigation?.sections.find(
          (item) => item.title === "Karyera"
        );
        setCareerData(found);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!careerData) return <p className="text-center mt-10">Yüklənir...</p>;

  return (
    <div className="mb-6 overflow-x-hidden">
      <div className="text-sm mx-5 font-medium py-2">
        <Link to="/" className="text-gray-700 hover:underline">
          Əsas
        </Link>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-blue-700 font-semibold">{careerData.title}</span>
      </div>

      {careerData.image && (
        <div
          className="bg-cover bg-center p-6 h-[200px] flex justify-start items-end"
          style={{ backgroundImage: `url(${careerData.image})` }}
        >
          <h1 className="text-[50px] font-semibold mb-2 text-white">
            {careerData.title}
          </h1>
        </div>
      )}

      {careerData.career_section?.map((section, index) => {
        const words = section.title.split(" ");
        let bluePart = "";
        let normalPart = "";

        if (index === 0) {
          bluePart = words[0];
          normalPart = words.slice(1).join(" ");
        } else if (index === 1) {
          bluePart = words.slice(0, 2).join(" ");
          normalPart = words.slice(2).join(" ");
        } else if (index === 2) {
          bluePart = words[words.length - 1];
          normalPart = words.slice(0, words.length - 1).join(" ");
        }

        return (
          <div key={section.id} className="mt-10 pt-8">
            <h3 className="text-[30px] font-semibold mb-6 text-center">
              {index === 2 ? (
                <>
                  {normalPart} <span className="text-[#498efb]">{bluePart}</span>
                </>
              ) : (
                <>
                  <span className="text-[#498efb]">{bluePart}</span> {normalPart}
                </>
              )}
            </h3>

            {Array.isArray(section.careersection_inside) && (
              <div className="flex justify-center flex-wrap gap-8">
                {section.careersection_inside.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col border border-gray-200 items-center text-center rounded-xl my-4 hover:border-[#2d8cff] hover:scale-[0.98] transition-all duration-300 shadow-md hover:shadow-xl bg-white w-full sm:w-[330px] md:w-[360px] lg:w-[390px] min-h-[400px]"
                  >
                    <div className="flex flex-col h-full justify-center items-center gap-4 p-6">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="object-contain mt-1 w-[72px]"
                      />
                      <p className="text-[22px] text-[#498efb] font-medium">
                        {item.title}
                      </p>
                      <p className="text-[16px] text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {Array.isArray(section.vacancy_inside) && (
              <div className="flex flex-col gap-8 pb-8 mb-10">
                {section.vacancy_inside.map((item) => (
                  <div
                    key={item.id}
                    className="flex border border-gray-200 items-center mx-auto rounded-xl hover:border-[#2d8cff] hover:scale-[0.98] transition-all duration-300 shadow-md hover:shadow-xl bg-white w-full max-w-[899px] min-h-[90px]"
                  >
                    <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4 p-5">
                      <div className="flex flex-col gap-2">
                        <p className="text-[22px] text-[#498efb] font-medium">
                          {item.title}
                        </p>
                        <div className="flex flex-wrap gap-4 text-left">
                          <p className="text-[16px] text-gray-600 flex items-center">
                            <IoLocationSharp className="mr-1" />
                            {item.place}
                          </p>
                          <p className="text-[16px] text-gray-600">{item.date}</p>
                        </div>
                      </div>
                      <Link to={`vakansiyalar/${item.id}`}>
                        <button className="text-white bg-[#498efb] px-4 py-2 rounded-md hover:bg-[#2d8cff] transition font-medium cursor-pointer">
                          Ətraflı
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.title === "İşə qəbul prosesi" && (
              <div className="flex justify-center items-center mx-5 my-8">
                <div className="flex items-center justify-center w-[1147px] text-[#667085] h-[45px] outline-0 border border-[#e7e5e5] rounded-tl-lg rounded-bl-lg bg-[#f7f7f7]">
                  Agentlikdə işə qəbulun mərhələlərinə dair məlumatlarla buradan tanış ola bilərsiniz.
                </div>
                <button className="w-[90px] h-[45px] border border-[#5193FB] bg-[#5193FB] rounded-tr-lg rounded-br-lg">
                  <HiOutlineArrowNarrowRight className="text-3xl mx-6 text-white" />
                </button>
              </div>
            )}
          </div>
        );
      })}

      <Outlet />
    </div>
  );
};

export default CareerComponent;
