import React from 'react'


import { Navigate } from 'react-router-dom';
import Home from './../Home/Home';

export default function Protectlogin({children}) {
  
    if(localStorage.getItem("token")!=null)
        {


            return (
            <>       
            
             <Navigate to={"/Home"} />
            
            
            
            </>
            
            ) 
            
           
    
            
        }
  
  
    return (
  <>
  {children}
  </>
  )
}
