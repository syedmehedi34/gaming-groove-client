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
  const [loading, setLoading] = useState(true); // Loading state

  const userMail = user?.email;

  useEffect(() => {
    const fetchUserReviews = async () => {
      if (!userMail) {
        console.error("User not logged in.");
        setLoading(false); // Stop loading if no user email
        return;
      }

      try {
        const response = await fetch(
          `https://gaming-groove-server.vercel.app/my_reviews?userMail=${userMail}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false); // Stop loading after fetching data
      }
    };

    fetchUserReviews();
  }, [userMail, reviews]);

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
        fetch(`https://gaming-groove-server.vercel.app/review/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // Update the reviews state
              const myReviews = reviews.filter((review) => review._id !== _id);
              setReviews(myReviews);
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto mt-24">
      <div className="bg-gray-800 text-white py-5 px-6 rounded-t-md shadow-md">
        <h2 className="text-2xl font-bold">My Reviews</h2>
        <p className="text-sm text-gray-300 mt-1">
          All the feedback you've shared, organized in one place.
        </p>
      </div>

      <div className="overflow-x-auto mb-20 mt-5">
        {loading ? ( // Show spinner while loading
          <div className="flex justify-center items-center py-10">
            <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
          </div>
        ) : reviews.length > 0 ? (
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
                  reviews={reviews}
                  setReviews={setReviews}
                ></MyReview>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-5 text-gray-500">No reviews found.</p>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
