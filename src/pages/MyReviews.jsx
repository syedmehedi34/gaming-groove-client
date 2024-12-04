import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ReactStars from "react-rating-stars-component";
import { RiChatDeleteFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import MyReview from "../components/MyReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const userMail = user?.email;
  // console.log(reviews);
  // console.log(reviews);

  useEffect(() => {
    const fetchUserReviews = async () => {
      if (!userMail) {
        console.error("User not logged in.");
        // setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5001/my_reviews?userMail=${userMail}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchUserReviews();
  }, [userMail]);

  // -------------------------

  // * [ delete a item ]------------
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/review/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // update the loaded coffee state
              const myReviews = reviews.filter((review) => review._id !== _id);
              setReviews(myReviews);
            }
          });
      }
    });
  };
  //-------------------------------

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="overflow-x-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Game</th>
              <th>Review</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <MyReview
                key={review._id}
                review={review}
                handleDelete={handleDelete}
              ></MyReview>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
