import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
  // console.log(props.searchResults);
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={props.searchResults}
        onAdd={props.onAdd}
        isRemoval={false}
      />
    </div>
  );
}

export default SearchResults;
