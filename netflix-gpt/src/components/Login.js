import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth} from '../utils/firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {USER_AVTAR} from '../utils/constant'


const Login=()=> {
  const[isSigninForm ,setsigninform]=useState(true);
  const navigate = useNavigate();
  const[errorMessage,setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const fname = useRef(null);
  const togglesigunup=()=> {
   setsigninform(!isSigninForm)
  }
  const handleButtonClick = () => {
  const emailVal = email.current?.value;
  const passwordVal = password.current?.value;
  const nameVal = fname.current?.value;

  const message = checkValidData(emailVal, passwordVal);
  setErrorMessage(message);
  if (message) return;

  if (!isSigninForm) {
    // Sign up
    createUserWithEmailAndPassword(auth, emailVal, passwordVal)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, {
          displayName: nameVal,
          photoURL: {USER_AVTAR}
        });
      })
      .then(() => {
   
      })
      .catch((error) => {
        setErrorMessage(error.code + " - " + error.message);
      });
  } else {
    // Sign in
    signInWithEmailAndPassword(auth, emailVal, passwordVal)
      .then((userCredential) => {
    
      })
      .catch((error) => {
        setErrorMessage(error.code + " - " + error.message);
      });
  }
};

  return (
    <div className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_large.jpg')",
      }}>
   <Header/>
   <div>
<form  onSubmit= { (e)=> {e.preventDefault()}}className='absolute p-12 bg-black w-4/12 my-36  mx-auto right-0 left-0 text-white'>
<h1 className='text-center font-bold text-3xl p-2 m-2'> {isSigninForm ?"Sign In":"Sign Up"}</h1>
{!isSigninForm &&(
  <div>
    <input type ="text"  ref={fname} placeholder=" FullName" className="p-2 m-2 w-full bg-gray-500 rounded bg-opacity-80"/>
  {/* <input type ="Phone" placeholder="phone" className="p-2 m-2 w-full bg-gray-500 rounded bg-opacity-80"/> */}
  </div>)}
  <input type ="text" placeholder="Email" ref= {email} className="p-2 m-2 w-full bg-gray-500 rounded bg-opacity-80"/>
  <input type ="password" placeholder="Password" ref= {password} className="p-2 m-2 w-full bg-gray-500 rounded bg-opacity-80"/>
  <p className='text-red-500 font-bold text-lg p-2 m-2'> {errorMessage}</p>
  <button className='p-2 m-2 font-bold bg-red-700 w-full' onClick={handleButtonClick}>{isSigninForm ?"Sign In":"Sign Up"} </button>
  <p className= 'font-bold text-1xl cursor-pointer' onClick={togglesigunup}> {isSigninForm ?"New user ?Please Sign up Now":" Already Registered?Sign In"}</p>
</form>
   </div>
   </div>
  )
}

export default Login