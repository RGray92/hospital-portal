import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './css/app.css';
import Home from "./routes/Home";
import Clinic from "./routes/Clinic";
import Medteam from "./routes/Medteam";
import Entertainment from "./routes/Entertainment";
import Navbar from "./components/Navbar";


const AppLayout = () => {
  return(
    <>
    <Navbar />
    <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "clinic",
        element: <Clinic />,
      },
      {
        path: "medteam",
        element: <Medteam />,
      },
      {
        path: "entertainment",
        element: <Entertainment />,
      },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);