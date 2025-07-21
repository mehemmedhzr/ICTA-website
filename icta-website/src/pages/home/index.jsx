import Activity from "./activity";
import News from "./news";
import Service from "./service";
import UseFul from "./useful";

const Home = () => {
  return (
    <div>
      <Activity />
      <Service />
      <News />
      <UseFul />
    </div>
  );
};

export default Home;
