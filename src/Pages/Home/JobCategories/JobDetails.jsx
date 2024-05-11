import { useLoaderData } from "react-router-dom";


const JobDetails = () => {

    const job = useLoaderData();
    const { image, name, job_title, job_description, applicants_number, salary_range, company_description, deadline, skills } = job;
    const skillsArray = JSON.parse(skills)


    return (
        <div className="container mx-auto flex justify-center items-center my-10">

            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-fit" src={image} alt="Article"></img>

                <div className="p-6">
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{name}</p>
                            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Apply Now</button>
                        </div>

                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{job_title}</a>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><b>Job Description: </b><span>{job_description}</span></p>

                        <div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><b>Skills Required:</b></p>
                            <ul>
                                {
                                    skillsArray.map((skill, id) =>
                                        (<li key={id} className="text-sm text-gray-600 dark:text-gray-400">- {skill}</li>))
                                }

                            </ul>

                        </div>

                        <p className="mt-4 text-lg font-medium text-blue-600 uppercase dark:text-blue-400">Salary: {salary_range}</p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"><b>Company Background: </b><span>{company_description}</span></p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">Application Deadline: {deadline}</p>
                            <p className="text-xs font-medium text-blue-600 uppercase bg-blue-200 px-4 py-1 rounded-full dark:text-blue-400">No. of Application: {applicants_number}</p>
                        </div>

                    </div>
                </div>
            </div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-4xl">
                    <h3 className="font-bold text-lg text-center">Submit Your Application</h3>
                    <div className="card shrink-0 w-full max-w-5xl border shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="flex w-full gap-3">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                                </div>
                            </div>

                            <div className="flex w-full gap-3">
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
                            </div>

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
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default JobDetails;