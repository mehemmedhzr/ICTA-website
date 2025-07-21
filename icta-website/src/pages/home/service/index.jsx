import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const Service = () => {
  const { services } = useContext(DataContext);
  return (
    <div className="services bg-[rgb(243,246,250)]">
      <div className="text-center">
        <h1 className="font-medium text-[22px]">ELEKTRON XİDMƏTLƏRİMİZ</h1>
      </div>
      <div className="max-w-7xl cursor-p ointer py-5 flex flex-wrap items-center mx-auto justify-center gap-4 ff">
        {services.length === 0 ? (
          <p>Loading...</p>
        ) : (
          services.map(({ id, name, icon }) => (
            <div
              key={id}
              className="cursor-pointer w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[376px] bg-white rounded-sm transition-all duration-300 mb-6 border-r-2 border-b-2 border-[#2D8CFF]"
            >
              <div className="h-[143px] rounded-sm flex items-center justify-center px-5 transition-all duration-300 hover:bg-[#498efb] group">
                <div className="w-full">
                  <div className="bg-[#498efb] w-[40px] h-[40px] rounded-sm flex justify-center items-center">
                    <img
                      src={icon}
                      alt=""
                      className="pb-1  transition-transform duration-300 group-hover:scale-150 p-1"
                    />
                  </div>

                  <div className="my-3 border-t-2 border-[#498efb] w-[78px] transition-all duration-300 group-hover:w-full group-hover:border-white " />

                  <h3 className="font-medium text-lg transition-all duration-300 group-hover:text-white">
                    {name}
                  </h3>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Service;
