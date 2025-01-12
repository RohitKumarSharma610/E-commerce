import React, { useContext, useEffect, useState } from 'react'
import Cartmes from './message\'s/cart-message';
import { NavLink } from 'react-router-dom';
import { cartContext } from '../contextstore/cartcontext';
import { FaRegMinusSquare } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoReturnUpBack } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {

  // const [total, setTotal] = useState([])

  // console.log(cart)


  const { cart, setCart } = useContext(cartContext)


  console.log(cart)
  let subtotal = 0
  if(cart.length > 0){

     subtotal = cart.reduce((total, item) => {
      console.log(total)
      console.log(item)
      return total + item.price * item.quantity
    },0)
  }
    // console.log( item + (item.price * item.quantity))



  function deletee(id) {

    let unmatch = cart.filter((item) => {
      return item.id !== id
    })

    setCart(unmatch)
    localStorage.setItem("Cart", JSON.stringify(unmatch))
  }


  function minus(id) {

    let minu = cart.map((item) => {
      console.log(item.id)

      if (item.quantity == 1) {
        // alert ("please add atleast one quantity")
        return { ...item, quantity: item.quantity = 1 }
      }
      // console.log(item.id != id)
      // console.log(item.id == id)
      if (item.id == id) {
        return { ...item, quantity: item.quantity - 1 }

      }



      return item

    })
    setCart(minu)
    localStorage.setItem("Cart", JSON.stringify(minu))

  }


  function Plus(id) {

    let newarr = cart.map((item) => {


      if (item.quantity >= 8) {
        return { ...item, quantity: item.quantity = 8 }
      }


      if (item.id == id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })

    setCart(newarr)
    localStorage.setItem("Cart", JSON.stringify(newarr))
    console.log(newarr)
  }








  return (
    <>
      <NavLink to="/" ><IoReturnUpBack className='text-4xl' /></NavLink>
      {/* {cart.length > 0 ? <div className='w-[50%] m-auto font-medium text-3xl text-red-700'><marquee>You Can Select Only Limited Quantity</marquee></div>:""} */}
      {cart.length == 0 ? <div className='text-5xl font-medium w-full h-[100vh] flex justify-center items-center '><Cartmes /></div> : ""}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
  {/* Cart Items Section */}
  <div className="flex flex-col w-full lg:w-[65%] ">
    {cart.map((item) => (
      <div
        className=" sm:flex sm:flex-row p-4  border-b flex flex-col lg:flex-row justify-between items-center text-center lg:text-left"
        key={item.id}
      >
        <NavLink to={`/product/${item.id}`} className="mb-4 lg:mb-0">
          <div className="border p-2 overflow-hidden w-[200px]">
            <img
              src={item.image}
              className="w-[200px] m-auto h-[180px] object-contain pb-3 hover:scale-110 transition-transform duration-200"
              alt="Img..."
            />
          </div>
        </NavLink>

        <div className="flex flex-col justify-center px-4 w-[350px]">
          <h2 className="truncate text-xl font-medium mb-2 ">{item.title}</h2>
          <h3>{`Price : ${item.price.toFixed(2)}$`}</h3>

            
            

          <div className="flex justify-center lg:justify-start items-center gap-2 p-3 text-2xl px-14">
            <FaRegMinusSquare
              className="cursor-pointer m-auto"
              onClick={() => minus(item.id)}
            />
            {item.quantity}
            <FaRegPlusSquare
              className="cursor-pointer m-auto"
              onClick={() => Plus(item.id)}
            />
          </div>
          {item.quantity >= 8 && (
            <p className="text-red-700 font-bold text-xs m-auto">This is Max Quantity</p>
          )}
            
            <div className='m-auto'>

          <button
            onClick={() => deletee(item.id)}
            className="m-auto text-3xl  text-red-500 hover:text-red-700"
            >
            <AiFillDelete />
          </button>
            </div>
              

          <div>{`Total Price: ${(item.price * item.quantity).toFixed(2)} $`}</div>
        </div>
      </div>
    ))}
  </div>

  {/* Order Summary Section */}
  <div className="w-full lg:w-[30%] text-slate-600 p-4 bg-slate-100 rounded-md flex flex-col justify-between">
    <div>
      <h3 className="text-slate-400">Order Summary</h3>
      <hr className="my-4" />
      <h5 className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span className="font-bold text-slate-500">{subtotal.toFixed(2)}$</span>
      </h5>
      <h5 className="flex justify-between mb-2">
        <span>Discount</span>
        <span>- NO Discount</span>
      </h5>
      <h5 className="flex justify-between">
        <span>Delivery Cost</span>
        <span>- Free</span>
      </h5>
    </div>

    <div>
      <hr className="my-4" />
      <h3 className="text-slate-400 flex justify-between mb-4">
        Grand Total:
        <span className="text-slate-600 font-bold">{subtotal.toFixed(2)} $</span>
      </h3>
      <button className="w-full py-3 border bg-blue-400 text-white border-blue-400 hover:bg-inherit hover:border-black hover:text-blue-400 transition-all">
        Proceed to checkout
      </button>
    </div>
  </div>
</div>

    </>
  )

}

export default Cart