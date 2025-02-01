import React from "react";
import { productstore } from "../../contextstore/producscontext";
import { useContext } from "react";
import Singleproduct from "./singleproduct";
import Hero from "../hero message/heroslider";


const all = () => {
  let a = useContext(productstore);
  console.log(a);
  // console.log(Singleproduct);

  return (
    <>
     <Hero/>
    <div className="flex p-4 justify-center gap-8 flex-wrap ">
      {a.map((item) => {
        // console.log(item)
        
        return <Singleproduct value={item} key={item.id - 0.5} />;
      })}
    </div>
      </>
  );
};

export default all;
