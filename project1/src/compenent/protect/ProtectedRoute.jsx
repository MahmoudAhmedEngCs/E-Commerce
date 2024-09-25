import React from 'react'
import { Navigate } from 'react-router-dom'

import Login from './../Login/Login';

export default function ProtectedRoute({children}) {
    if(localStorage.getItem("token")==null)
    {
        return <Navigate to={"/Login"} />

        
    }
    
    return (
   <>
   {children}
   </>
  )
}
