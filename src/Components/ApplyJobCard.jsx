
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCircleDollarToSlot, FaLocationDot } from 'react-icons/fa6';

const ApplyJobCard = ({applyJob}) => {

    const {company_logo,job_title,company_name,information , salary  } = applyJob;
    const {address} = information;
    const {top,low} = salary;
    return (
        <>
        <li className="flex  flex-col lg:flex-row gap-5 border p-5 rounded-md ">
            <div className="">
                <div className="lg:bg-[#F4F4F4]  lg:h-full lg:w-[200px] flex items-center p-5 rounded-md">
                    <img src={company_logo} className='lg:mx-auto' alt="" />
                </div>
            </div>
            <div className="flex-grow space-y-2">
                <h3 className="text-2xl font-bold text-gray-700">{job_title}</h3>
                <p className="text-gray-500 font-medium">{company_name}</p>                             
                <div className="flex gap-3 mt-2">
                    <button className=" border border-[#7E90FE] px-3 py-1 rounded text-[#7E90FE] font-semibold">Remote</button>
                    <button className=" border border-[#7E90FE] px-3 py-1 rounded text-[#7E90FE] font-semibold">Full Time</button>
                </div>
                <div className="flex items-center flex-wrap gap-2 lg:gap-4 text-base text-[#757575]">
                    <span className="flex items-center gap-2"> <FaLocationDot></FaLocationDot> {address}</span>
                    <span className="flex items-center gap-2"> <FaCircleDollarToSlot></FaCircleDollarToSlot>  Salary : {low} - {top}</span>
                </div>
            </div>
            <div className="flex items-center lg:justify-end">
                <Link to={`/job/1`}>
                    <button className="bg-[linear-gradient(90deg_,_#7E90FE_0%_,_#9873FF_100%)] px-3 py-2 rounded-md text-white font-medium">View Details</button>
                </Link>
            </div>
        </li>   
        </>
    );
};

ApplyJobCard.propTypes = {
    applyJob: PropTypes.object.isRequired,
};

export default ApplyJobCard;