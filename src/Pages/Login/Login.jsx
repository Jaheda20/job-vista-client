import { Link, useNavigate } from "react-router-dom";
import loginAnimation from "../../assets/login.json"
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa"
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const Login = () => {

    const { loginUser, googleLogin, setLoading } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully logged in",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate (location?.state || '/')
                reset();
            })
            .catch(error => {
                console.error(error)
                toast.error('Invalid Credentials')
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                if(result.user){
                    setLoading(false)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully logged in",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    navigate (location?.state || '/')
                    reset();
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center py-6 mt-10 bg-purple-100 ">
            <div className="md:w-1/2 w-4/5 mt-6 md:max-w-md p-8 space-y-3 rounded-xl bg-fuchsia-200">
                <h1 className="text-2xl font-bold text-center text-black">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-900">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md text-black" {...register("email", { required: true })} />
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
                    <button className="block w-full p-3 text-center rounded-sm text-white font-semibold bg-purple-600">Sign in</button>
                </form>

                <div className="flex justify-center space-x-4">
                    <button onClick={() => handleGoogleLogin()} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <FcGoogle size={20} />

                        <p className="text-black">Login with Google</p>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account?
                    <Link to="/register" className="underline text-gray-800 hover:text-purple-900 font-bold ml-2">Register</Link>
                </p>
            </div>
            <div className="w-1/2 ">
                <Lottie animationData={loginAnimation} loop={true} />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;