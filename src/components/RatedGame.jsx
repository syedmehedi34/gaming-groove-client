/* eslint-disable react/prop-types */

const RatedGame = ({ item }) => {
  return (
    <div className="ml-12">
      <div>
        <img className="w-fit h-[70px]" src={item.gameCover} alt="" />
      </div>
    </div>
  );
};

export default RatedGame;
