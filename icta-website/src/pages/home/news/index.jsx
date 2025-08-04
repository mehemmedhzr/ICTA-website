import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const News = () => {
  const { news } = useContext(DataContext);

  return (
    <div className="news  py-8 px-4 md:px-10">
      <div className="text-center mb-6">
        <h1 className="font-semibold text-[22px] md:text-2xl">XƏBƏRLƏR</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 justify-items-center">
        {news.length === 0 ? (
          <div>Loading...</div>
        ) : (
          news.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full max-w-sm rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <a href="#">
                <img className="w-full h-48 object-cover" src={item.img} alt={item.name} />
              </a>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <a href="#">
                    <h5 className="font-semibold text-lg text-gray-900">
                      {item.name}
                    </h5>
                  </a>
                  <p className="text-gray-700 text-sm py-2">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-[#2D8CFF] rounded hover:bg-blue-600"
                  >
                    Daha ətraflı
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex items-center justify-start mt-6">
        <Link
          to="/xeberler" // Adjust route if needed
          className="text-[#2D8CFF] hover:underline font-medium flex items-center gap-2"
        >
          Bütün xəbərlərə bax <HiOutlineArrowNarrowRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default News;
