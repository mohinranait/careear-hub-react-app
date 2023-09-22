import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import CategoryCard from "../CategoryCard";


const CategorySection = () => {

    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let res = await fetch("./categoris.json");
            let data  = await res.json();
            setCategorys(data);
        };
        getData();
    },[])

    return (
        <section className='py-16'>
            <SectionTitle title="Job Category List" text="Explore thousands of job opportunities with all the information you need. Its your future"></SectionTitle>
            <div className="container mx-auto px-5 lg:px-0">
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        categorys.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>  )
                    }
                </div>
            </div>
        </section>
    );
};

export default CategorySection;