import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { PDFViewer, PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useQuery, useQueryClient } from "@tanstack/react-query";

const AppliedJobs = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    // const [jobsApplied, setJobsApplied] = useState([]);
    const [filter, setFilter] = useState('');
    // const queryClient = useQueryClient();

    const { data: jobsApplied = [], isLoading, refetch, isError, error } = useQuery({
        queryFn: () => getData(),
        queryKey: ['jobs', user?.email, {filter}]
    });

    const getData = async () => {
        const { data } = await axiosSecure(`/appliedJobs/${user?.email}?filter=${filter}`)
        return data;
               
    }

    if (isLoading)
        return
    <div className="flex items-center justify-center text-7xl my-40">
        <span className="loading loading-bars loading-lg"></span>
    </div>



        // useEffect(() => {
        //     getData()
        // }, [user, filter])

        // const getData = async () => {
        //     const { data } = await axiosSecure(`/appliedJobs/${user?.email}?filter=${filter}`)
        //     console.log(data)
        //     setJobsApplied(data)
        // }

        const MyDocument = ({ jobs }) => (

            <Document>
                <Page size="A4">
                    <View style={styles.table}>
                        {/* Heading row */}
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={[styles.cell, styles.header]}>Company Name</Text>
                                {jobs.map(job => (
                                    <Text key={job._id} style={styles.cell}>{job.companyName}</Text>
                                ))}
                            </View>
                            <View style={styles.column}>
                                <Text style={[styles.cell, styles.header]}>Job Category</Text>
                                {jobs.map(job => (
                                    <Text key={job._id} style={styles.cell}>{job.appliedJobCategory}</Text>
                                ))}
                            </View>
                            <View style={styles.column}>
                                <Text style={[styles.cell, styles.header]}>Job Title</Text>
                                {jobs.map(job => (
                                    <Text key={job._id} style={styles.cell}>{job.job_title}</Text>
                                ))}
                            </View>
                            <View style={styles.column}>
                                <Text style={[styles.cell, styles.header]}>Deadline</Text>
                                {jobs.map(job => (
                                    <Text key={job._id} style={styles.cell}>{new Date(job.deadLine).toLocaleDateString()}</Text>
                                ))}
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>

        );
    

        return (
            <div className="my-20">

                <div className="container mx-auto text-center flex flex-col items-center">
                    <h2 className="text-2xl dark:text-blue-400 text-blue-900 mt-20 mb-14">Applied Jobs: {jobsApplied.length}</h2>
                    
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
                    <PDFViewer style={{ width: '100%', height: '500px' }}>
                        <MyDocument jobs={jobsApplied} />
                    </PDFViewer>

                    <button className="mt-8 relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                            <PDFDownloadLink document={<MyDocument jobs={jobsApplied} />} fileName="applied-jobs.pdf">
                                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
                            </PDFDownloadLink></span></button>

                </div>

            </div>
        );
    };


    const styles = StyleSheet.create({
        table: {
            display: 'table',
            width: '100%',
            borderCollapse: 'collapse',
        },
        row: {
            display: 'flex',
            flexDirection: 'row',
        },
        column: {
            flexDirection: "column",
        },
        cell: {
            display: 'table-cell',
            padding: 8,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#bfbfbf',
            fontSize: "12"
        },
        header: {
            fontWeight: 'bold',
            backgroundColor: '#f2f2f2'
        }

    });

    export default AppliedJobs;

