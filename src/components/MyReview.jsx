import { FiEdit } from "react-icons/fi";
import { RiChatDeleteFill } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MyReview = ({ review, handleDelete }) => {
  return (
    <>
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
              <div className="font-bold">{review?.gameTitle}</div>
              <div className="text-[12px] opacity-50">
                Published in : {review?.publishingYear}
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
        <td>{review?.genre}</td>
        <th>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleDelete(review._id)}
              className="btn btn-ghost min-w-0 min-h-0 p-0 hover:bg-inherit h-fit"
            >
              <RiChatDeleteFill size={20} />
            </button>
            <Link>
              <button className="btn btn-ghost min-w-0 min-h-0 p-0 hover:bg-inherit h-fit">
                <FiEdit size={18} />
              </button>
            </Link>
          </div>
        </th>
      </tr>
    </>
  );
};

export default MyReview;
