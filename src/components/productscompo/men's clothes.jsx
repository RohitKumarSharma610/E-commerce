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
    <div className="flex p-4 justify-center gap-8 flex-wrap  h-[100vh]">
      {mendata.map((item) => {
        return <Singleproduct value={item} key={item.id - 0.5} />;
      })}
    </div>
  );
};

export default men;
