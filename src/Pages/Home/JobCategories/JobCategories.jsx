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
        <div className="container mx-auto my-6">
            <Tabs>
                <div className="px-10 py-10 border border-dashed">
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
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2">
                            {jobs.filter(j => j.category === 'permanent').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}

                        </div>

                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2">
                            {jobs.filter(j => j.category === 'temporary').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2">
                            {jobs.filter(j => j.category === 'part-time').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2">
                            {jobs.filter(j => j.category === 'on-site').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2">
                            {jobs.filter(j => j.category === 'remote').
                                map(job => <JobCards key={job._id} job={job}>

                                </JobCards>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 px-2">
                            {jobs.filter(j => j.category === 'hybrid').
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