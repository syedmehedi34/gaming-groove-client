import { CgViewDay } from "react-icons/cg";
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { RiChatDeleteFill } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";

const WatchList = ({ review }) => {
  // remove a item from watchlist
  const handleRemoveWatch = (item) => {
    // console.log(item);
    const id = item._id;
    const isWatchList = false;
    const changedData = {
      isWatchList,
    };

    //
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
          toast.success("Removed");
        } else {
          toast.error("Already added this game");
        }
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
              onClick={() => handleRemoveWatch(review)}
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
