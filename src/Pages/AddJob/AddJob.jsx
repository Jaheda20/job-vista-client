import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";



const AddJob = () => {

    const { user } = useAuth();
    const [startDate, setStartDate] = useState(new Date());

    const handleAddJob = async (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const company = form.company.value;
        const jobTitle = form.title.value;
        const jobCategory = form.category.value;
        const minSalary = parseFloat(form.min_salary.value);
        const maxSalary = parseFloat(form.max_salary.value);
        const jobDescription = form.description.value;
        const publishedDate = form.posted_date.value;
        const deadline = startDate;
        const email = form.email.value;

        const job = {
            photo, jobTitle, company, jobCategory,
            minSalary, maxSalary,
            jobDescription,
            publishedDate, deadline, recruiter: {
                email,
                name: user?.displayName,
                photo: user?.photoURL,
            }, applicants_count: 0,
        };
        console.log(job)
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/addJob`,
                job
            )
            console.log(data)
            if (data?.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your job has been added successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="container mx-auto my-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl">Add Job</h1>
            <div className="card mt-8 shrink-0 w-full max-w-4xl shadow-2xl bg-base-100 border border-violet-600 hover:bg-fuchsia-100">
                <form onSubmit={handleAddJob} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo url" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company</span>
                        </label>
                        <input type="text" name="company" placeholder="Company name" className="input input-bordered w-full" required />
                    </div>

                    <div className="flex w-full gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Job title" className="input input-bordered w-full" required />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className="label">
                                <span className="label-text">Job Category</span>
                            </label>
                            <select name='category' id='category'
                                className='border px-4 py-2 rounded-md'
                            >
                                <option value='Permanent'>Permanent</option>
                                <option value='Temporary'>Temporary</option>
                                <option value='Part-Time'>Part-Time</option>
                                <option value='On-Site'>On-Site</option>
                                <option value='Remote'>Remote</option>
                                <option value='Hybrid'>Hybrid</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex w-full gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Minimum Salary</span>
                            </label>
                            <input type="number" name="min_salary" placeholder="Minimum Salary" className="input input-bordered w-full" required />

                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Maximum Salary</span>
                            </label>
                            <input type="number" name="max_salary" placeholder="Maximum Salary" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-52" name="description" placeholder="Description"></textarea>
                    </div>
                    <div className="flex w-full gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Posted on</span>
                            </label>
                            <input type="date" name="posted_date" placeholder="Posted Date" className="input input-bordered w-full" required />

                        </div>
                        <div className="form-control w-1/2 flex flex-col items-start">
                            <label className="label">
                                <span className="label-text">Application Deadline</span>
                            </label>
                            <DatePicker className="border px-6 py-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div className="flex w-full gap-3">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Number of Applicants</span>
                            </label>
                            <input type="number" name="applicants_number" placeholder="Number of Applicants" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Posted By</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Users Email" className="input input-bordered w-full" required />
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button className="relative inline-flex items-center justify-center px-6 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Add</span></button>
                    </div>

                </form>
            </div>


        </div>
    );
};

export default AddJob;