/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";
import RatedGame from "./RatedGame";

const RatedGamesContainer = ({ data }) => {
  //   console.log(data);
  return (
    <div className="rounded-t-[64px] py-12 flex flex-col justify-center items-center bg-gradient-to-b from-slate-200 to-[rgba(248,250,252,0.25)]">
      <div className="my-20 w-full flex items-center  flex-col">
        <h1 className="mb-5 partial-underline uppercase text-4xl font-bold">
          Top Reviews
        </h1>
        <h3 className="text-2xl text-center font-bold">
          More Than <span className="text-[#FF3300]">5k+ Review </span> In One
          Place!
        </h3>
        <p className="text-center text-xl font-extralight mt-3 mb-8">
          Search your favorite Games & play Enjoy
        </p>

        <div className="border-x drop-shadow-xl w-5/6">
          <Marquee pauseOnHover>
            {data.map((item) => (
              <RatedGame key={item._id} item={item}></RatedGame>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default RatedGamesContainer;
