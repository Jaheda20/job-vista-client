import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const JobCards = ({ job }) => {

    const { _id, photo, jobTitle, company, jobCategory, minSalary, maxSalary, publishedDate, deadline, recruiter, applicants_count } = job;

    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.2 }} 
                transition={{ duration: 0.8 }} 
                className="card"
            >
                <div className="w-full max-w-sm px-4 md:px-8 py-3 md:py-8 bg-fuchsia-50 border rounded-md shadow-xl dark:bg-gray-800">
                    <div className="flex gap-5">
                    <img src={photo} alt="" className="w-20 h-20 rounded-full" />
                    <div>
                        <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{jobTitle}</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{company}</p>
                        <span className="text-sm font-light text-gray-800 dark:text-gray-400">Deadline: {new Date(deadline).toLocaleDateString()} </span>
                        </div>

                    </div>
                    <div className="mt-5 space-y-4">
                            <p className="px-3 py-1 text-lg text-violet-800 bg-fuchsia-200 rounded-full dark:bg-blue-300 dark:text-blue-900">Salary: ${minSalary} - ${maxSalary}</p>
                            
                        </div>
                    
                    <div className="flex mt-4 gap-4">
                    <p className="px-3 py-1 text-xs text-indigo-800 uppercase bg-fuchsia-300 rounded-full dark:bg-blue-300 dark:text-blue-900">{jobCategory}</p>

                        <span className="px-3 py-1 text-xs text-indigo-800 uppercase bg-fuchsia-300 rounded-full dark:bg-blue-300 dark:text-blue-900">Applicants: {applicants_count}</span>
                    </div>

                    <div>
                        <div className="flex flex-col items-start mt-8 text-gray-700 dark:text-gray-200">
                            <div className="flex">
                                <span className="text-gray-500 text-sm">Published: </span>
                                <p className="mx-2 text-gray-500 text-sm cursor-pointer dark:text-blue-400 hover:underline">{publishedDate}</p>
                            </div>
                            <div className="flex mt-1">
                                <p className="">Contact:</p>
                                <div className="flex flex-col justify-start">
                                    <p className="mx-2 text-slate-500 cursor-pointer text-sm dark:text-blue-400 hover:underline" tabIndex="0">{recruiter?.name}</p>
                                    <p className="mx-2 text-slate-500 cursor-pointer text-sm dark:text-blue-400 hover:underline" tabIndex="0">{recruiter?.email}</p>

                                </div>


                            </div>
                            <div className="flex my-4 w-full justify-end">
                                <Link to={`/job/${_id}`} className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                    <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">View Details</span></Link>


                            </div>

                        </div>


                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default JobCards;

JobCards.propTypes={
    job: PropTypes.object
}