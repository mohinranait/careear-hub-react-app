
import { useLoaderData, useParams } from 'react-router-dom';
import JobCard from '../../Components/JobCard';
import { useEffect, useState } from 'react';
import PageBanner from '../../Components/PageBanner';

const CategoryWish = () => {
    const getAllJogs = useLoaderData();
    const {id} = useParams();
    const [category,setCategory] = useState({});
    const jobs = getAllJogs.filter(job => job.category_id == id );

    useEffect(() => {
        if(id){
            const loadData = async () => {
                let res = await fetch("/categoris.json"); // 1 system
                // let res = await fetch("http://localhost:5173/categoris.json") // 2 system
                let categorys = await res.json();
                const category = categorys.find(cat => cat.id == id );
                setCategory(category);
            };
            loadData();
        }
    },[id])

    console.log(category);
    return (
        <>
        <PageBanner title={`${category.name}`}></PageBanner>
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

export default CategoryWish;