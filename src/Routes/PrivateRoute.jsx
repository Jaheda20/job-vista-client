import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";



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
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={location?.pathname || '/'}/>

};

export default PrivateRoute;