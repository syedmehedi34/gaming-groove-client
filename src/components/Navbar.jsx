import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const list = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">All Reviews</NavLink>
      </li>

      <li>
        <NavLink to="/add_review">Add Review</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/my_reviews">My Reviews</NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink to="/game_watchlist">Game WatchList</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-slate-300 w-full fixed top-0 z-50">
      <div className="bg-slate-300 w-11/12 mx-auto ">
        <div className="navbar">
          {/*// * start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {list}
              </ul>
            </div>
            <Link to="/">
              <p className="btn btn-ghost text-xl hover:bg-inherit">
                Gaming Groove
              </p>
            </Link>
            {/* <p className="btn btn-ghost text-xl">Gaming Groove</p> */}
          </div>

          {/*// * center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{list}</ul>
          </div>

          {/*// * ends */}
          <div className="navbar-end">
            <div>
              {user && user?.email ? (
                <div className="flex items-center gap-5">
                  {/*  */}

                  <div
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                    data-tooltip-place="bottom"
                  >
                    <img
                      className="w-12 h-12 rounded-full transition-transform duration-200 ease-in-out  active:scale-90  cursor-pointer object-cover border-2 border-[#1e3c72]"
                      src={user?.photoURL}
                      alt="Error"
                    />
                  </div>
                  <button
                    onClick={() => {
                      logOut();
                      toast.success("Logged out successfully!", {
                        position: "top-left",
                        autoClose: 2000,
                        pauseOnHover: true,
                      });
                    }}
                    className="btn btn-neutral"
                  >
                    Log Out
                  </button>

                  {/* <p>{user?.displayName}</p> */}
                </div>
              ) : (
                <div className="flex items-center gap-1 *:text-white">
                  <Link
                    to="/auth/login"
                    className="btn bg-[#162c57cd] hover:bg-[#162c57cd]"
                  >
                    SignIn
                  </Link>
                  <Link
                    to="/auth/register"
                    className="btn  bg-[#162c57cd] hover:bg-[#162c57cd]"
                  >
                    SignUp
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
