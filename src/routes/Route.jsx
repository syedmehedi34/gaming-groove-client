import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import AllReviews from "../pages/AllReviews";
import AddReviews from "../pages/AddReviews";
import MyReviews from "../pages/MyReviews";
import GameWatchList from "../pages/GameWatchList";
import Login from "../components/Login";
import Register from "../components/Register";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all_reviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/add_review",
        element: <AddReviews></AddReviews>,
      },
      {
        path: "/my_reviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/game_watchlist",
        element: <GameWatchList></GameWatchList>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },

  ////////////
  {
    path: "*",
    element: <Error></Error>,
  },
];
const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default router;
