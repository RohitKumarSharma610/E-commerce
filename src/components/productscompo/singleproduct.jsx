import React, { useContext } from "react";
import { NavLink } from "react-router-dom";


const singleproduct = ({ value }) => {
  // console.log(!value)


 




  return (
    <>


      <NavLink to={`/product/${value.id}`}>
        <div className="hover:scale-105 hover:transition-all relative p-4 w-72 border border-gray-300 rounded-lg whitespace-nowrap overflow-hidden text-ellipsis shadow-md hover:shadow-lg transition-shadow duration-200 " key={value.id}>
          <div><h1>{`id : ${value.id}`}</h1></div>
          <div className="">
               
            <img
              src={value.image}
              className="w-full h-[180px] object-contain duration-200 overflow-hidden"
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
