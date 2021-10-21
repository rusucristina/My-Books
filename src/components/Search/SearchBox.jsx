import React, { useState, useEffect } from "react";
import "./SearchBox.css"
import { BsSearch } from "react-icons/bs"
const SearchBox = ({ searchBooks }) => {
  const [input, setInput] = useState("");
  useEffect(() => {
    searchBooks(input);
  }, [input]);
  return (
    <>
      <form className="search-box">
        <input
          className="input-search-box"
          placeholder="Type to search"
          type="search"
          aria-label="Search"
          onChange={e => setInput(e.target.value)}
        />
        {/* <button id="button-search-box" onClick={searchBooks} type="submit">
          <BsSearch style={{ alignItems: "center" }} />
        </button> */}

      </form>
    </>
  );
};

export default SearchBox;