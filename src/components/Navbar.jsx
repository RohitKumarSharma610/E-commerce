import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { cartContext } from '../contextstore/cartcontext';

const Navbar = () => {

 let {cart , setCart} = useContext(cartContext)

 let point = cart.reduce((total, curr)=>{
  console.log(total)
  console.log( curr)
   return total + curr.quantity
 },0)
  console.log(cart)
 


  return (
    <div className="flex flex-wrap justify-between items-center p-3 bg-lime-500 sticky top-0 z-50 shadow-md">
    <div className="flex items-center gap-2">
      <span className="text-3xl">🧥</span>
      <span className="text-xl font-bold text-white">OnlineShopping</span>
    </div>
  
    <ul className="flex flex-wrap gap-4 text-white text-sm sm:text-base">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-red-400 px-3 py-1 rounded-md" : "hover:bg-red-300 px-3 py-1 rounded-md"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "bg-red-400 px-3 py-1 rounded-md" : "hover:bg-red-300 px-3 py-1 rounded-md"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? "bg-red-400 px-3 py-1 rounded-md" : "hover:bg-red-300 px-3 py-1 rounded-md"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? "relative px-3 py-1" : "relative px-3 py-1"
        }
      >
        <span className="absolute -top-1 -right-2 w-5 h-5 text-xs rounded-full bg-red-500 text-white flex items-center justify-center">
          {point}
        </span>
        <FaCartShopping className="text-xl sm:text-2xl font-semibold" />
      </NavLink>
    </ul>
  </div>
  
  )
}

export default Navbar