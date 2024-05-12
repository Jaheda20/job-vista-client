import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorElement/ErrorPage";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import JobDetails from "../Pages/Home/JobCategories/JobDetails";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AddJob from "../Pages/AddJob/AddJob";
import PrivateRoute from "./PrivateRoute";
import MyJobs from "../Pages/MyJobs/MyJobs";
import UpdateJobs from "../Pages/MyJobs/UpdateJobs";
import AppliedJobs from "../AppliedJobs/AppliedJobs";



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
          path: "/job/:id",
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path: "/addJob",
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: "/myJobs",
          element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
        },
        {
          path: "/update/:id",
          element: <PrivateRoute><UpdateJobs></UpdateJobs></PrivateRoute>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        },
        {
          path: "/appliedJobs",
          element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
        }
      
      ]
    },
  ]);

export default router;