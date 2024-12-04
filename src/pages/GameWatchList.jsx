import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import WatchList from "../components/WatchList";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  // console.log(user.email);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!user?.email) {
        console.error("User Email not found");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5001/game_watchlist?userMail=${user.email}&isWatchList=true`
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
      }
    };

    fetchReviews();
  }, [user, reviews]);

  // if (reviews.length === 0) return <p>No reviews found in the watchlist.</p>;

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
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <WatchList key={review._id} review={review}></WatchList>
              ))
            ) : (
              <p>No items available</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameWatchList;
