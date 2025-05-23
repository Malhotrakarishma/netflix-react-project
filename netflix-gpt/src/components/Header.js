import React, { use, useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo,USER_AVTAR } from '../utils/constant';


function Header() {
    const navigate = useNavigate();
    const user = use;
    const dispatch = useDispatch();


   const handleSignout = () => {
        signOut(auth).then(() => {
          
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }

    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                // disptach(addUser({uid,email,displayName}));
                dispatch(addUser({ uid, email, displayName }));
                // dispatch(addUser({ name: displayName, email: email,uid: uid }));

                // ...
                navigate("/browse")
            } else {
                // User is signed out
                // ...
                dispatch(removeUser())
                navigate("/")

            }
        });
        // unsubscribe call when my component unmounts
        return () => {
            // Cleanup subscription on unmount
            onAuthStateChanged(unsubscribe);
        }
    }, []);

 return (
    <div className="relative">
      {/* Dark overlay to boost logo contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>

      {/* Header Container */}
      <div className="relative z-10 flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <img
          className="w-52 drop-shadow-lg"
          src={Logo}
          alt="Netflix Logo"
        />

        {/* Right side: Avatar + Sign out */}
        <div className="flex items-center space-x-4 ml-auto">
         <button className="text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">
          Sign out </button>
          <img
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
            src={USER_AVTAR}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
