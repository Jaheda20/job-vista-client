import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorElement/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import JobDetails from "../Pages/Home/JobCategories/JobDetails";
import AllJobs from "../Pages/AllJobs/AllJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <HomePage></HomePage>          
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/allJobs",
          element: <AllJobs></AllJobs>,
          loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        },
        {
          path: "/jobDetails",
          element: <JobDetails></JobDetails>
        }
      ]
    },
  ]);

export default router;