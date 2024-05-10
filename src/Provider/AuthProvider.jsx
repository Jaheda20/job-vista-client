import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    

    const authInfo = {
        user, createUser, loading, setLoading 
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}          
        </AuthContext.Provider>
    );
};

export default AuthProvider;