import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import JobCards from "./JobCards";
import { useEffect, useState } from "react";
import axios from "axios";

const JobCategories = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getData = async()=> {
            const { data }  = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getData()

    }, [])

    return (
        <div className="container mx-auto mb-6">
            <h1 className="text-3xl font-semibold">Recently Added Jobs</h1>
            <Tabs>
                <div className="px-10 py-10">
                    <div className="flex items-center justify-center ">
                        <TabList>
                            <Tab>Permanent</Tab>
                            <Tab>Temporary</Tab>
                            <Tab>Part Time </Tab>
                            <Tab>On Site</Tab>
                            <Tab>Remote</Tab>
                            <Tab>Hybrid</Tab>
                        </TabList>

                    </div>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2 gap-4">
                            {jobs.filter(j => j.jobCategory === 'Permanent').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}

                        </div>

                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2 gap-4">
                            {jobs.filter(j => j.jobCategory === 'Temporary').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2 gap-4">
                            {jobs.filter(j => j.jobCategory === 'Part-Time').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2 gap-4">
                            {jobs.filter(j => j.jobCategory === 'On-Site').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2 gap-4">
                            {jobs.filter(j => j.jobCategory === 'Remote').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2 gap-4">
                            {jobs.filter(j => j.jobCategory === 'Hybrid').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}
                        </div>
                    </TabPanel>

                </div>

            </Tabs>

        </div>

    );
};

export default JobCategories;