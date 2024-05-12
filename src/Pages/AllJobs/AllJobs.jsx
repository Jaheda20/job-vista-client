import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allJobs?search=${search}`)
            console.log(data)
            setJobs(data)
        }
        getData()

    }, [search])

    const handleSearch = e =>{
        e.preventDefault();
        
        setSearch(searchText)
    }

    return (
        <div>
            <div className="container mx-auto text-center flex flex-col items-center">
                <h2 className="text-4xl dark:text-blue-400 text-blue-900 mt-20 mb-14">All Available Jobs</h2>
                <div className="overflow-x-auto mb-10 border rounded-xl p-4">
                    <form onSubmit={handleSearch} className="flex items-center justify-center ">
                        <label className="input input-bordered flex items-center gap-2 my-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            <input type="text" className="w-96" name="search" onChange={e=>setSearchText(e.target.value)} value={searchText} placeholder="Enter Job Title" />

                            <button className='px-1 md:px-4 py-2 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </label>
                        
                    </form>
                    <table className="table">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Job Title</th>
                                <th>Company Name</th>
                                <th>Job Category</th>
                                <th>Salary Range</th>
                                <th>Job Posted Date</th>
                                <th>Application Deadline</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobs.map(job =>
                                    <tr key={job._id}>
                                        <th></th>

                                        <td>{job.jobTitle}</td>
                                        <td>{job.company}</td>
                                        <td>{job.jobCategory}</td>
                                        <td>${job.minSalary} - ${job.maxSalary}</td>
                                        <td>{job.publishedDate}</td>
                                        <td>{new Date(job.deadline).toLocaleDateString()}</td>
                                        <td>
                                            <Link to={`/job/${job._id}`} className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-300 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                                <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                                <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">View Details</span></Link>
                                        </td>




                                    </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default AllJobs;