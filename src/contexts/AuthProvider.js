import React, { createContext, useState } from 'react';
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    //CREATE USER
    const createUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //LOGIN
    const userLogin = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }


  //GOOGLE SIGNIN
  const googleProvider = new GoogleAuthProvider();
  const userSigninGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }



   //LOGOUT
   const userLogout = () => {
    setLoading(true);
     return signOut(auth);
   }




    const authInfo = {
        user,
        createUser,
        userLogin,
        userLogout,
        userSigninGoogle,
        loading
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;