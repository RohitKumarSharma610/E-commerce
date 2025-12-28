import React, { useState, useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { productstore } from "../contextstore/producscontext";
import { IoArrowBackOutline } from "react-icons/io5";
import { cartContext } from "../contextstore/cartcontext";
import { FaRegHeart } from "react-icons/fa";
import { wishContext } from "../contextstore/wishcontext";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { Recentviewdata } from "../contextstore/recentviewproduct"


// import { WishContext } from "../contextstore/wishcontext";



const product = () => {
  const { cart, setCart } = useContext(cartContext);

  const { wish, setWish } = useContext(wishContext)
  const productid = useParams();
  let data2 = useContext(productstore)

  let data = data2.filter((item) => {
    return item.id == productid.id
  })

  let isinfav = false
  console.log(wish)

  wish.map((item) => {
    // console.log(item.id , data[0])
    if (item.id && data[0]?.id) {
      if (item.id == data[0].id) {
        isinfav = true
      }
    }
  })


  console.log(productid.id)



  function addwish(idd) {
    let matched = wish.filter((item) => {
      return item.id == idd
    })
    console.log(wish)
    if (matched.length > 0) {
      let arrwish = wish.filter((item) => {
        return item.id != idd
      })
      setWish(arrwish)
      // localStorage.setItem("Wish" ,JSON.stringify(arrwish))

    } else {
      let arrwish = [...wish, ...data]
      // localStorage.setItem("Wish" ,JSON.stringify(arrwish))
      setWish([...wish, ...data])
    }
  }


  function addtocart(id) {
    console.log(id);
    let matched = cart.filter((item) => {
      console.log(cart)
      return item.id == id;
    });
    let unmatch = cart.filter((item) => {
      return item.id != id;
    });

    console.log(matched);
    // { matched.length <= 7 ? "" :toast(" item not Add to cart")}


    if (matched.length > 0) {

      if (matched[0].quantity <= 7) {

        let obj = matched[0];
        obj = { ...obj, quantity: obj.quantity + 1 };
        setCart([...unmatch, obj])
        localStorage.setItem("Cart", JSON.stringify([...unmatch, obj]))
      }
    } else {
      localStorage.setItem("Cart", JSON.stringify([...unmatch, { ...data[0], quantity: 1 }]))
      setCart([...unmatch, { ...data[0], quantity: 1 }])
    }

    toast(" item Add to cart")

  }

  const currentProduct = data[0];

  const newdata = data2.filter(
    item => item.category === currentProduct.category && item.id !== currentProduct.id
  );

  const { recentForUI } = useContext(Recentviewdata);

  if (recentForUI.length === 0) return null;

  console.log(data[0]?.category, newdata, data2.id)


  return (
    <>
      <div>
        <ToastContainer position="top-center" autoClose={700} />
        <NavLink to='/' ><IoArrowBackOutline className='text-5xl font-medium  mt-2' /></NavLink>
        <div className="flex p-4 justify-center gap-3 flex-wrap static bottom-0 ">
          {data.map((item) => {
            console.log(item)
            return (
              <div className="p-4  border flex flex-col w-full relative" key={item.id}>
                <img src={item.image} className="w-full h-[300px] object-contain pb-10" alt="" />
                <div className="hover:scale-105 transition-all absolute top-[25px] right-6 flex justify-center items-center bg-black text-white h-8 w-8 rounded-[50%] border border-black" onClick={() => addwish(item.id)}>{isinfav ? <FaHeart className="text-red-500" /> : <FaRegHeart className=" text-xl" />}
                </div>
                <h1 className="whitespace-nowrap overflow-hidden text-ellipsis text-3xl">{item.title}</h1>
                <h3 className='text-blue-700 font-semibold'>{`Price :- ${item.price}$`}</h3>

                <h2 className="font-normal flex flex-wrap ">Description :-{item.description}</h2>


                <button onClick={() => addtocart(item.id)} className="w-[60%] m-auto bg-orange-400 hover:bg-orange-500 hover:scale-105 duration-300 py-2 rounded-md mt-4">Add to cart</button>
              </div>
            );
          })}
        </div>
        <h1 className="text-3xl font-bold text-center">Similar Product's</h1>

        <div className=" flex flex-wrap justify-evenly gap-4 my-7">
          {

            newdata.map((item) => {
              return (


                <NavLink to={`/product/${item?.id}`} key={item?.id}>
                  <div className="flex flex-wrap hover:scale-105 hover:transition-all relative p-2 w-28 sm:w-40  border border-gray-300 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis shadow-md hover:shadow-lg transition-shadow duration-200 " >
                    {/* <div><h1>{`id : ${item?.id}`}</h1></div> */}
                    <div className="">

                      <img
                        src={item?.image}
                        className="w-full   aspect-[1/1] sm:aspect-[1/1] duration-200 overflow-hidden"
                        alt=" img..."
                      // key={Date.now()}
                      />
                    </div>
                    <h2 className="whitespace-nowrap overflow-hidden text-ellipsis mt-3">
                      {item?.title}
                    </h2>
                    <h3>{`Price : ${item?.price}$`}</h3>
                  </div>
                </NavLink>
              )
            })
          }
        </div>
        {recentForUI.length >= 5 && (
          <div>
            <h1 className="text-3xl font-bold text-center">Recent Viwed Product</h1>
            <div className=" flex flex-wrap justify-evenly gap-4 my-7">
              {

                recentForUI.map((item) => {
                  return (


                    <NavLink to={`/product/${item?.id}`} key={item?.id}>
                      <div className="flex flex-wrap hover:scale-105 hover:transition-all relative p-2 w-28 sm:w-40  border border-gray-300 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis shadow-md hover:shadow-lg transition-shadow duration-200 " >
                        {/* <div><h1>{`id : ${item?.id}`}</h1></div> */}
                        <div className="">

                          <img
                            src={item?.image}
                            className="w-full   aspect-[1/1] sm:aspect-[1/1] duration-200 overflow-hidden"
                            alt=" img..."
                          // key={Date.now()}
                          />
                        </div>
                        <h2 className="whitespace-nowrap overflow-hidden text-ellipsis mt-3">
                          {item?.title}
                        </h2>
                        <h3>{`Price : ${item?.price}$`}</h3>
                      </div>
                    </NavLink>
                  )
                })
              }
            </div>
          </div>)
        }


      </div >
    </>
  )
}

export default product;
