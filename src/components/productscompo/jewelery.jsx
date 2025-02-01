import React from "react";
import {  productstore } from "../../contextstore/producscontext";
import { useContext } from "react";
import Singleproduct from "./singleproduct";

const jewelery = () => {
  let a = useContext(productstore);
  let jewelerydata = a.filter((item) => {
    return item.category == "jewelery";
  });
  console.log(jewelery)
  return (
    <>
       <h1 className="text-2xl font-medium text-center mt-3">Jewelery</h1>
    <div className="flex p-4 justify-center gap-8 flex-wrap">
      {jewelerydata.map((item) => {
        return <Singleproduct value={item} key={item.id - 0.5} />;
      })}
    </div>
      </>
  );
};

export default jewelery;
