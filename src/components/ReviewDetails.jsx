import { useLoaderData } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {
  FaGamepad,
  FaCalendarAlt,
  FaTag,
  FaUser,
  FaArrowLeft,
} from "react-icons/fa";
import { toast } from "react-toastify";

const ReviewDetails = () => {
  const navigate = useNavigate();
  const gameDetails = useLoaderData();
  //   console.log(gameDetails);
  //   const gameDetails = data[0];

  // * [ add watch functionalities ]--------
  const handleAddWatch = (game) => {
    // console.log(game);
    const id = game._id;

    //
    const isWatchList = true;

    const changedData = {
      isWatchList,
    };
    // console.log(changedData);

    // send data to the server and database
    fetch(`https://gaming-groove-server.vercel.app/review/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(changedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Game added to Watch List");
        } else {
          toast.error("Error! Can not remove this item");
        }
      });
  };
  //? ---------------------------------------

  ////////////////////////////////
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-10 text-white pt-28">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-lg font-semibold text-indigo-200 hover:text-indigo-400 transition duration-300"
          >
            <FaArrowLeft className="text-2xl" />
            Go Back
          </button>
        </div>

        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold uppercase tracking-wide text-indigo-200">
            Game Review
          </h1>
          <p className="text-lg mt-3 opacity-80">
            Explore the details of this epic game!
          </p>
        </div>

        {/* Game Details Card */}
        <div className="bg-white text-gray-900 shadow-2xl rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-3 transform hover:scale-[1.008] transition-transform duration-500">
          {/* Game Cover */}
          <div className="relative">
            <img
              src={gameDetails.gameCover}
              alt={`${gameDetails.gameTitle} Cover`}
              className="w-full h-80 object-cover lg:h-full"
            />
            <div className="absolute top-5 left-5 bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1 text-sm font-bold text-white rounded shadow-md animate-bounce">
              {gameDetails.genre}
            </div>
          </div>

          {/* Game Info */}
          <div className="col-span-2 p-8 space-y-8">
            {/* Title and Rating */}
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-bold flex items-center gap-2 text-indigo-600">
                <FaGamepad className="text-indigo-700" />{" "}
                {gameDetails.gameTitle}
              </h2>
              <div className="flex items-center space-x-2">
                <ReactStars
                  count={5}
                  value={gameDetails.rating}
                  size={30}
                  activeColor="#ffd700"
                  edit={false}
                />
                <span className="text-xl font-bold">
                  {gameDetails.rating}/5
                </span>
              </div>
            </div>

            {/* Review Description */}
            <div>
              <h3 className="text-lg font-semibold text-purple-600">
                Review Summary
              </h3>
              <p className="text-gray-700 leading-7">
                {gameDetails.reviewDescription}
              </p>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 bg-purple-100 p-4 rounded-lg shadow">
                <FaCalendarAlt className="text-purple-600 text-2xl" />
                <div>
                  <h4 className="text-sm font-bold text-purple-700 uppercase">
                    Publishing Year
                  </h4>
                  <p className="text-lg font-semibold">
                    {gameDetails.publishingYear}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-purple-100 p-4 rounded-lg shadow">
                <FaTag className="text-purple-600 text-2xl" />
                <div>
                  <h4 className="text-sm font-bold text-purple-700 uppercase">
                    Genre
                  </h4>
                  <p className="text-lg font-semibold">{gameDetails.genre}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-purple-100 p-4 rounded-lg shadow">
                <FaUser className="text-purple-600 text-2xl" />
                <div>
                  <h4 className="text-sm font-bold text-purple-700 uppercase">
                    Reviewer
                  </h4>
                  <p className="text-md font-semibold">
                    {gameDetails.userName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {gameDetails.userMail}
                  </p>
                </div>
              </div>
            </div>

            {/* Watchlist Button */}
            <div className="mt-6 text-center">
              <button
                onClick={() => handleAddWatch(gameDetails)}
                className="bg-gradient-to-r btn from-purple-500 to-indigo-500 text-white  font-semibold rounded-full shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
