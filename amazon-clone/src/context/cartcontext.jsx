import React, { createContext, useContext, useState } from 'react'

  const CartContext=createContext()
 export const CartProvider=({children})=>{
    const [cartItems,setcartItems]=useState([])
    const addToCart=(item)=>{
      setcartItems([...cartItems,item])
    }
    const removeFromCart=(item)=>{
      setcartItems(cartItems.filter((apple)=>apple!==item))
    }
return(
  <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
    {children}

  </CartContext.Provider>
)
  }
  export const useCart=()=>{
    return useContext(CartContext)
  }
  

   
  

