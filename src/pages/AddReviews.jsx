import React, { useContext, useRef } from "react";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const AddReviews = () => {
  const ratingRef = useRef(0);
  const { user } = useContext(AuthContext);
  // console.log(user.displayName, user.email);
  const userName = user.displayName;
  const userMail = user.email;

  const handleSubmit = (e) => {
    e.preventDefault();

    const gameCover = e.target.gameCover.value;
    const gameTitle = e.target.name.value;
    const reviewDescription = e.target.reviewDescription.value;
    const rating = ratingRef.current;
    const publishingYear = e.target.publishingYear.value;
    const genre = e.target.genre.value;
    const isWatchList = false;

    const formData = {
      gameCover,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genre,
      userName,
      userMail,
      isWatchList,
    };

    // console.log(formData);
    // console.log(gameTitle);

    // send data to the server and database
    fetch("https://gaming-groove-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // console.log("successfully added");
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          ratingRef.current = 0;
          e.target.reset();
          // rating = 0;
        }
      });
  };

  //////////////////
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="pt-28 bg-gradient-to-br from-blue-50 to-purple-100 flex justify-center items-center py-8">
        <div className="card w-full max-w-4xl shadow-xl bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-[#24447b]">
            Add New Review
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Game Cover and Title */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Game Cover Image URL
                </label>
                <input
                  type="text"
                  name="gameCover"
                  className="input input-bordered w-full h-10 rounded-md focus:outline-none focus:ring-2 "
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Game Title
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full h-10 rounded-md focus:outline-none focus:ring-2"
                  placeholder="Enter game title"
                  required
                />
              </div>
            </div>

            {/* Review Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Review Description
              </label>
              <textarea
                name="reviewDescription"
                className="textarea textarea-bordered w-full h-28 rounded-md focus:outline-none focus:ring-2 "
                placeholder="Write your detailed review here..."
                required
              ></textarea>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <ReactStars
                count={5}
                value={ratingRef.current}
                onChange={(newRating) => (ratingRef.current = newRating)}
                size={30}
                activeColor="#ffd700"
                classNames="rating-stars"
              />
              <p className="text-sm text-gray-500 mt-1">
                Select a rating by clicking the stars.
              </p>
            </div>

            {/* Publishing Year and Genre */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Publishing Year
                </label>
                <input
                  type="number"
                  name="publishingYear"
                  className="input input-bordered w-full h-10 rounded-md focus:outline-none focus:ring-2"
                  placeholder="Ex: 2024"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Genre
                </label>
                <select
                  name="genre"
                  className="select select-bordered w-full h-10 rounded-md focus:outline-none focus:ring-2 "
                  required
                >
                  <option value="" disabled>
                    Select a genre
                  </option>
                  <option value="Action">Action</option>
                  <option value="RPG">RPG</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Puzzle">Puzzle</option>
                  <option value="Shooter">Shooter</option>
                  <option value="Sports">Sports</option>
                </select>
              </div>
            </div>

            {/*  */}

            <div className="flex gap-6">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  User Name
                </label>
                <input
                  type="text"
                  name="gameTitle"
                  className="input input-bordered w-full h-10 rounded-md focus:outline-none focus:ring-2"
                  disabled
                  defaultValue={userName}
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  User Email
                </label>
                <input
                  type="text"
                  name="gameTitle"
                  className="input input-bordered w-full h-10 rounded-md focus:outline-none focus:ring-2"
                  disabled
                  defaultValue={userMail}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="btn btn-primary w-full py-3 rounded-lg bg-custom-gradient text-white font-semibold transition"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
