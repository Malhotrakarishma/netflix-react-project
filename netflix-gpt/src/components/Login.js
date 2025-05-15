import React, { useState } from 'react'
import Header from './Header'

const Login=()=> {
  const[isSigninForm ,setsigninform]=useState(true)
  const togglesigunup=()=> {
   setsigninform(!isSigninForm)
  }
  return (
    <div className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_large.jpg')",
      }}>
   <Header/>
   <div>
<form className='absolute p-12 bg-black w-4/12 my-36  mx-auto right-0 left-0 text-white'>
<h1 className='text-center font-bold text-3xl p-2 m-2'> {isSigninForm ?"Sign In":"Sign Up"}</h1>
{!isSigninForm &&(
  <div>
    <input type ="text" placeholder=" FullName" className="p-2 m-2 w-full bg-gray-500 rounded bg-opacity-80"/>
  <input type ="Phone" placeholder="phone" className="p-2 m-2 w-full bg-gray-500 rounded bg-opacity-80"/>
  </div>)}
  <input type ="text" placeholder="Email" className="p-2 m-2 w-full bg-gray-500 rounded bg-opacity-80"/>
  <input type ="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-500 rounded bg-opacity-80"/>
  <button className='p-2 m-2 font-bold bg-red-700 w-full'>{isSigninForm ?"Sign In":"Sign Up"} </button>
  <p className= 'font-bold text-1xl cursor-pointer' onClick={togglesigunup}> {isSigninForm ?"New user ?Please Sign up Now":" Already Registered?Sign In"}</p>
</form>
   </div>
   </div>
  )
}

export default Login