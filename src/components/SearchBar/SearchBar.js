/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SearchBar.css";
import { useState } from "react";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const search = () => {
    props.onSearch(searchTerm);
    setSearchTerm("");
  };

  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
        value={searchTerm}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
