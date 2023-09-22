import { useEffect, useState } from "react";
import { getJobs } from "../../Utils/JobStorage";
import {  useLoaderData } from "react-router-dom";
import ApplyJobCard from "../../Components/ApplyJobCard";
import PageBanner from "../../Components/PageBanner";

const ApplyJobs = () => {
    const jobs = useLoaderData();
    const [applyJobs, setApplyJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleFilter = (e) => {
        const filterData = e.target.value;
        const filter = applyJobs.filter(job => job.remote_or_onside === filterData )
        if(filterData === 'all'){
            setDisplayJobs(applyJobs)
        }else{
            setDisplayJobs(filter)
        }
    }

    useEffect(() => {
        const getJobss = getJobs();
        if( jobs.length > 0 ){
            let allJobs = [];
            for( let item of getJobss ){
               
                let findJob = jobs.find(job => job.id == item);
                allJobs.push(findJob);
            }
            setApplyJobs(allJobs);
            setDisplayJobs(allJobs);
        }
    },[jobs])
    return (
        <>
            <PageBanner title="Applyed Jobs"></PageBanner>
            <section className="mb-16 mt-10">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="mb-4 flex justify-between items-center">
                        <p className="text-base text-gray-700">Show <span className="font-medium">{displayJobs.length}</span> jobs</p>
                        <select onChange={handleFilter} name="flter" id="" className="border py-1 px-3 text-gray-600 outline-none">
                            <option value="all">All</option>
                            <option value="remote">Remote</option>
                            <option value="onside">Onside</option>
                        </select>
                    </div>
                    <ul className="space-y-4 ">
                        {
                            displayJobs.map(applyJob => <ApplyJobCard key={applyJob.id} applyJob={applyJob}></ApplyJobCard> )
                        }
                    
                    </ul>
                </div>
            </section>   
        </>
    );
};

export default ApplyJobs;