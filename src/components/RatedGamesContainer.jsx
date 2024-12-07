/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";
import RatedGame from "./RatedGame";
import { Typewriter } from "react-simple-typewriter";

const RatedGamesContainer = ({ data }) => {
  //   console.log(data);
  return (
    <div className=" rounded-t-[64px] py-7 mt-20 mb-10 flex flex-col justify-center items-center bg-gradient-to-b from-slate-200 to-[rgba(248,250,252,0.25)] dark:bg-gradient-to-b dark:from-gray-700 dark:to-dark">
      <div className="my-20 w-full flex items-center flex-col">
        <h1 className="mb-7 partial-underline uppercase text-3xl font-bold dark:text-white">
          Highest Rated Games
        </h1>
        <h3 className="text-2xl text-center font-bold dark:text-white">
          More Than
          <span className="text-[#FF3300]">
            <Typewriter
              words={["  5k+ Review In One Place!"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <p className="text-center text-lg font-extralight mt-3 mb-8 dark:text-white/50">
          Search your favorite Games & play Enjoy
        </p>

        <div className="border-x dark:border-x-white/15 drop-shadow-xl w-5/6">
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
