import React, { createContext, useState } from 'react'


export const wishcontext = createContext()
export const wishcontextprovider = ({childern}) => {
    const [wish ,setWish] = useState([])
  
    return (
    <wishcontext.Provider value={{wish ,setWish}}>
        {childern}
    </wishcontext.Provider>
  )

}
