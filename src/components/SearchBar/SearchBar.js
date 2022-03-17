/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SearchBar.css";
import { useState } from "react";

function SearchBar(props) {
  const [term, setTerm] = useState("");

  const search = () => {
    props.onSearch(term);
    setTerm("");
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
        value={term}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
