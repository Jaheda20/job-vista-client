import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";



const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center text-7xl my-40">
                <span className="loading loading-bars loading-lg"></span>
                
            </div>
            
        )
    }

    if(!user){
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Please login before proceed",
            showConfirmButton: false,
            timer: 2000
        });
        return <Navigate to='/login' state={location?.pathname || '/'} />

    }
    return children;



};

export default PrivateRoute;