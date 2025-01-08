import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('User in the auth state changed :', currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;