import Lottie from "lottie-react";
import registerAnimation from "../../assets/register.json"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hook/useAuth";

const Register = () => {
    const { createUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        if (password.length < 6) {
            toast.error('Your password must be of at least 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password must include an Uppercase letter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password must include an Lowercase letter')
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate (location?.state || '/')
                reset()
            })
            
            .catch(error => {
                console.error(error)
                toast.error('Email already in use')
            })


    }

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center py-6 mt-10 bg-purple-100 ">
            <div className="w-1/2 ">
                <Lottie animationData={registerAnimation} loop={true} />
            </div>
            <div className="md:w-1/2 w-4/5 mt-6 md:max-w-md p-8 space-y-3 rounded-xl bg-fuchsia-200">
                <h1 className="text-2xl font-bold text-center text-black">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-gray-900">User Name</label>
                        <input type="name" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:text-gray-800 dark:bg-gray-50 focus:dark:border-violet-600" {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-800">This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photo" className="block text-gray-900">Photo URL</label>
                        <input type="photo" name="photo" id="photo" placeholder="photo url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("photo")} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-900">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-800">This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm relative">
                        <label htmlFor="password" className="block text-gray-900">Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("password", { required: true })} />
                        {errors.password && <span className="text-red-800">This field is required</span>}
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-8 right-4">
                            {
                                showPassword ? <FaRegEye size={18} />
                                    : <FaRegEyeSlash size={18} />
                            }
                        </span>
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
            <ToastContainer />
        </div>
    );
};

export default Register;