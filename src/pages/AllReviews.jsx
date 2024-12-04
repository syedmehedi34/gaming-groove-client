import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCards from "../components/ReviewCards";

const AllReviews = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div className="w-11/12 mx-auto">
      {/*  sorting starts */}
      <div className="py-4">
        <div className="flex justify-center ">
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
        {data.map((game) => (
          <ReviewCards key={game._id} game={game}></ReviewCards>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
