import React, { useState, useEffect } from "react";

const SearchBox = ({ searchBooks }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    searchBooks(input);
  }, [input]);
  return (
    <div className="input-group mb-3 align-self-center">
      <input
        className="form-control"
        placeholder="Type to search"
        type="search"
        aria-label="Search"
        onChange={e=>setInput(e.target.value)}
      />
      <div className="input-group-append">
        <button onClick={searchBooks} type="submit">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;