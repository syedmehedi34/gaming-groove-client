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
import PrivateRoute from "./PrivateRoute";
import ReviewDetails from "../components/ReviewDetails";
import "react-tooltip/dist/react-tooltip.css";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://gaming-groove-server.vercel.app/reviews/sorts"),
      },
      {
        path: "/reviews",
        element: <AllReviews></AllReviews>,
        loader: () => fetch("https://gaming-groove-server.vercel.app/reviews"),
      },
      {
        path: "/review/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(`https://gaming-groove-server.vercel.app/review/${params.id}`),
      },

      // ! add review private route starts
      {
        path: "/add_review",
        element: (
          <PrivateRoute>
            <AddReviews></AddReviews>
          </PrivateRoute>
        ),
      },
      // ! add review private route ends  .

      // ! my reviews private route starts
      {
        path: "/my_reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      // ! my reviews private route ends  .

      {
        path: "/game_watchlist",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
        // element: <GameWatchList></GameWatchList>,
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
