import React from "react";
import {  productstore } from "../../contextstore/producscontext";
import { useContext } from "react";
import Singleproduct from "./singleproduct";

const men = () => {
  let a = useContext(productstore);
  let mendata = a.filter((item) => {
    return item.category == "men's clothing";
  });
  console.log("men's clothing")
  return (
    <>
       <h1 className="text-2xl font-medium text-center mt-3">Men's Cloths</h1>
    <div className="flex p-4 justify-center gap-8 flex-wrap ">
      {mendata.map((item) => {
        return <Singleproduct value={item} key={item.id} />;
      })}
    </div>
      </>
  );
};

export default men;
