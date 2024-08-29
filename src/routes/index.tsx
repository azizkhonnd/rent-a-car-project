import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import SingleCarPage from "./singleCarPage/SingleCar";
import Dashboard from "./Dashboard";
import Create from "./create/Create";
import Register from "./auth/sign-up/SignUp";
import Login from "./auth/sign-in/Login";
import OtpVerified from "./auth/otp-page/Otp";
import Auth from "./auth/Auth";
import LikedCars from './likedCar-page/LikedCars';
import UserInfo from "./user-info/UserInfo";
import UserSettings from "./user-settings/UserSettings";

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Home />,

    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "create",
          element: <Create />,
        },
      ],
    },
    {
      path: "cars/:id",
      element: <SingleCarPage />,
    },
    {
      path: "auth",
      element: <Auth />,
      children: [
        {
          path: "sign-up",
          element: <Register />,
        },
        {
          path: "sign-in",
          element: <Login />,
        },
        {
          path: "verify-otp",
          element: <OtpVerified email={""} />,
        },
      ],
    },
    {
      path: "liked-cars",
      element: <LikedCars />,
    },
    {
      path: "user-settings",
      element: <UserSettings />,

    },
    {
      path: "user-info",
      element: <UserInfo />,
    },
  ]);
};

export default RouteController;
