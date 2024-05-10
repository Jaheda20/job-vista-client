import Lottie from "lottie-react";
import registerAnimation from "../../assets/register.json"
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center py-6 mt-10 bg-purple-100 ">
            <div className="w-1/2 ">
                <Lottie animationData={registerAnimation} loop={true} />
            </div>
            <div className="md:w-1/2 w-4/5 mt-6 md:max-w-md p-8 space-y-3 rounded-xl bg-fuchsia-200">
                <h1 className="text-2xl font-bold text-center text-black">Register</h1>
                <form className="space-y-6 ">
                    {/* <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-900">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photo" className="block text-gray-900">Photo URL</label>
                        <input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div> */}
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-gray-900">User Name</label>
                        <input type="name" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photo" className="block text-gray-900">Photo URL</label>
                        <input type="photo" name="photo" id="photo" placeholder="photo url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-900">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-900">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        <div className="flex justify-end text-xs text-gray-800">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-white font-semibold bg-purple-600">Register</button>
                </form>


                <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                    <Link to="/login" className="underline text-gray-800 hover:text-purple-900 font-bold ml-2">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;