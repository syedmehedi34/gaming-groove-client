import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import WatchList from "../components/WatchList";
import axios from "axios"; // Import axios

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // loader state

  useEffect(() => {
    const fetchReviews = async () => {
      if (!user?.email) {
        console.error("User Email not found");
        setLoading(false); // Stop loading if no user email
        return;
      }

      try {
        const response = await axios.get(
          `https://gaming-groove-server.vercel.app/watchlist`,
          {
            params: {
              userMail: user.email,
            },
          }
        );
        setReviews(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false); // Stop loading after data fetch
      }
    };

    fetchReviews();
  }, [user, reviews]);

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
          <>
            {reviews.length > 0 ? (
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="dark:text-white/90">
                    <th>Game</th>
                    <th>Review</th>
                    <th>Genre</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <WatchList key={review._id} review={review}></WatchList>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center py-5 text-gray-500">
                No watch list available
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default GameWatchList;
