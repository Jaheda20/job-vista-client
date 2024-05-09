import Lottie from "lottie-react";
import errorAnimation from "../../assets/error.json"
import { Link } from "react-router-dom";
import { IoArrowUndoCircleSharp } from "react-icons/io5";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">

            <div className="md:w-1/2">
                <Lottie animationData={errorAnimation} loop={true} />
            </div>
            <Link to="/">
            <button className=" btn mt-10 hover:underline flex items-center gap-2 text-xl hover:text-purple-900 font-bold bg-pink-400 text-white "> <IoArrowUndoCircleSharp size={30}/>Go back to Home Page</button>
            </Link>
        </div>
    );
};

export default ErrorPage;