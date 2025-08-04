import Activity from "./activity";
import News from "./news";
import Service from "./service";
import UseFul from "./useful";

const Home = () => {
  return (
    <div className="w-[375px] sm:w-[425px] md:w-[768px] lg:w-[1024px] xl:w-full 2xl:w-full 3xl:w-full mx-auto">
      <Activity />
      <Service />
      <News />
      <UseFul />
    </div>
  );
};

export default Home;
