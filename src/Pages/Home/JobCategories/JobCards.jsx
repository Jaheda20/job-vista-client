import { Link } from "react-router-dom";


const JobCards = ({ job }) => {

    const {_id, category, name, job_title, posting_date, deadline, salary_range, applicants_number} = job;

    return (
        <div>
            <div className="w-full max-w-sm px-4 py-3 bg-fuchsia-100 border rounded-md shadow-xl dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-800 dark:text-gray-400">Deadline: {deadline}</span>
                    <span className="px-3 py-1 text-xs text-indigo-800 uppercase bg-fuchsia-300 rounded-full dark:bg-blue-300 dark:text-blue-900">No. of Applicants: {applicants_number}</span>
                </div>

                <div>
                    <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{job_title}</h1>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{name}</p>
                    <div className="flex mt-2">
                        <p className="px-3 py-1 text-xs text-violet-800 bg-fuchsia-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{salary_range}</p>
                        <p className="px-3 py-1 ml-2 text-xs text-violet-800 bg-fuchsia-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{category}</p>

                    </div>

                </div>


                <div>
                    <div className="flex flex-col items-start mt-2 text-gray-700 dark:text-gray-200">
                        <div className="flex">
                            <span className="text-gray-500 text-sm">Published: </span>
                            <p className="mx-2 text-gray-500 text-sm cursor-pointer dark:text-blue-400 hover:underline">{posting_date}</p>
                        </div>
                        <div>
                            <span>Contact Person:</span>
                            <a className="mx-2 text-indigo-700 cursor-pointer dark:text-blue-400 hover:underline" tabIndex="0" role="link">Jaheda Sultana</a>

                        </div>
                        <div className="flex my-4 w-full justify-end">
                            <Link to="/jobDetails" className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">View Details</span></Link>


                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default JobCards;