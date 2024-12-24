import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const [theme , setTheme] = useState(false)
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
        // console.log(result)
    })
    .catch(error=>console.log(error))
}



// useEffect(()=>{
//     const unsubscribe = onAuthStateChanged(auth ,async(currentUser)=>{
//         console.log(currentUser)
//        if(currentUser?.email){ 
//         setUser(currentUser)
//         const{ data}=await axios.post(`${import.meta.env.VITE_APIHOST}/jwt`,
//             {email:currentUser?.email})
//         console.log(data)
//     }


//     setLoading(false)
//     return ()=>{
//     unsubscribe()
//     }
    
//     })
    
//     },[])
    
  useEffect(()=>{
const unsubscribe =onAuthStateChanged(auth,async currentUser=>{
    console.log('currently login -->',currentUser)
    if(currentUser?.email){
        setUser(currentUser)
        const {data}= await axios.post(`${import.meta.env.VITE_APIHOST}/jwt`,{
            email:currentUser?.email
        },{withCredentials:true})
        console.log('token', data)
    }
    else{
        setUser(null)
        const {data}= await axios.get(`${import.meta.env.VITE_APIHOST}/remove`,
           {withCredentials:true})
        console.log('token', data)
    }
    setLoading(false)
})
return()=>{
    unsubscribe()
}
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
theme,
setTheme
}


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;