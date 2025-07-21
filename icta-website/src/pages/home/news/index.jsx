import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const News = () => {
  const { news } = useContext(DataContext);

  return (
    <div className="news bg-[#f3f6fa] py-5">
      <div className="text-center">
        <h1 className="font-medium text-[22px]">XƏBƏRLƏR</h1>
      </div>
      <div className="flex justify-around flex-wrap py-5">
        {news.length === 0 ? (
          <div>Loading...</div>
        ) : (
          news.map((item) => (
            <div key={item.id} className="news-container mb-4">
              <a href="#">
                <img className="rounded-t-lg" src={item.img} alt={item.name} />
              </a>
              <div className="bg-white w-[376px] rounded-b-xl py-3">
                <div className="px-4">
                  <a href="#">
                    <h5 className=" font-medium tracking-tight text-lg text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </a>
                  <p className="font-normal text-gray-700 dark:text-gray-400 text-sm py-2">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">{item.date}</p>
                    <a
                      href="#"
                      className="inline-flex items-center  px-3 py-2 text-xs font-medium text-center text-white bg-[#2D8CFF] rounded-sm  focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Daha ətraflı
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex items-center justify-start mx-8 pb-5 font-medium">
              <Link className="cursor-pointer flex items-center gap-2">
                Bütün xəbərlərə bax <span className="pt-1"><HiOutlineArrowNarrowRight /></span>
              </Link>
            </div>
    </div>
  );
};

export default News;
