import React from "react";
import {  productstore } from "../../contextstore/producscontext";
import { useContext } from "react";
import Singleproduct from "./singleproduct";

const women = () => {
  let a = useContext(productstore);
  let womendata = a.filter((item) => {
    return item.category == "women's clothing";
  });
  // console.log("women's clothing")
  return (
    <>
       <h1 className="text-2xl font-medium text-center mt-3">Women's Cloths </h1>
    <div className="flex p-4 justify-center gap-8 flex-wrap ">
      {womendata.map((item) => {
        return <Singleproduct value={item} key={item.id - 0.5} />;
      })}
    </div>
      </>
  );
};

export default women;
