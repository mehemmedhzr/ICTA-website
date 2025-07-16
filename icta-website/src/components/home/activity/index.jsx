import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { BsArrowRight } from "react-icons/bs";

const Activity = () => {
  const { activity } = useContext(DataContext);

  return (
    <>
      <div className="home bg-[#f3f6fa] py-5">
        <div className="activity">
          <div className="text-center">
            <h1 className="font-medium text-[22px] mt-5">
              FƏALİYYƏT İSTİQAMƏTLƏRİMİZ
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap justify-center gap-5">
            {activity.length === 0 ? (
              <p>Loading...</p>
            ) : (
              activity.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-[90%] md:w-[45%] lg:w-[40%] xl:w-[48%] bg-gradient-to-r from-white to-white rounded-sm transition-all duration-300 border-2 border-transparent hover:border-[#2d8cff] hover:scale-95 mb-6 "
                >
                  <div className="bg-white rounded-sm flex flex-col md:flex-row items-center md:justify-between p-3 gap-4">
                    <div className="w-full md:w-[65%] mx-3">
                      <h3 className="font-medium text-lg text-md">
                        {item.name}
                      </h3>
                      <p className="my-2 text-sm text-gray-600">{item.desc}</p>
                      <button className="text-[#2D8CFF] text-sm flex cursor-pointer">
                        Daha ətraflı{" "}
                        <span className="mx-1 pt-1">
                          <BsArrowRight />
                        </span>
                      </button>
                    </div>
                    <div
                      className="w-full md:w-[30%] h-[200px] md:h-[126px] rounded-sm bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
