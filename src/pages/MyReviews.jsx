import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ReactStars from "react-rating-stars-component";
import { RiChatDeleteFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const userMail = user?.email; // Ensure `user` is not null or undefined
  // console.log(userMail);
  console.log(reviews);

  useEffect(() => {
    const fetchUserReviews = async () => {
      if (!userMail) {
        console.error("User not logged in.");
        setLoading(false);
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
        setLoading(false);
      }
    };

    fetchUserReviews();
  }, [userMail]); // Dependency array ensures the function runs when `userMail` changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews found for this user.</p>;
  }

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="overflow-x-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Game</th>
              <th>Job</th>
              <th>Ratings</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id}>
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
                      <div className="font-bold">{review.gameTitle}</div>
                      <div className="text-[12px] opacity-50">
                        Published in : {review.publishingYear}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <ReactStars
                      count={5}
                      value={review?.rating || 0}
                      size={20}
                      activeColor="#ffd700"
                      classNames="rating-stars"
                    />
                  </div>
                </td>
                <td>{review.genre}</td>
                <th>
                  <div className="flex items-center justify-center gap-4">
                    <button className="">
                      <RiChatDeleteFill size={20} />
                    </button>
                    <Link>
                      <button>
                        <FiEdit size={18} />
                      </button>
                    </Link>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
