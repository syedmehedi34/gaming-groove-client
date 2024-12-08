import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const [mode, setMode] = useState("light");
  const handleChangeTheme = () => {
    // console.log("clicked");
    // html.setAttribute("data-theme", "dark");

    const html = document.documentElement;

    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };
  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    document.documentElement.classList.add(currentMode);
    setMode(currentMode);
  }, []);

  const list = (
    <>
      <li className="dark:text-white font-[500]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="dark:text-white font-[500]">
        <NavLink to="/reviews">All Reviews</NavLink>
      </li>

      <li className="dark:text-white font-[500]">
        <NavLink to="/add_review">Add Review</NavLink>
      </li>

      {user && (
        <li className="dark:text-white font-[500]">
          <NavLink to="/my_reviews">My Reviews</NavLink>
        </li>
      )}

      {user && (
        <li className="dark:text-white font-[500]">
          <NavLink to="/game_watchlist">Game WatchList</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className=" bg-slate-300/50 w-full fixed top-0 z-50 dark:bg-dark backdrop-blur-lg ">
      <div className=" w-11/12 mx-auto ">
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
              <p className="hidden md:flex btn btn-ghost text-xl hover:bg-inherit dark:text-white">
                Gaming <span className="text-red-500">Groove</span>
              </p>
            </Link>
            {/* <p className="btn btn-ghost text-xl">Gaming Groove</p> */}
          </div>

          {/*// * center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{list}</ul>
          </div>

          {/*// * ends */}
          <div className="navbar-end  w-5/6 md:w-1/2">
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
                      className="min-w-12 w-12 h-12 rounded-full transition-transform duration-200 ease-in-out  active:scale-90  cursor-pointer object-cover border-2 border-[#1e3c72]"
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
                    className="btn btn-neutral dark:text-white"
                  >
                    Log Out
                  </button>

                  {/* <p>{user?.displayName}</p> */}
                </div>
              ) : (
                <div className="flex items-center gap-1 *:text-white">
                  <Link
                    to="/auth/login"
                    className="btn bg-[#162c57cd] hover:bg-[#162c57cd] dark:border-white/25"
                  >
                    SignIn
                  </Link>
                  <Link
                    to="/auth/register"
                    className="btn  bg-[#162c57cd] hover:bg-[#162c57cd] dark:border-white/25"
                  >
                    SignUp
                  </Link>
                </div>
              )}
            </div>

            {/* toggle theme  */}
            <div className="ml-3">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                  onClick={handleChangeTheme}
                />

                <p className="swap-off h-10 w-10 fill-current flex items-center justify-center dark:text-white">
                  <MdSunny size={28} />
                </p>
                {/* moon icon */}
                <p className="swap-on h-10 w-10 fill-current flex items-center justify-center">
                  <FaMoon size={25} />
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
