import React, { createContext, useState } from 'react'


export const wishContext = createContext([])

export const Wishcontextprovider = function ({children}){
    const [wish ,setWish] = useState(localStorage.getItem("Wish")?JSON.parse(localStorage.getItem("Wish")):[])

    console.log(wish)
      localStorage.setItem("Wish" ,JSON.stringify(wish))


    return (
    <wishContext.Provider value={{wish ,setWish}}>
        {children} 
    </wishContext.Provider>
  )

}
