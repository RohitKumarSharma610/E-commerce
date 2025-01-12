import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { NavLink } from "react-router-dom";
import {productstore}  from "./contextstore/producscontext"
import { cartContext ,CartContextpovider } from "./contextstore/cartcontext";
import Headroom from "react-headroom"


const App = () => { 
  
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      let response = await fetch("https://fakestoreapi.com/products");
      let data2 = await response.json();
      console.log(data2);
      setData(data2);
    }
    fetchdata();
    // console.log("hello")
  }, []);
  // console.log(data);
  
  data.map((item)=>{
    console.log(item.id)
     return item.id
    });
    
     return (
       <CartContextpovider>
    <productstore.Provider value={data}>
   < Headroom>
      <Navbar />
      </Headroom>
      <Outlet />
      <Footer />
    </productstore.Provider>
    </CartContextpovider>
  );
};
export default App;

