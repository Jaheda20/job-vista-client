import Lottie from "lottie-react";
import errorAnimation from "../../assets/error.json"
import { Link } from "react-router-dom";
import { IoArrowUndoCircleSharp } from "react-icons/io5";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">

            <div className="w-1/2">
                <Lottie animationData={errorAnimation} loop={true} />
            </div>
            <Link to="/" className="mt-10 hover:underline flex items-center gap-2 text-xl hover:text-blue-900 font-bold "> <IoArrowUndoCircleSharp size={30}/>
                Go back to Home Page</Link>


        </div>
    );
};

export default ErrorPage;