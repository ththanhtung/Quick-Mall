import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch, products }) {
  const [value, setValue] = useState("");
  const [placeholderExample, setPlaceholderExample] =
    useState("Search for product");

  useEffect(() => {
    if (!products) return;
    // Random product size
    setInterval(() => {
      const randomProduct =
        products[Math.floor(Math.random() * products.length)];

      setPlaceholderExample(randomProduct && randomProduct.title);
    }, 1000);
  }, [products]);

  return (
    <div className="w-full box-border p-6 mb-8 md:mx-auto md:w-3/5 lg:w-2/5 ">
      <div className="bg-gray-100 flex flex-row rounded-lg">
        <input
          placeholder={placeholderExample}
          className="px-4 py-2 w-full rounded-r-none bg-transparent border-none outline-none "
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(value);
            }
          }}
        />
        <div
          className="px-6 py-4  bg-blue-500 rounded-r-lg text-white cursor-pointer"
          onClick={() => {
            onSearch(value);
          }}
        >
          <FaSearch />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
