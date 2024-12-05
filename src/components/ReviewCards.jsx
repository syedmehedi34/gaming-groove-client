import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ReviewCards = ({ game }) => {
  // console.log(game);
  const {
    _id,
    gameCover,
    gameTitle,
    genre,
    publishingYear,
    rating,
    reviewDescription,
  } = game;

  return (
    <div className="card bg-white drop-shadow-xl rounded-lg p-5">
      {/* Game Image */}
      <div className="w-full h-32">
        <img
          src={gameCover}
          alt={gameTitle}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Game Details */}
      <div className="flex flex-col ">
        <h2 className="card-title text-2xl font-semibold text-gray-800 mt-3 mb-2 ">
          {gameTitle}
        </h2>
        <p className="font-semibold mb-1 text-purple-800 mt-2">
          Rating: {rating}
        </p>
        <div className="mb-2">
          <ReactStars
            count={5}
            value={rating || 0}
            size={20}
            activeColor="#ffd700"
            classNames="rating-stars"
          />
        </div>
        <p className="text-gray-600">Year: {publishingYear}</p>

        {/* Explore Details Button */}
        <div className="mt-4">
          <Link to={`/review/${_id}`}>
            <button className="btn bg-custom-gradient text-white w-full">
              Explore Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
