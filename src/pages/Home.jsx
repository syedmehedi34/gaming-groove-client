import { useLoaderData } from "react-router-dom";
import RatedData from "../components/RatedData";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="w-11/12 mx-auto mt-28">
      <div>
        <h1>Home component</h1>
        <div className="mt-20">
          <RatedData data={data}></RatedData>
        </div>
      </div>
    </div>
  );
};

export default Home;
