import { Link } from "react-router-dom";


const CareerAdvice = () => {
    return (
        <div className="container mx-auto my-14">
            <div className="flex flex-col md:flex-row">
                <div className="w-1/2">
                    <img src="https://i.ibb.co/tsRvQLj/photo-1488190211105-8b0e65b80b4e-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="h-96 w-full" />
                </div>

                <div className="w-1/2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-bold mb-6">Your job is personal</h1>
                    <p className="text-lg w-80 mb-8">Get to know yourself with some free career self assessments</p>
                    <Link to="/assessments" className="relative inline-flex items-center justify-center px-6 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Learn More</span>
                    </Link>
                </div>

            </div>

            <div className="flex flex-col md:flex-row-reverse">
                <div className="w-1/2">
                    <img src="https://i.ibb.co/hRJhqrm/photo-1443916568596-df5a58c445e9-q-80-w-1632-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="h-96" />
                </div>

                <div className="w-1/2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-bold mb-6">Ready to level-up?</h1>
                    <p className="text-lg w-80 mb-8">Excel with our Jobs hub. Find tips to get ahead and make your goals a reality</p>
                    <Link to="/tips" className="relative inline-flex items-center justify-center px-6 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Learn More</span>
                    </Link>
                </div>

            </div>

            <div className="flex flex-col md:flex-row">
                <div className="w-1/2">
                    <img src="https://i.ibb.co/TMh4Sjm/photo-1598257006460-4cd5d043cf49-q-80-w-1470-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" className="h-96 w-full" />
                </div>

                <div className="w-1/2 flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-bold mb-6">Unlocking dream career</h1>
                    <p className="text-lg w-80 mb-8">Learn tricks to start looking for your dream job</p>
                    <Link to="/jobSearch" className="relative inline-flex items-center justify-center px-6 py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-fuchsia-300 rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-purple-900 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Learn More</span>
                    </Link>
                </div>

            </div>




        </div>
    );
};

export default CareerAdvice;