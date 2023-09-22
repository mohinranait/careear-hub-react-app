
import SectionTitle from "../SectionTitle";
import { useEffect, useState } from "react";
import JobCard from "../JobCard";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [countJobs, setCountJobs] = useState(4)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("./jobs.json");
            const data = await res.json();
            setJobs(data);
        }
        fetchData();
    },[])
    return (
        <section className="mb-16">
            <SectionTitle title="Featured Jobs" text="Explore thousands of job opportunities with all the information you need. Its your future"></SectionTitle>
            <div className="container mx-auto px-5 lg:px-0">
                <div className="grid lg:grid-cols-2 gap-6 ">
                    {
                        jobs && jobs.slice(0,countJobs).map(job => <JobCard key={job.id} job={job}></JobCard> )
                    }
                </div>
          
                <div className={`text-center mb-16 mt-10 ${countJobs === jobs.length && 'hidden'}`}>
                    <button onClick={() => setCountJobs(jobs.length) } className="bg-[linear-gradient(90deg_,_#7E90FE_0%_,_#9873FF_100%)] px-3 py-2 rounded-md text-white font-medium">See All Jobs</button>
                </div>
            </div>
        </section>
    );
};

export default FeatureJobs;