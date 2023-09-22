import { useEffect, useState } from "react";
import JobCard from "../../Components/JobCard";
import PageBanner from "../../Components/PageBanner";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("./jobs.json");
            const data = await res.json();
            setJobs(data);
        }
        fetchData();
    },[])
    return (
        <>
            <PageBanner title="Jobs Posts"></PageBanner>
            <section className="mb-16 mt-7">
               
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="grid lg:grid-cols-2 gap-6 ">
                        {
                            jobs && jobs.map(job => <JobCard key={job.id} job={job}></JobCard> )
                        }
                    </div>
            
                </div>
            </section>
        </>
    );
};

export default Jobs;