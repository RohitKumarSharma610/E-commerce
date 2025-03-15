import React, { useContext, useState } from "react";
import { productstore } from "../../contextstore/producscontext";
import Singleproduct from "./singleproduct";

const Search = () => {
  const searchdata = useContext(productstore); // All products from Context
  const [searchshow, setSearchshow] = useState([]); // Filtered products
  const [searchQuery, setSearchQuery] = useState(""); // Search input state

  function searchcompo(e) {
    const text = e.target.value.toLowerCase();
    setSearchQuery(text); // Update search query state

    if (text === "") {
      setSearchshow([]); // If input is empty, reset search results
    } else {
      const filtered = searchdata.filter((item) => {
        return (
          item.title.toLowerCase().includes(text) ||
          item.category.toLowerCase().includes(text)||
          item.description.toLowerCase().includes(text)
        );
      });

      setSearchshow(filtered);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-3">Search Items</h1>
      <div className="flex justify-center">
        <input
          type="text"
          onChange={searchcompo}
          value={searchQuery}
          placeholder="Search here"
          className="border rounded-md p-2 border-black"
        />
      </div>
      <div className="flex p-4 justify-center gap-8 flex-wrap">
        {searchQuery.length > 0 ? (
          searchshow.length > 0 ? (
            searchshow.map((item) => (
              <Singleproduct value={item} key={item.id} />
            ))
          ) : (
            <div className="h-[70vh] w-[100vw] flex justify-center items-center">

            <h1 className="text-3xl font-bold">Data Not Found</h1>
            </div>
          )
        ) : (
          searchdata.map((item) => <Singleproduct value={item} key={item.id} />)
        )}
      </div>
    </>
  );
};

export default Search;
