import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
// google signIn
const handleGoogleSignIn = () =>{
    setLoading(true)
 return signInWithPopup(auth ,provider)
}

// signup

const handleSignUp = (email,password) =>{
    setLoading(true)
  return  createUserWithEmailAndPassword(auth,email,password)
}

const handleSignIn = (email,password) =>{
    setLoading(true)
  return  signInWithEmailAndPassword(auth,email,password)
}


const handleSignOut = () =>{
 return signOut(auth)

}
    


const updateUserProfile = (name , photo) =>{
    updateProfile(auth.currentUser,{
        displayName:name,photoURL:photo
    })
    .then(result=>{
        console.log(result)
    })
    .catch(error=>console.log(error))
}



useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
        console.log(currentUser)
       if(currentUser){ 
        setUser(currentUser)
        setLoading(false)
    }
    else{
        setUser(null)
    }
    
    setLoading(false)
    return ()=>{
    unsubscribe()
    }
    
    })
    
    },[])
    
    



const authInfo = {
user,
loading,
handleGoogleSignIn,
handleSignUp,
handleSignIn,
updateUserProfile ,
handleSignOut,
setUser,

}


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;