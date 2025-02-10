import MainLayout from "../layouts/MainLayout";
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
];

export default router;
