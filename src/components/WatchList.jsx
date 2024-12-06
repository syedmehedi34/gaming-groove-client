import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";

const WatchList = ({ review }) => {
  const { user } = useContext(AuthContext);
  const userMail = user.email;
  // console.log(user.email);

  //
  // remove a item from watchlist
  // const handleDelete = (review) => {
  //   const reviewID = review._id; // Extract the review ID
  //   console.log("Deleting review with ID:", reviewID);

  //   Swal.fire({
  //     title: "Are you sure to delete this?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, Delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`https://gaming-groove-server.vercel.app/watchlist?reviewID=${reviewID}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.deletedCount) {
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success",
  //             });

  //             // Update the reviews state
  //             // const updatedReviews = reviews.filter(
  //             //   (existingReview) => existingReview._id !== reviewID
  //             // );
  //             // setReviews(updatedReviews);
  //           } else {
  //             Swal.fire({
  //               title: "Error",
  //               text: "Failed to delete the review.",
  //               icon: "error",
  //             });
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Error deleting review:", error);
  //           Swal.fire({
  //             title: "Error",
  //             text: "An error occurred while deleting the review.",
  //             icon: "error",
  //           });
  //         });
  //     }
  //   });
  // };

  const handleDelete = (review) => {
    const _id = review._id;
    // console.log(_id);

    fetch(`https://gaming-groove-server.vercel.app/watchlist?_id=${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Review removed from watchlist successfully!", {
            autoClose: 1500,
          });
        } else {
          toast.error("Failed to delete the review from watchlist.", {
            autoClose: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting review:", error);
        toast.error("An error occurred while deleting the review.", {
          autoClose: 1500,
        });
      });
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
                  src={review.gameCover}
                  alt="Avatar"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{review.gameTitle}</div>
              <div className="text-[12px] opacity-50">
                Published in : {review.publishingYear}
              </div>
            </div>
          </div>
        </td>
        <td>
          <ReactStars
            count={5}
            value={review.rating}
            size={20}
            activeColor="#ffd700"
            classNames="rating-stars"
          />
        </td>
        <td>customGenre</td>
        <th>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleDelete(review)}
              className="btn btn-ghost min-w-0 min-h-0 p-0 hover:bg-inherit h-fit"
            >
              <MdDelete size={22} />
            </button>
          </div>
        </th>
      </tr>
    </>
  );
};

export default WatchList;
