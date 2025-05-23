import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, useNavigate } from 'react-router-dom'; // ✅ Right
import { createBrowserRouter } from 'react-router-dom';


const Body = () => {
   
    
    const appRouter = createBrowserRouter([
        {
path : "/",
element:<Login/>
        },
                {
path : "browse",
element:<Browse/>
        },
        {path : "/error",
element:<error/>}

        
    ])
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    
    </div>
  )
}

export default Body