import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { BsArrowRight } from "react-icons/bs";

const Activity = () => {
  const { activity } = useContext(DataContext);

  return (
    <div className="home py-5">
      <div className="activity">
        <div className="text-center">
          <h1 className="font-medium text-[20px] sm:text-[22px] mt-5">
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
                className="w-full sm:w-[90%] md:w-[45%] lg:w-[40%] xl:w-[48%] bg-gradient-to-r from-white to-white rounded-sm transition-all duration-300 border-2 border-transparent hover:border-[#2d8cff] hover:scale-95 mb-6"
              >
                <div className="bg-white rounded-sm flex flex-col md:flex-row items-center md:justify-between p-4 gap-4">
                  <div className="w-full md:w-[65%]">
                    <h3 className="font-medium text-base sm:text-lg">
                      {item.name}
                    </h3>
                    <p className="my-2 text-sm sm:text-[15px] text-gray-600">
                      {item.desc}
                    </p>
                    <button className="text-[#2D8CFF] text-sm flex items-center">
                      Daha ətraflı{" "}
                      <span className="ml-1 pt-[2px]">
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                  <div
                    className="w-full md:w-[30%] h-[180px] sm:h-[200px] md:h-[126px] rounded-sm bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Activity;
