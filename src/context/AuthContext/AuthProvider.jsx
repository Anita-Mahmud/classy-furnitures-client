import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {app} from "../../firebase/firebase.config"
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // google signin
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(() => {
        const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
          } else {
            setLoading(false);
          }
        });
        return () => {
          return unscubcribe();
        };
      }, []);
    const authInfo = {
        googleSignIn,loading,user
    }
  
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;