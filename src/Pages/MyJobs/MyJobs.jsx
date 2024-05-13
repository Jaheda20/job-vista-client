import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";






const MyJobs = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/myJobs/${user?.email}`, {withCredentials: true})
        setJobs(data)
    }

    const handleDelete = async (id) => {
        console.log(id)
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            try {
                const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteJob/${id}`)
                console.log(data)
                if (data.deletedCount > 0)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your spot has been deleted.",
                        icon: "success"
                    });
                getData()
            }
            catch (error) {
                console.log(error.message)

            }
        }
    }




    return (
        <div className="container mx-auto text-center flex flex-col items-center">
            <Helmet>
                <title>JobVista | My Listed Job</title>
            </Helmet>
            <h2 className="text-4xl dark:text-blue-400 text-blue-900 mt-20 mb-14">My Listed Jobs</h2>
            <div className="overflow-x-auto mb-10 border border-fuchsia-400 rounded-xl p-4 ">
                <table className="table">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Job Title</th>
                            <th>Company Name</th>
                            <th>Job Category</th>
                            <th>Job Description</th>
                            <th>Salary Range</th>
                            <th>Posted Date</th>
                            <th>Application Deadline</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job =>
                                <tr key={job._id}>
                                    <th></th>
                                    <td><img src={job.photo} alt="" /></td>
                                    <td>{job.jobTitle}</td>
                                    <td>{job.company}</td>
                                    <td>{job.jobCategory}</td>
                                    <td>{job.jobDescription.substring(0, 80)}...</td>
                                    <td>${job.minSalary} - ${job.maxSalary}</td>
                                    <td>{job.publishedDate}</td>
                                    <td>{new Date(job.deadline).toLocaleDateString()}</td>

                                    <td><Link to={`/update/${job._id}`}><FaEdit size={20}/>
                                    </Link>
                                    </td>
                                    <td onClick={() => handleDelete(job._id)}> <RiDeleteBin6Line size={20} />
                                    </td>

                                </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyJobs;