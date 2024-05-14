import { Slide, Zoom } from "react-awesome-reveal";
import { RiFireFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SummerOffer = () => {
    return (
        <div className="bg-purple-200">
            <Zoom>
            <h1 className="text-4xl flex justify-center pt-14 pb-2 items-center font-bold text-Black"> <RiFireFill size={40} className="text-orange-700" />
                JobVista's Summer Hiring Special <RiFireFill size={40} className="text-orange-700" />
            </h1>
            </Zoom>
            <div className="grid grid-cols-1 md:grid-cols-3 px-6 py-14">
                <Slide>
                <div className=" text-black border-r-2 border-r-purple-600 bg-purple-200 p-10 flex flex-col items-center justify-center">
                    <h1 className="text-lg font-bold mb-3 border-rose-50">Enterprise Customers</h1>
                    <p className="text-center">Try JobVista for free with a $100 posting sponsorship credit for your first month.</p>
                    <Link to="/register" className="mt-5 relative inline-flex items-center justify-center px-6 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Get $100 free credit</span>
                    </Link>
                </div>
                </Slide>
                
                <Zoom>
                <div className="border-r-2 border-r-purple-600 bg-purple-200 p-10 flex flex-col items-center justify-center">
                    <h1 className="text-lg text-black font-bold mb-3 border-rose-50">Shifts Customers</h1>
                    <p className="text-center">Sign up and get 6 Shifts for free in your first month. You only pay the worker, not us.</p>
                    <Link to="/register" className="mt-5 relative inline-flex items-center justify-center px-6 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Get 6 free shifts</span>
                    </Link>
                </div>
                </Zoom>
                

                <Slide direction="right">
                <div className=" bg-purple-200 p-10 flex flex-col items-center justify-center">
                    <h1 className="text-lg text-black font-bold mb-3 border-rose-50">Small Businesses</h1>
                    <p className="text-center">Join Snagajob for free and get $25 off each of your first 4 postings, up to $100 savings.</p>
                    <Link to="/register" className="mt-5 relative inline-flex items-center justify-center px-6 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Get up to $100 off</span>
                    </Link>
                </div>
                </Slide>

            </div>


        </div>
    );
};

export default SummerOffer;