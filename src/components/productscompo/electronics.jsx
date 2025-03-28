import React from "react";
import {  productstore } from "../../contextstore/producscontext";
import { useContext } from "react";
import Singleproduct from "./singleproduct";

const electronics = () => {
  let a = useContext(productstore);
  let electronicsdata = a.filter((item) => {
    return item.category == "electronics";
  });
  console.log("electronics")
  return (
    <>
      <h1 className="text-2xl font-medium text-center mt-3">Electronics</h1>
    <div className="flex p-4 justify-center gap-8 flex-wrap   ">
      {electronicsdata.map((item) => {
        return <Singleproduct value={item} key={item.id - 0.5} />;
      })}
    </div>
      </>
  );
};

export default electronics;
