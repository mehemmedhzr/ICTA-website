import Activity from "./activity";
import News from "./news";
import Service from "./service";
import UseFul from "./useful";

const Home = () => {
  return (
    <div className="bg-[#f3f6fa]">
      <Activity />
      <Service />
      <News />
      <UseFul />
    </div>
  );
};

export default Home;
