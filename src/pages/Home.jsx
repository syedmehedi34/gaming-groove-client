import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import RatedGamesContainer from "../components/RatedGamesContainer";
import DonateNow from "../components/DonateNow";
import UpcomingReleases from "../components/UpcomingReleases";
import GameNews from "../components/GameNews";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto mt-24">
      <div>
        <div>
          <Hero></Hero>
        </div>

        <section>
          <RatedGamesContainer data={data}></RatedGamesContainer>
          <UpcomingReleases></UpcomingReleases>
          <GameNews></GameNews>
          <DonateNow></DonateNow>
        </section>
      </div>
    </div>
  );
};

export default Home;
