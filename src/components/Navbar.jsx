import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { cartContext } from '../contextstore/cartcontext';
import { FaShopify } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {

  let { cart, setCart } = useContext(cartContext)

  let point = cart.reduce((total, curr) => {
    console.log(total)
    console.log(curr)
    return total + curr.quantity
  }, 0)
  console.log(cart)



  return (
    <div className="flex flex-wrap justify-between items-center p-3 bg-blue-600 top-0 z-50 shadow-md">
      <div className="flex items-center gap-2 m-auto">
        <span className="text-3xl text-white"><FaShopify /></span>
        <span className="text-xl font-bold text-white mr-4 ">ShopON</span>


        <div

          className="  bg-blue-600 text-white  px-3 py-1 rounded-md group"

        >
          <div className='flex gap-1  '>
            All products < IoMdArrowDropdown className=' text-xl mt-1 items-center  group-hover:rotate-180 transition-all duration-200' />
          </div>
          <div className='bg-white text-blue-600  absolute z-50 rounded-md hidden  group-hover:block  border border-black  mt-1 '>
            <ul className='flex flex-col'  >
              <NavLink to="" className={({ isActive }) =>
                isActive ? "bg-blue-600 text-black  px-3 py-1 rounded-md" : "hover:bg-blue-600 hover:text-black px-3 py-1 rounded-md"
              }>All Product</NavLink>
              <NavLink to="products/men's clothing" className={({ isActive }) =>
                isActive ? "bg-blue-600 text-black  px-3 py-1 rounded-md" : "hover:bg-blue-600 hover:text-black px-3 py-1 rounded-md"
              } >Mens Wear</NavLink>
              <NavLink to="products/women's clothing" className={({ isActive }) =>
                isActive ? "bg-blue-600 text-black  px-3 py-1 rounded-md" : "hover:bg-blue-600 hover:text-black px-3 py-1 rounded-md"
              }>Womens Wear </NavLink>
              <NavLink to="products/electronics" className={({ isActive }) =>
                isActive ? "bg-blue-600 text-black  px-3 py-1 rounded-md" : "hover:bg-blue-600 hover:text-black px-3 py-1 rounded-md"
              }>Electronics </NavLink>
              <NavLink to="products/jewelery" className={({ isActive }) =>
                isActive ? "bg-blue-600 text-black  px-3 py-1 rounded-md" : "hover:bg-blue-600 hover:text-black px-3 py-1 rounded-md"
              }>Jewelery </NavLink>
            </ul>
          </div>
        </div>

      </div>


      <div className='m-auto'>

        <ul className="flex justify-center items-center flex-wrap gap-4 text-white text-sm sm:text-base m-auto">
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "bg-white text-black  px-3 py-1 rounded-md" : "hover:bg-white hover:text-black px-3 py-1 rounded-md"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "bg-white text-black  px-3 py-1 rounded-md" : "hover:bg-white hover:text-black px-3 py-1 rounded-md"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "bg-white text-black  px-3 py-1 rounded-md" : "hover:bg-white hover:text-black px-3 py-1 rounded-md"
            }
          >
            Services
          </NavLink>



          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "relative px-3 py-1" : "relative px-3 py-1"
            } title="Cart"
          >
            <span className="absolute -top-1 -right-2 w-5 h-5 text-xs rounded-full bg-red-500 text-white flex items-center justify-center">
              {point}
            </span>
            <FaCartShopping className="text-xl sm:text-2xl font-semibold" />
          </NavLink>


          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "relative px-3 py-1" : "relative"
            } title='Wishlist'
          >
            <span className='flex gap-1 justify-center items-center bg-blue-500 border  border-white rounded-lg px-1 shadow-zinc-50 hover:scale-105 duration-200-200' ><FaRegHeart className="text-xl text-red-700" /></span>
          </NavLink>



        </ul>
      </div>
    </div>

  )
}

export default Navbar