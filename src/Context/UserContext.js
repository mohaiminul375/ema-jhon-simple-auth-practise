import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user,setUser] = useState(null);

    const SignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    
    }
    const LogOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
        })
        return ()=>unSubscribe();
    },[])
    const authInfo={
        user,
        SignUp,
        signIn,
        LogOut
    
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
