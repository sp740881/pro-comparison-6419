import React, { createContext, useEffect, useState } from 'react'
export const cartContext=createContext()
 const CartcontextProvider = ({children}) => {
const [cart,setcart]=useState(JSON.parse(localStorage.getItem('cart'))||[])

console.log(cart)
useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart)||[]);
},[cart])
const Setcartitem=(obj)=>{
setcart([...cart,obj])
}
  return <cartContext.Provider value={{cart,Setcartitem}}>{children}</cartContext.Provider>
}

export default CartcontextProvider