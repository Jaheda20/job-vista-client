import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import axios from "axios";


const AppliedJobs = () => {
    const {user} = useAuth();
    const [jobsApplied, setJobsApplied] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getData()
    }, [user, filter])

    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/appliedJobs/${user?.email}?filter=${filter}`, {withCredentials: true})
        console.log(data)
        setJobsApplied(data)
        
    }


    return (
        <div>
            
            <div className="container mx-auto text-center flex flex-col items-center">
            <h2 className="text-4xl dark:text-blue-400 text-blue-900 mt-20 mb-14">Applied Jobs: {jobsApplied.length}</h2>
            <div className="overflow-x-auto mb-10 border border-fuchsia-400 rounded-xl p-4 ">
            <div className="flex items-end justify-end my-5">
            <select        
              name='category'
              value={filter}
              onChange={e => 
                setFilter(e.target.value)}
              id='category'
              className='border py-2 px-5 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Permanent'>Permanent</option>
              <option value='Temporary'>Temporary</option>
              <option value='Part-Time'>Part-Time</option>
              <option value='On-Site'>On-Site</option>
              <option value='Remote'>Remote</option>
              <option value='Hybrid'>Hybrid</option>
              
            </select>
          </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Company Name</th>
                            <th>Job Title</th>
                            <th>Job Category</th>
                            <th>Deadline</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobsApplied.map(jobApp => 
                                <tr key={jobApp._id}>
                                    <th></th>
                                    <td>{jobApp.companyName}</td>
                                    <td>{jobApp.job_title}</td>
                                    <td>{jobApp.appliedJobCategory}</td>
                                    <td>{new Date(jobApp.deadLine).toLocaleDateString()}</td>
                                    
                                    

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
            
        </div>
    );
};

export default AppliedJobs;