
const getJobs = () => {
    let jobs = [];
    const getJobLs = localStorage.getItem('jobs');
    if( getJobLs ){
        jobs =  JSON.parse(getJobLs);
    }
    return jobs;
}


const storeJobs  = (id) => {
    let added = false;
    let jobs = getJobs();
    const exists = jobs.find(job => job == id);
    if( !exists ){
        let data = [...jobs, id]
        const convertData = JSON.stringify(data);
        localStorage.setItem('jobs', convertData)
        added = true;
    }
    return added;
   
}

export {storeJobs,getJobs}