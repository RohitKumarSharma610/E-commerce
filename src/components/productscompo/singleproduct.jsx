import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const singleproduct = ({ value }) => {
  // console.log(!value)


  return (
    <>


      <NavLink to={`/product/${value.id}`}>
        <div className="p-4 w-72 border border-gray-300 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis shadow-md hover:shadow-lg transition-shadow duration-200 " key={value.id}>
          <div><h1>{`id : ${value.id}`}</h1></div>
          <div className="">
            <div className=" absolute right-9 z-10 flex justify-center items-center bg-black text-white h-8 w-8 rounded-[50%] border border-black"><FaRegHeart className="text-xl" />
            </div>
            <img
              src={value.image}
              className="w-full h-[180px] object-contain hover:scale-110 duration-200 overflow-hidden"
              alt=" img..."
            />
          </div>
          <h2 className="whitespace-nowrap overflow-hidden text-ellipsis mt-3">
            {value.title}
          </h2>
          <h3>{`Price : ${value.price}$`}</h3>


        </div>
      </NavLink>

    </>
  );
};

export default singleproduct;
