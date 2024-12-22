import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import Swal from "sweetalert2";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

// google signIn
const handleGoogleSignIn = () =>{
 return signInWithPopup(auth ,provider)
}

// signup

const handleSignUp = (email,password) =>{
  return  createUserWithEmailAndPassword(auth,email,password)
}

const handleSignIn = (email,password) =>{
  return  signInWithEmailAndPassword(auth,email,password)
}


const handleSignOut = () =>{
    signOut(auth)
    .then((result)=>{
    
       Swal.fire({
            title: 'Logout!',
            text: 'you are Log-out in this site',
            icon: 'error',
            confirmButtonText: 'okay'
          })
          
    })
    .catch(error=>console.log(error))
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
setUser
}


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;