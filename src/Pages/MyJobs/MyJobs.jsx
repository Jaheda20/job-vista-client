import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";




const MyJobs = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        const getData = async() =>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/myJobs/${user?.email}`)
            setJobs(data)
        }
        getData()
    }, [user])

     
    
    return (
        <div className="container mx-auto text-center flex flex-col items-center">
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

                                        <td><Link to={`/update/${job._id}`}>Update</Link>
                                            </td>
                                        <td>Delete</td>


                                        {/* <td><Link to="/updateJobs"><button className="flex items-center gap-2 font-bold text-blue-600 btn"><MdOutlineSystemUpdateAlt />
                                            Update</button></Link></td>
                                        <td><button className="flex items-center gap-2 font-bold text-orange-600 btn"><RiDeleteBin6Line />

                                            Delete</button></td> */}
                                    </tr>)
                                }

                                
                            </tbody>
                        </table>
                    </div>
            
        </div>
    );
};

export default MyJobs;