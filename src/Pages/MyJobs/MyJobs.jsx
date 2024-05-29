
import useAuth from "../../Hook/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";




const MyJobs = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    
 

    const { data: jobs = [], isLoading, refetch } = useQuery({
        queryFn: () => getData(),
        queryKey: ['jobs', user?.email]
    });

    const getData = async () => {
        const { data } = await axiosSecure(`/myJobs/${user?.email}`)
        return (data)
    }

    const { mutateAsync } = useMutation({
        mutationFn: async({id})=> {
            const { data } = await axiosSecure.delete(`/deleteJob/${id}`);
            console.log(data)
            return (data)
        },
        onSuccess:()=>{
            refetch()
        }
    })

    if (isLoading)
        return
    <div className="flex items-center justify-center text-7xl my-40">
        <span className="loading loading-bars loading-lg"></span>
    </div>

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
                await mutateAsync({id})
                // const { data } = await axiosSecure.delete(`/deleteJob/${id}`)
                // console.log(data)
                // if (data.deletedCount > 0)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your job has been deleted.",
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

                                    <td><Link to={`/update/${job._id}`}><FaEdit size={20} />
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