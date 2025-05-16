import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth} from '../utils/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login=()=> {
  const[isSigninForm ,setsigninform]=useState(true);
  const[errorMessage,setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const fname = useRef(null);
  const togglesigunup=()=> {
   setsigninform(!isSigninForm)
  }
  const handleButtonClick=()=> {
   // validate the form data
   const message= checkValidData (email.current.value, password.current.value)
    {

       setErrorMessage(message);
      
   }
   if(message) return;
   // if no error, proceed with the sign in or sign up
   
 if(!isSigninForm)
 {
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value,fname.current.value)

  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+ "-" + errorMessage)
  });
 }
else {
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode+ "-" + errorMessage)
  });

}
  }
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