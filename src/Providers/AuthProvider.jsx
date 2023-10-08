import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext= createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null)



    const CreateUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        .then()
    }

    const logout =()=>{
        return signOut(auth)
    }

    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)


    }


    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=> {
            unsubscribe();
        }

    },[])


    const authInfo = {user,CreateUser,logout,signIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;