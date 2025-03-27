import React, { useContext, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { cartContext } from '../contextstore/cartcontext';
import { FaShopify } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FaHandsHelping } from "react-icons/fa";
import Search from './productscompo/search';
import { productstore } from '../contextstore/producscontext';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  let divref = useRef()

  let { cart, setCart } = useContext(cartContext)
  const data = useContext(productstore)

  // let point = cart.reduce((total, curr) => {
  //   console.log(total)
  //   console.log(curr)
  //   return total + curr.quantity
  // }, 0)
  // console.log(cart)

  let point = cart.length

  window.onscroll = () => {
    divref.current.parentElement.click()
  }

  
  const divRef = useRef(null);
  

    function none  () {
      if (divRef.current) {
        divRef.current.style.display = "none"; // Hide the div
      }
    };
  



  return (
    <div className="flex flex-wrap justify-between items-center p-2 bg-blue-600  shadow-md">
      <div className="flex items-center m-auto mb-3">
        <span className="text-3xl text-white"><FaShopify /></span>
        <span className="text-xl font-bold text-white mr-4 ">ShopON</span>


        <div

          className="  bg-blue-600 text-white  px-3 py-1 rounded-md group"

        >
          <div className='flex gap-1  '>
            All products < IoMdArrowDropdown className=' text-xl mt-1 items-center  group-hover:rotate-180 transition-all duration-200' />
          </div>
          <div ref={divref} onClick={none} className='bg-white text-blue-600  absolute z-50 rounded-md hidden  group-hover:block  border border-black  mt-1'  >
            <ul className='flex flex-col'  >
              <NavLink to="" className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white  px-3 py-1 rounded-md" : "hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md"
              }>All Product</NavLink>
              <NavLink to="products/men's clothing" className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white  px-3 py-1 rounded-md" : "hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md"
              } >Mens Wear</NavLink>
              <NavLink to="products/women's clothing" className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white  px-3 py-1 rounded-md" : "hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md"
              }>Womens Wear </NavLink>
              <NavLink to="products/electronics" className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white  px-3 py-1 rounded-md" : "hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md"
              }>Electronics </NavLink>
              <NavLink to="products/jewelery" className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white  px-3 py-1 rounded-md" : "hover:bg-blue-600 hover:text-white px-3 py-1 rounded-md"
              }>Jewelery </NavLink>
            </ul>
          </div>
        </div>

      </div>


      <div className='text-white absolute left-[35%] top-[35%] w-28  rounded-md bg-blue-900  hover:bg-blue-950 text-center' >
      <NavLink to="/search">
       Search
       
      </NavLink>
      </div>

      <div className=' w-full  sm:w-[300px] bg-blue-500 sm:static sm:m-auto border border-black sm:p-1 rounded-md sm:shadow-md sm:shadow-black '>

        <ul className=" h-14 flex justify-between p-1 sm:justify-center items-center flex-wrap gap-1 text-white text-sm sm:text-base m-auto">
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "bg-white text-black  px-3 py-1 rounded-md text-2xl" : "hover:bg-white text-2xl hover:text-black px-3 py-1 rounded-md"
            }
          >
            <IoHome />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "bg-white text-black  px-3 py-1 rounded-md text-2xl" : "hover:bg-white text-2xl hover:text-black px-3 py-1 rounded-md"
            }
          >
            <FcAbout />
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "bg-white text-black  px-3 py-1 rounded-md text-2xl" : "hover:bg-white text-2xl hover:text-black px-3 py-1 rounded-md"
            }
          >
            <FaHandsHelping />
          </NavLink>



          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "relative bg-white text-black  px-3 py-1 rounded-md text-2xl" : "relative hover:bg-white text-2xl hover:text-black px-3 py-1 rounded-md"
            } title="Cart"
          >
            <span className="absolute z-10 -top-1 -right-2 w-5 h-5 text-xs rounded-full bg-red-500 text-white flex items-center justify-center">
              {point}
            </span>
            <FaCartShopping className="text-xl sm:text-2xl font-semibold" />
          </NavLink>


          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "relative bg-white text-black  px-3 py-1 rounded-md text-2xl" : "relative hover:bg-white text-2xl hover:text-black px-2 py-1 rounded-md"
            } title='Wishlist'
          >
            <span className='flex gap-1 justify-center items-center rounded-lg px-1  hover:scale-105 duration-200 text-red-700' ><FaRegHeart className="text-xl " /></span>
          </NavLink>



        </ul>
      </div>
    </div>

  )
}

export default Navbar