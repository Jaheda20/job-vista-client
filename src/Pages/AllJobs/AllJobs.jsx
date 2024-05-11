import { useLoaderData } from "react-router-dom";


const AllJobs = () => {

    const allJobs = useLoaderData([]);
    console.log(allJobs)

    return (
        <div>
            <h2>AllJObs</h2>
            
        </div>
    );
};

export default AllJobs;