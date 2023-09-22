
const BannerSection = () => {
    return (
        <>
            <section className="bg-[linear-gradient(90deg,rgba(126,144,254,0.05)0%,rgba(152,115,255,0.05)100%)]">
                <div className="container px-5 lg:px-0 mx-auto">
                    <div className="grid items-center  md:grid-cols-2 gap-5">
                        <div className="order-2 md:order-1">
                            <div>
                                <h1 className=" text-4xl  lg:text-5xl xl:text-7xl leading-normal font-bold ">One Step Closer To Your <span className="bg-[linear-gradient(90deg_,_#7E90FE_0%_,_#9873FF_100%)] bg-clip-text text-transparent">Dream Job</span> </h1>
                                <p className="text-base text-gray-500 lg:pr-32 my-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                                <button className="bg-[linear-gradient(90deg_,_#7E90FE_0%_,_#9873FF_100%)] px-4 py-3 rounded-md text-white font-medium">Get Started</button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <img src="./image/images/user.png" alt="user" />
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default BannerSection;