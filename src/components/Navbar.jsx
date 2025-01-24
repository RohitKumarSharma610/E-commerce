import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { cartContext } from '../contextstore/cartcontext';
import { FaShopify } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {

  let { cart, setCart } = useContext(cartContext)

  let point = cart.reduce((total, curr) => {
    console.log(total)
    console.log(curr)
    return total + curr.quantity
  }, 0)
  console.log(cart)



  return (
    <div className="flex flex-wrap justify-between items-center p-3 bg-blue-600 sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-2 m-auto">
        <span className="text-3xl text-white"><FaShopify /></span>
        <span className="text-xl font-bold text-white mr-4 ">ShopON</span>


        <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? "bg-white relative text-black  px-3 py-1 rounded-md" : "hover:bg-white hover:text-black px-3 py-1 rounded-md group :"
            }
          >
            <div className='flex gap-1'>
              All products < IoMdArrowDropdown className=' text-xl mt-1 items-center  group-hover:rotate-180 transition-all duration-200' />
            </div>
            <div className='bg-white text-blue-600  absolute z-50 rounded-md hidden  group-hover:block  border border-black  mt-1 '>
              <ul className='flex flex-col'  >
                <NavLink to="men's clothing" className=' hover:bg-blue-600 hover:text-white px-2 py-1 rounded-md '  >mens sec</NavLink>
                <NavLink to="women's clothing" className=' hover:bg-blue-600   hover:text-white px-2  py-1 rounded-md'>womens sec </NavLink>
                <NavLink to="electronics" className=' hover:bg-blue-600   hover:text-white px-2 py-1 rounded-md'>electronics </NavLink>
              </ul>
            </div>
          </NavLink>

      </div>.


      <div className='m-auto'>

        <ul className="flex flex-wrap gap-4 text-white text-sm sm:text-base m-auto">
          <NavLink
            to="/"
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

         




          {/* <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Hover</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div> */}



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
    </div>

  )
}

export default Navbar