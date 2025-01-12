import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Hero from "./hero message/heroslider";
const Home = () => {
  return (

    
    <div className="p-4 mt-9">
      {/* <Hero/> */}
  {/* Navigation Section */}
  <div className="flex flex-wrap justify-center gap-3 m-3">
    <NavLink
      to="/products/all"
      className={({ isActive }) =>
        isActive
          ? "bg-gray-600 text-white rounded-lg px-4 py-2"
          : "bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2"
      }
    >
      <button className="text-sm md:text-base">All Products</button>
    </NavLink>

    <NavLink
      to="electronics"
      className={({ isActive }) =>
        isActive
          ? "bg-gray-600 text-white rounded-lg px-4 py-2"
          : "bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2"
      }
    >
      <button className="text-sm md:text-base">Electronics</button>
    </NavLink>

    <NavLink
      to="jewelery"
      className={({ isActive }) =>
        isActive
          ? "bg-gray-600 text-white rounded-lg px-4 py-2"
          : "bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2"
      }
    >
      <button className="text-sm md:text-base">Jewellery</button>
    </NavLink>

    <NavLink
      to="men's clothing"
      className={({ isActive }) =>
        isActive
          ? "bg-gray-600 text-white rounded-lg px-4 py-2"
          : "bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2"
      }
    >
      <button className="text-sm md:text-base">Men's Clothing</button>
    </NavLink>

    <NavLink
      to="women's clothing"
      className={({ isActive }) =>
        isActive
          ? "bg-gray-600 text-white rounded-lg px-4 py-2"
          : "bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2"
      }
    >
      <button className="text-sm md:text-base">Women's Clothing</button>
    </NavLink>
  </div>

  {/* Outlet Section */}
  <div className="mt-6">
    <Outlet />
  </div>
</div>
  );
};

export default Home;
