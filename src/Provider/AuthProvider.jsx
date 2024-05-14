import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";


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

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo,
          })
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
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>
            {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setLoading(false);
            setUser(currentUser);
            console.log('current user', currentUser)
            if(currentUser){
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log('token response', res.data)
                })
            }
            else {
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log(res.data)
                })
            }
        })
        return () => unsubscribe();
    }, [])

    

    const authInfo = {
        user, createUser, loading, setLoading,
        updateUserProfile ,loginUser, googleLogin, logOutUser
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}          
        </AuthContext.Provider>
    );
};

export default AuthProvider;