import { useState } from "react";


function SearchBar({ filterEmployee}) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
    filterEmployee(searchInput);
  }

  return (
    <input  value={searchInput} onChange={handleChange} className="search" />
  );
}

export default SearchBar;
  