import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

  export const AuthContext = createContext(null);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user)


    const signInWithGoogle= () => {
         setLoading(true);
         return signInWithPopup(auth, googleProvider)
    }

const createUserLogIn = (email, password) =>{
    setLoading(true);
   
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}



const logOutEmail = () =>{
    setLoading(true);
    return signOut(auth);
}
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])



    const authInfo = {
        signInWithGoogle,
        user,
        loading,
        createUserLogIn,
        signIn,
        logOutEmail,
        setUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;