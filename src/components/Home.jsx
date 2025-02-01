import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Hero from "./hero message/heroslider";
const Home = () => {
  return (
    <>
    
      {/* <Hero /> */}
    
        <div className="">
          <Outlet />
        </div>
    </>
  );
};

export default Home;
