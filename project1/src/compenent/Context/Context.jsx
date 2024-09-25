import React, { createContext, useEffect, useState } from 'react'



export const Context= createContext();
export default function ContextProvider({children}) {
   const [token, setToken] = useState(localStorage.getItem('token'))
   

console.log(token);

  return (
    <>
    
       <Context.Provider value={{token , setToken}} >
       {children}
       </Context.Provider >
      </>
  )
}
