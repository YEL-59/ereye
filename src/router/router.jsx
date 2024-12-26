import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../page/home/Home";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true, 
        element: < Home />,
      },
      // {
      //   path: "aboutus",
      //   element: <AboutUs />,
      // },
     
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
]);

export default router;