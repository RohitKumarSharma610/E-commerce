import React, { useContext, useEffect } from 'react'
import { wishContext } from '../../contextstore/wishcontext'
import { NavLink } from 'react-router-dom'
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import Wishmes from '../message\'s/wishlistmes';

const wishlist = () => {
  const navigate = useNavigate();
  // console.log(useContext(wishContext))
  let { wish, setWish } = useContext(wishContext)
  console.log(wish)

  function remove(e , idd) {
    // console.log(e())
    e.preventDefault()
    e.stopPropagation()
    console.log("remove div")
    let data = wish.filter((item) => {
      return item.id != idd
    })
    setWish(data)
  }

 


  

  return (
    <div>

      
      <div className=' flex flex-col justify-center items-center sm:flex sm:flex-row sm:items-center sm:justify-center sm:flex-wrap'>
        {wish.length == 0 ? <div className='h-[100vh] flex justify-center items-center'><Wishmes/></div>:""}
        {wish.map((item) => (
          <NavLink key={Math.random() * Math.random()} onClick={(e)=>{ navigate(`/product/${item.id}`)}}>
            <div className=" hover:scale-105 hover:transition-all relative p-4 w-72 border border-gray-300 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis shadow-md hover:shadow-lg transition-shadow duration-200 m-5 ">
              <div className='flex justify-between'><h1>{`id : ${item.id}`}</h1> <div onClick={(event)=>remove(event ,item.id)}> <ImCancelCircle className='text-3xl cursor-pointer' /></div></div>

              <div className="">

                <img
                  src={item.image}
                  className="w-full h-[180px] object-contain duration-200 overflow-hidden"
                  alt=" img..."
                />
              </div>
              <h2 className="whitespace-nowrap overflow-hidden text-ellipsis mt-3">
                {item.title}
              </h2>
              <h3>{`Price : ${item.price}$`}</h3>


            </div>

          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default wishlist