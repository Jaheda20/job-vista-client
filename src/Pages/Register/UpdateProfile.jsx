import { useForm } from "react-hook-form";
import userPic from "/images/user.png";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import updatePic from "/images/update.jpg"
import Swal from "sweetalert2";

const UpdateProfile = () => {
    const {user, updateUserProfile} = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit, reset,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) =>{
        const {name, photo} = data;
        updateUserProfile(name, photo)
            .then(()=>{
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your profile has been updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate ("/");
                reset()

        })
        .catch(error =>{
            console.log(error)
        })

    }

    return (
        <div>
            <Helmet>
                <title>JobVista | Update Profile</title>
            </Helmet>
            <div className="hero mt-12 mb-20">
            <div className="hero-content flex flex-col md:flex-row-reverse">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Update Your Profile</h1>
                    <img src={updatePic} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm md:max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName || "Unnamed User"} placeholder="Your Name" className="input input-bordered" {...register("name", { required: true })} /> 
                            {errors.name && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" defaultValue={user?.photoURL || userPic } placeholder="Photo url" className="input input-bordered" {...register("photo")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email} placeholder="email" className="input input-bordered" />                           
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" value={user.password} placeholder="password" className="input input-bordered"></input> 
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gray-300">Save Changes</button>
                        </div>
                    </form>
                    
                </div>
                
            </div>
            
        </div>
        </div>
    );
};



export default UpdateProfile;