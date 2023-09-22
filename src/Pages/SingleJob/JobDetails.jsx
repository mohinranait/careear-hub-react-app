import { FaCalendarCheck, FaCircleDollarToSlot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeJobs } from "../../Utils/JobStorage";
import PageBanner from "../../Components/PageBanner";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id == id );
    const {job_description,job_responsibility,experiences,salary,job_title,information } = job;
    const {address, email,phone} = information;
    const {top,low} = salary;


    const handleApplyed = () => {
        const added = storeJobs(id);
        if( added ){
            toast("Job apply successfully")
        }else{
            toast("Already exists")
        }
    }


    return (
        <>
            <PageBanner title={job_title}></PageBanner>
            <section className="pb-16 mt-8">
                <div className="container mx-auto px-5 lg:px-0">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-8">
                            <div className="mb-2">
                                <p className="text-base text-gray-700"> <span className="text-lg font-semibold">Job Description:</span> {job_description} </p>
                            </div>
                            <div className="mb-2">
                                <p className="text-base text-gray-700"> <span className="text-lg font-semibold">Job Responsibility:</span> {job_responsibility} </p>
                            </div>
                            <div className="mb-2">
                                <p className="text-base text-gray-700"> <span className="text-lg font-semibold">Experiences:</span> {experiences} </p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="p-5 rounded-md bg-[linear-gradient(90deg,rgba(126,144,254,0.10)0%,rgba(152,115,255,0.10)100%)]">
                                <div>
                                    <div className="pb-2 border-b font-bold text-gray-900">
                                        Job Details
                                    </div>
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-center gap-2 text-base "> <FaCircleDollarToSlot className="text-gray-700"></FaCircleDollarToSlot> <span className="text-gray-700 font-medium text-sm "> <span className="font-bold text-gray-700">Salary:</span> {low} - {top} (Per Month)</span> </li>
                                        <li className="flex items-center gap-2 text-base "> <FaCalendarCheck className="text-gray-700"></FaCalendarCheck> <span className="text-gray-700 font-medium text-sm "> <span className="font-bold text-gray-700">Job Title:</span>  {job_title}</span> </li>
                                    </ul>
                                </div>
                                <div className="mt-5">
                                    <div className="pb-2 border-b font-bold text-gray-900">
                                        Contact Information
                                    </div>
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-center gap-2 text-base "> <FaCircleDollarToSlot className="text-gray-700"></FaCircleDollarToSlot> <span className="text-gray-700 font-medium text-sm "> <span className="font-bold text-gray-700">Phone:</span> {phone}</span> </li>
                                        <li className="flex items-center gap-2 text-base "> <FaCalendarCheck className="text-gray-700"></FaCalendarCheck> <span className="text-gray-700 font-medium text-sm "> <span className="font-bold text-gray-700">Email:</span> {email}</span> </li>
                                        <li className="flex align-top gap-2 text-base "> <FaCalendarCheck className="text-gray-700 mt-1"></FaCalendarCheck> <span className="text-gray-700 font-medium text-sm "> <span className="font-bold text-gray-700">Address:</span> {address}</span> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button onClick={handleApplyed} className="bg-[linear-gradient(90deg_,_#7E90FE_0%_,_#9873FF_100%)] px-4 py-3 rounded-md text-white font-medium w-full">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </section>
        </>
    );
};

export default JobDetails;