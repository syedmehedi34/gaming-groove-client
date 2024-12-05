/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";
import RatedGame from "./RatedGame";

const RatedGamesContainer = ({ data }) => {
  //   console.log(data);
  return (
    <>
      <div className="my-20 flex items-center  flex-col">
        <h1 className="mb-5 partial-underline uppercase text-4xl font-bold">
          Top Brands
        </h1>
        <h3 className="text-2xl text-center font-bold">
          More Than <span className="text-[#FF3300]">500+ Stores</span> In One
          Place!
        </h3>
        <p className="text-center text-xl font-extralight mt-3 mb-8">
          Search your favorite store & get many deals
        </p>

        <div className="border-x drop-shadow-xl  w-4/5">
          <Marquee pauseOnHover>
            {data.map((item) => (
              <RatedGame key={item._id} item={item}></RatedGame>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default RatedGamesContainer;
