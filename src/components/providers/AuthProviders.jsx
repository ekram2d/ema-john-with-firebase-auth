import React, { createContext, useEffect, useState } from 'react';
 
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProviders = ({children}) => {
     const [user,setUser] = useState(null);
    const [loading,setLoading]=useState(true);
     const createUser=(email,password)=>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password);

     }
     const logIn=(email,password)=>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
     }

     const Logout=()=>{
      
      return signOut(auth);
     }
     useEffect(()=>{
   const unsubcribe = onAuthStateChanged(auth,currentUser => {
           setUser(currentUser);
           setLoading(false);
      //      console.log(currentUser.email);
            
      });
      return ()=>{
            return unsubcribe();
      }

     },[])
      const authInfo={
            user ,
            loading,
            createUser,
            logIn,
            Logout,
    
      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProviders;