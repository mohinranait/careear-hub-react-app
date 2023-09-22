import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import JobDetails from "../Pages/SingleJob/JobDetails";
import ApplyJobs from "../Pages/ApplyJobs/ApplyJobs";
import CategoryWish from "../Pages/Category/CategoryWish";

const myRoutes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
            },
            {
                path : '/jobs',
                element : <Jobs></Jobs>
            },
            {
                path : "/job/:id",
                element : <JobDetails></JobDetails>,
                loader: async () => await fetch('../jobs.json'),
            },
            {
                path : "/applyed-jobs",
                loader: async () => await fetch("../jobs.json"),
                element : <ApplyJobs></ApplyJobs>
            },
            {
                path: "/category/:id",
                loader: async () => await fetch('../jobs.json'),
                element : <CategoryWish></CategoryWish>
            }
        ]
    }
]);

export default myRoutes;