import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        setLoading (true);
        return signInWithPopup(auth, provider);
    }

    const logOutUser = () =>{
        setLoading(true);
        return signOut(auth);

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setLoading(false);
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    

    const authInfo = {
        user, createUser, loading, setLoading,
        loginUser, googleLogin, logOutUser
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}          
        </AuthContext.Provider>
    );
};

export default AuthProvider;