/* eslint-disable no-unused-vars */
import { createBrowserRouter, Navigate } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
// import couponsData from "../../public/coupon.json";

const routes = [
  {
    path: "/",
    element: <Home></Home>,
    // children: [
    //   {
    //     path: "/",
    //     element: <HomePage></HomePage>,
    //     loader: () => fetch("/coupon.json"),
    //   },
    //   {
    //     path: "/brands",
    //     element: <Brands></Brands>,
    //     loader: () => fetch("/coupon.json"),
    //   },

    //   {
    //     path: "/update-profile",
    //     element: <UpdateProfile></UpdateProfile>,
    //   },
    //   {
    //     path: "/about-dev",
    //     element: <AboutDeveloper></AboutDeveloper>,
    //   },
    // ],
  },

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
