import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/client/auth/Login";
import Register from "../pages/client/auth/Register";
import HomePage from "../pages/client/home/HomePage";
import MoviesPage from "../pages/client/movies/MoviesPage";
import { RouteObject } from "react-router-dom";

const router: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <MoviesPage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default router;
