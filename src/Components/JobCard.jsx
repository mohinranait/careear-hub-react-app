import { FaCircleDollarToSlot, FaLocationDot } from "react-icons/fa6";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const JobCard = ({job}) => {
    const {id,company_logo,job_title,company_name,location,salary} = job;
    const {top, low} = salary;
    return (
        <>
            <div className="border p-7">
                <div className="space-y-3">
                    <div>
                        <img src={company_logo} alt={job_title} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#474747]">{job_title}</h3>
                    <p className="text-[#757575] font-semibold">{company_name}</p>
                    <div className="flex gap-3 mt-2">
                        <button className=" border border-[#7E90FE] px-3 py-1 rounded text-[#7E90FE] font-semibold">Remote</button>
                        <button className=" border border-[#7E90FE] px-3 py-1 rounded text-[#7E90FE] font-semibold">Full Time</button>
                    </div>
                    <div className="flex items-center gap-4 text-base text-[#757575]">
                        <span className="flex items-center"> <FaLocationDot></FaLocationDot> {location}</span>
                        <span className="flex items-center"> <FaCircleDollarToSlot></FaCircleDollarToSlot> Salary : {low} - {top}</span>
                    </div>
                    <div>
                    <Link to={`/job/${id}`}>
                        <button className="bg-[linear-gradient(90deg_,_#7E90FE_0%_,_#9873FF_100%)] px-3 py-2 rounded-md text-white font-medium">View Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

JobCard.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobCard;