import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const SignUp=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    
    }
    const LogOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false);
        })
        return ()=>unSubscribe();
    },[])
    const authInfo={
        user,
        SignUp,
        signIn,
        LogOut,
        loading

    
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
