import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCards from "../components/ReviewCards";

const AllReviews = () => {
  const data = useLoaderData();
  const [games, setGames] = useState(data);
  const [reviews, setReviews] = useState(data);

  // * Sorting Options ----------------
  const handleSortBy = (event) => {
    const value = event.target.value;

    if (value === "ratings") {
      console.log("Sorting by ratings...");
      const ratingSort = [...reviews].sort((a, b) => b.rating - a.rating);
      setReviews(ratingSort);
    } else if (value === "year") {
      console.log("Sorting by year...");
      const yearSort = [...reviews].sort(
        (a, b) => b.publishingYear - a.publishingYear
      );
      setReviews(yearSort);
    }
  };

  // * sort by genre
  const genres = [...new Set(data.map((p) => p.genre))];

  const handleGenreChange = (event) => {
    setReviews(data);
    const genre = event.target.value;
    console.log(genre);

    const filteredGames =
      genre === "All"
        ? games
        : games.filter((review) => review.genre === genre);
    setReviews(filteredGames);
    console.log(filteredGames);
  };

  //--------------------------------------
  return (
    <div className="w-11/12 mx-auto mt-28">
      {/* Sorting Starts */}
      <div className="py-4">
        <div className="flex justify-between ">
          <div>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={handleSortBy}
            >
              <option disabled selected>
                Who shot first?
              </option>
              <option value="ratings">Short By Ratings</option>
              <option value="year">Short By Year</option>
            </select>
          </div>

          <div>
            <select
              onChange={handleGenreChange}
              className="select select-bordered w-full max-w-xs"
              // value={selectedGenre}
            >
              <option value="All">All</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Game Reviews Section */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviews.map((game) => (
          <ReviewCards key={game._id} game={game}></ReviewCards>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
