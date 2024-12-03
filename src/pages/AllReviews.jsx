import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const gameReviews = [
  {
    id: 1,
    title: "Game A",
    rating: 4.5,
    year: 2017,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Game B",
    rating: 3.8,
    year: 2019,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Game B",
    rating: 3.8,
    year: 2019,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Game B",
    rating: 3.8,
    year: 2019,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Game B",
    rating: 3.8,
    year: 2019,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Game B",
    rating: 3.8,
    year: 2019,
    imageUrl: "https://via.placeholder.com/150",
  },
];

const AllReviews = () => {
  //!---------------------------
  const [sortBy, setSortBy] = useState("rating"); // Default sorting by rating

  // Sorting function
  const sortedGames = [...gameReviews].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "year") {
      return b.year - a.year;
    }
    return 0;
  });
  //!---------------------------

  return (
    <div className="">
      {/* Dropdown for sorting */}
      <div className="p-4">
        <div className="flex justify-center ">
          {/* <select
            className="select select-bordered w-40 text-gray-700 "
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            <option value="rating">Sort By: Rating</option>
            <option value="year">Sort By: Year</option>
          </select> */}
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Who shot first?
            </option>
            <option>Short By Ratings</option>
            <option>Short By Year</option>
          </select>
        </div>
      </div>

      {/* Game Reviews Section */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedGames.map((game) => (
          <div
            key={game.id}
            className="card bg-white drop-shadow-xl rounded-lg p-5"
          >
            {/* Game Image */}
            <div className="w-full h-32">
              <img
                src={game.imageUrl}
                alt={game.title}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Game Details */}
            <div className="">
              <h2 className="card-title text-2xl font-semibold text-gray-800 my-2">
                {game.title}
              </h2>
              <p className="font-semibold mb-1 text-purple-800 mt-2">
                Rating: {game.rating}
              </p>
              <div className="mb-2">
                <ReactStars
                  count={5}
                  value={game.rating || 0}
                  size={20}
                  activeColor="#ffd700"
                  classNames="rating-stars"
                />
              </div>
              <p className="text-gray-600">Year: {game.year}</p>

              {/* Explore Details Button */}
              <div className="mt-4">
                <button className="btn bg-custom-gradient text-white w-full">
                  Explore Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
