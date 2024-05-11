import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddJob = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="container mx-auto my-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl">Add Job</h1>
            <div className="card mt-8 shrink-0 w-full max-w-4xl border shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo url" className="input input-bordered w-full" required />
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
                                <option value='On Site'>On Site</option>
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
                        <input type="number" name="applicants_number" placeholder="Number of Applicants" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Posted By</span>
                        </label>
                        <input type="email" name="email" placeholder="Users Email" className="input input-bordered w-full" required />
                    </div>

                    </div>
                    




                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add</button>
                    </div>

                </form>
            </div>


        </div>
    );
};

export default AddJob;