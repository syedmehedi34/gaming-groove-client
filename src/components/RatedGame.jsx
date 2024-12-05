/* eslint-disable react/prop-types */
import ReactStars from "react-rating-stars-component";

const RatedGame = ({ item }) => {
  return (
    <div className="mx-6 w-56 p-4 rounded-lg border">
      <div className="">
        <img
          className="h-[120px] w-full rounded-lg"
          src={item.gameCover}
          alt=""
        />
      </div>
      <div>
        <h2 className="text-xl font-bold mt-3 text-slate-700">
          {item.gameTitle}
        </h2>
        <p className="text-[13px] font-[500] text-slate-600 mt-3 mb-1">
          Published In : {item.publishingYear}
        </p>
        <p className="text-[13px] font-[500] text-slate-600">
          Genre : {item.genre}
        </p>
        <div className="mt-2">
          <p className="text-sm font-[500] text-slate-600">Rating :</p>
          <ReactStars
            count={5}
            value={item.rating || 0}
            size={20}
            activeColor="#ffd700"
            classNames="rating-stars"
          />
        </div>
      </div>
    </div>
  );
};

export default RatedGame;
