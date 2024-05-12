import { useLoaderData } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const JobDetails = () => {
    const { user } = useAuth();
    const job = useLoaderData();
    const { _id, photo, jobTitle, company,
        minSalary, maxSalary,
        jobDescription,
        deadline, recruiter,
        applicants_count } = job;

    const handleApplication = async (e) => {
        e.preventDefault();
        if ((user?.email) === (recruiter?.email)) {
            return toast.error('Action is not allowed')
        }
        const form = e.target;
        const name = form.name.value;
        const jobId = _id;
        const email = user?.email;
        const deadLine = new Date(deadline);
        const currentDate = new Date();
        const applicationData = { name, jobId, email, deadLine, currentDate }
        console.log(applicationData)
        if(currentDate > deadline){
            return toast.error('Application deadline is over')
        }

    }



    return (
        <div className="container mx-auto flex justify-center items-center my-10">

            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-fit" src={photo} alt="Article"></img>

                <div className="p-6">
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{company}</p>
                            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Apply Now</button>
                        </div>

                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{jobTitle}</a>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><b>Job Description: </b><span>{jobDescription}</span></p>


                        <p className="mt-4 text-lg font-medium text-blue-600 uppercase dark:text-blue-400">Salary: ${minSalary} - ${maxSalary}</p>

                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">Application Deadline: {new Date(deadline).toLocaleDateString()}</p>
                            <p className="text-xs font-medium text-blue-600 uppercase bg-blue-200 px-4 py-1 rounded-full dark:text-blue-400">No. of Application: {applicants_count}</p>
                        </div>

                    </div>
                </div>
            </div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-4xl">
                    <h3 className="font-bold text-lg text-center">Submit Your Application</h3>
                    <div className="card shrink-0 w-full max-w-5xl border shadow-2xl bg-base-100">
                        <form onSubmit={handleApplication} className="card-body" method="dialog">
                            <div className="flex w-full gap-3">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered w-full" required />
                                </div>
                            </div>

                            {/* <div className="flex w-full gap-3">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
                                </div>
                            </div> */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Attach Resume</span>
                                </label>
                                <input type="file" required />

                            </div>
                            <div className="form-control">
                                <label className="label flex items-center justify-center">
                                    <input type="checkbox" className="checkbox-input" required />
                                    <span className="checkbox-text ml-2">I accept terms and Conditions</span>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                            
                        </form>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </div>

                </div>
            </dialog>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;