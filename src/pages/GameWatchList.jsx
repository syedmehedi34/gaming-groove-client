import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import WatchList from "../components/WatchList";

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchReviews = async () => {
      if (!user?.email) {
        console.error("User Email not found");
        setLoading(false); // Stop loading if no user email
        return;
      }

      try {
        const response = await fetch(
          `https://gaming-groove-server.vercel.app/game_watchlist?userMail=${user.email}&isWatchList=true`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false); // Stop loading after data fetch
      }
    };

    fetchReviews();
  }, [user]);

  return (
    <div className="w-11/12 mx-auto mt-24">
      <div className="bg-gray-800 text-white py-5 px-6 rounded-t-md shadow-md">
        <h2 className="text-2xl font-bold">Game Watch</h2>
        <p className="text-sm text-gray-300 mt-1">
          All the games you've added to Watch List, organized in one place.
        </p>
      </div>

      <div className="overflow-x-auto mt-5 mb-20">
        {loading ? ( // Show loader while loading
          <div className="flex justify-center items-center py-10">
            <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
          </div>
        ) : (
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
                <tr>
                  <td colSpan="4" className="text-center py-5 text-gray-500">
                    No items available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GameWatchList;
