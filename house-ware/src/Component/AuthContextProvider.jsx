import React from 'react'
import { useState } from 'react'
import { createContext } from 'react' 

 export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
const [isAuth,setAuth]=useState(false)
const Login=()=>{
    setAuth(true)
}
const Logout=()=>{
    setAuth(false)
}
console.log(isAuth)
  return <AuthContext.Provider value={{isAuth,Login,Logout}}>
    {children}
  </AuthContext.Provider>
}

export default AuthContextProvider