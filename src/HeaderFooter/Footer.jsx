
const Footer = () => {
    return (
        <footer className="bg-[#1A1919] pt-20 pb-5">
            <div className="container px-5 lg:px-0 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div>
                        <div>
                            <p className="text-2xl font-bold text-white">CareerHub</p>
                            <p className="text-sm text-gray-300 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, hic? Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-white font-semibold text-xl">Company</p>
                        <ul className="space-y-1 mt-2">
                            <li><a className="font-normal text-base text-gray-400 block " href="#">About US</a></li>
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Works</a></li>
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Latest News</a></li>
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-white font-semibold text-xl">Product</p>
                        <ul className="space-y-1 mt-2">
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Prototype</a></li>
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Plans & Pricing</a></li>
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Customers</a></li>
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Integration</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-white font-semibold text-xl">Support</p>
                        <ul className="space-y-1 mt-2">
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Help Desk</a></li>
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Salse</a></li>
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Become a Partner</a></li>
                            <li><a className="font-normal text-base text-gray-400 block " href="#">Developers</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;