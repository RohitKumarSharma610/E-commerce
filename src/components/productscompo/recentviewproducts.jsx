import React, { useContext } from 'react'
import { Recentviewdata } from '../../contextstore/recentviewproduct'
import Singleproduct from "./singleproduct";


const recentviewproducts = () => {
    const {recent} =useContext(Recentviewdata)


  return (
    <>
   <h1 className="text-2xl font-medium text-center mt-3">Recent view Product's</h1>
    <div className="flex p-4 justify-center gap-8 flex-wrap ">
   {
       recent.map((item)=>(
        <Singleproduct value={item} key={item.id} />
       ))
}
</div>

    
    </>
  )
}

export default recentviewproducts