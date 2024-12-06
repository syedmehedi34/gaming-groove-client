import { FiEdit } from "react-icons/fi";
import { RiChatDeleteFill } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const MyReview = ({ review, handleDelete }) => {
  //   const [data, setData] = useState(review);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ratingRef = useRef(review.rating);

  //   console.log(review._id);
  const handleSubmitChange = (e) => {
    e.preventDefault();
    const id = review._id;
    const gameTitle = e.target.name.value;
    const gameCover = e.target.image.value;
    const publishingYear = e.target.year.value;
    const reviewDescription = e.target.review.value;
    const rating = ratingRef.current;
    const genre = review.genre;

    const changedData = {
      gameTitle,
      gameCover,
      publishingYear,
      reviewDescription,
      rating,
      genre,
    };
    console.log(changedData);
    // setData(changedData);

    // send data to the server and database
    fetch(`http://localhost:5001/review/${id}`, {
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
          // console.log("successfully updated");
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          setIsModalOpen(false);
          //   e.target.reset();
        }
      });

    // setIsModalOpen(false); // Close the modal on submit
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-[50px] w-[50px]">
                <img
                  className="border-2 rounded-full"
                  src={review?.gameCover}
                  alt="Avatar"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{review?.gameTitle}</div>
              <div className="text-[12px] opacity-50">
                Published in : {review?.publishingYear}
              </div>
            </div>
          </div>
        </td>
        <td>
          <ReactStars
            count={5}
            value={review?.rating || 0}
            size={20}
            activeColor="#ffd700"
            classNames="rating-stars"
          />
        </td>
        <td>{review?.genre}</td>
        <th>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleDelete(review._id)}
              className="btn btn-ghost min-w-0 min-h-0 p-0 hover:bg-inherit h-fit"
            >
              <RiChatDeleteFill size={20} />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-ghost min-w-0 min-h-0 p-0 hover:bg-inherit h-fit"
            >
              <FiEdit size={18} />
            </button>
          </div>
        </th>
      </tr>

      {isModalOpen && (
        <dialog className="modal" open>
          <div className="modal-box w-11/12 max-w-4xl">
            <h3 className="font-bold text-2xl text-center mb-5">
              Change your review
            </h3>

            <form onSubmit={handleSubmitChange}>
              <div className="flex items-center justify-center w-96 mx-auto mb-2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Game Title</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Game Title"
                    className="input input-bordered w-full"
                    required
                    defaultValue={review?.gameTitle}
                  />
                </label>
              </div>

              <div className="flex items-center justify-center w-96 mx-auto gap-5">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Game Cover</span>
                    </div>
                    <input
                      type="text"
                      name="image"
                      placeholder="Game cover URL"
                      className="input input-bordered w-full max-w-xs"
                      required
                      defaultValue={review?.gameCover}
                    />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Publish Year</span>
                    </div>
                    <input
                      type="number"
                      name="year"
                      placeholder="Published year"
                      className="input input-bordered w-full max-w-xs"
                      defaultValue={review?.publishingYear}
                    />
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-center w-96 mx-auto">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Review</span>
                  </div>
                  <textarea
                    name="review"
                    className="textarea textarea-bordered h-24"
                    placeholder="Your review"
                    defaultValue={review?.reviewDescription}
                  ></textarea>
                </label>
              </div>

              <div className="flex items-center justify-center mt-5 gap-4">
                <p className="text-lg">Rating:</p>
                <ReactStars
                  count={5}
                  value={review?.rating}
                  size={25}
                  activeColor="#ffd700"
                  classNames="rating-stars"
                  onChange={(newRating) => (ratingRef.current = newRating)}
                />
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default MyReview;
