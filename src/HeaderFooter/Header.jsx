import { Link, NavLink } from "react-router-dom";
import { IoCloseOutline, IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {

    const [menu,setMenu] = useState(false);

    const menuItems = (
        <>
            <li><NavLink className="px-4 py-1 inline-block font-medium text-base text-gray-600" to="/">Home</NavLink></li>
            <li><NavLink className="px-4 py-1 inline-block font-medium text-base text-gray-600" to="/jobs">Jobs</NavLink></li>
            <li><NavLink className="px-4 py-1 inline-block font-medium text-base text-gray-600" to="/applyed-jobs">Apply Jobs</NavLink></li>
        </>
    )

    return (
        <header className="">
            <div className="">
                <div className="container  mx-auto px-5 lg:px-0">
                    <div className=" relative ">
                        <div className="z-50 relative py-5 bg-white ">
                            <div className="grid z-50 grid-cols-2 lg:grid-cols-3 items-center gap-2">
                                <div className="">
                                    <Link to={'/'}>
                                        <img src="https://i.ibb.co/2qMN3kt/Career-Hub.png" alt="Logo" />
                                    </Link>
                                </div>
                                <div className="hidden lg:block">
                                    <ul className="flex items-center justify-center">
                                        {menuItems}
                                    </ul>
                                </div>
                                <div className="hidden lg:flex justify-end">
                                    <button className="bg-[linear-gradient(90deg_,_#7E90FE_0%_,_#9873FF_100%)] px-4 py-3 rounded-md text-white font-medium">Star Applying</button>
                                </div>
                                <div className="lg:hidden">
                                    <div className="flex items-center justify-end">
                                        <button  onClick={() => setMenu(!menu)} className="text-gray-600 text-3xl">
                                            {
                                                menu ? <IoCloseOutline></IoCloseOutline> :  <IoMenu></IoMenu> 
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* w-[calc(100%-40px)] */}
                        <div className={` 
                            ${menu ? 'top-[70px]' : '-top-52'}
                            lg:hidden w-full absolute transition-all duration-500 z-0 `}>
                            <ul className="bg-white w-full shadow p-5 space-y-2 rounded-b-md block">
                               {menuItems}
                            </ul>
                        </div>
                    </div>
                
                </div>
            </div>
           
        </header>
    );
};

export default Header;