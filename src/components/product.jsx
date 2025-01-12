import React, { useState, useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { productstore } from "../contextstore/producscontext";
import { IoArrowBackOutline } from "react-icons/io5";
import { cartContext } from "../contextstore/cartcontext";
// import { RxValue } from "react-icons/rx";
// import Button from "./message's/addtocart";



const product = () => {
  const productid = useParams();
  let data = useContext(productstore)
  data = data.filter((item) => {
    return item.id == productid.id
  })
  console.log(productid.id);

  const { cart, setCart } = useContext(cartContext);
  function addtocart(id) {
    
    console.log(id);
    // if (id.quantity == 8) {
    //   return { ...id, quantity: id.quantity = 8 }
    // }
    let matched = cart.filter((item) => {
      console.log(cart)
      return item.id == id;
    });
    let unmatch = cart.filter((item) => {
      return item.id != id;
    });
    console.log(matched);
    if (matched.length > 0) {
      
   if(matched[0].quantity<=7){

     let obj = matched[0];
     obj = { ...obj, quantity: obj.quantity + 1 };
     setCart([...unmatch, obj])
     localStorage.setItem("Cart", JSON.stringify([...unmatch, obj]))
   }


      
    } else {
      localStorage.setItem("Cart", JSON.stringify([...unmatch, { ...data[0], quantity: 1 }]))
      setCart([...unmatch, {...data[0], quantity: 1 }])
    }
   

  }
  console.log(cart)



  return (
    <div>
      <NavLink to='/' ><IoArrowBackOutline className='text-5xl font-medium  mt-2' /></NavLink>
      <div className="flex p-4 justify-center gap-3 flex-wrap static bottom-0 ">
        {data.map((item) => {
          console.log(item)
          return (
            <div className="p-4  border flex flex-col w-full " key={item.id}>
              <img src={item.image} className="w-full h-[300px] object-contain pb-10" alt="" />
              <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-3xl">{item.title}</h1>
              <h3 className='text-blue-700'>{`Price :- ${item.price}$`}</h3>

              <h2 className="font-normal flex flex-wrap ">Description :-{item.description}</h2>

             
                <button onClick={() => addtocart(item.id)} className="w-[60%] m-auto bg-orange-400 py-2 rounded-md mt-4">Add to cart</button>
            </div>
          );
        })}
      </div>
    </div >
  )
}

export default product;
