import { createContext, useContext, useEffect, useState } from "react";

export const cartContext = createContext([]);

export const CartContextpovider = function ({children}){
            
  const [cart , setCart] = useState([])

  useEffect(()=>{
    let cart2 =  localStorage.getItem("Cart")
    if(cart2){
      setCart(JSON.parse(cart2))
    }
  },[])

    return <cartContext.Provider value={{cart ,setCart}}>
        {children}
    </cartContext.Provider>
}


