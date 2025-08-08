import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const Service = () => {
  const { services } = useContext(DataContext);

  return (
    <div className="services  py-6 px-6">
      <div className="text-center mb-6">
        <h1 className="font-medium text-[22px]">ELEKTRON XİDMƏTLƏRİMİZ</h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
        {services.length === 0 ? (
          <p>Loading...</p>
        ) : (
          services.map(({ id, name, icon }) => (
            <div
              key={id}
              className="
                w-full 
                sm:w-[90%] 
                md:w-[70%] 
                lg:w-[45%] 
                xl:w-[376px] 
                min-w-[260px]
                bg-white 
                rounded-sm 
                transition-all 
                duration-300 
                border-r-2 
                border-b-2 
                border-[#2D8CFF] 
                hover:shadow-lg
              "
            >
              <div className="h-[143px] rounded-sm flex items-center justify-center px-5 transition-all duration-300 hover:bg-[#498efb] group">
                <div className="w-full 
                sm:w-[90%] 
                md:w-[70%] 
                lg:w-[45%] 
                xl:w-[376px] 
                min-w-[260px] text-center">
                  <div className="bg-[#498efb] w-[40px] h-[40px] rounded-sm flex justify-center items-center mx-auto">
                    <img
                      src={icon}
                      alt="icon"
                      className="pb-1 transition-transform duration-300 group-hover:scale-150 p-1"
                    />
                  </div>

                  <div className="my-3 border-t-2 border-[#498efb] w-[78px] mx-auto transition-all duration-300 group-hover:w-full group-hover:border-white" />

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
